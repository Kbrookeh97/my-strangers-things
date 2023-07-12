import React, { useState } from 'react';
import { login } from '../ajax-requests';
import { Button } from '@mui/material';
import './style.css'

const styles = {
  div: {
    display: 'flex',
    marginRight: '5px',
    padding: '10px',
    justifyContent: 'center'
  },
  h3: {
    fontFamily: 'mali',
    display: 'flex',
    justifyContent: 'center'
  }
}

function Login({ setToken, navigate }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  
  async function handleSubmit(event) {
    event.preventDefault();
    const user = {username, password};
    /*
      {
        username: 'username value',
        password: 'password value'
      }
    */
  
    const results = await login(user);
    
    if (results.success) {
      setToken(results.data.token);
      window.localStorage.setItem("token", results.data.token);
      navigate('/');
    }
  }
  
  
  return (
    <div >
      <h3 style={styles.h3}>Welcome back! Login Here</h3>
    <form onSubmit={handleSubmit} style={styles.div}>
      <input style={styles.div}
        type='text'
        placeholder='Enter Username'
        onChange={(event) => setUsername(event.target.value)}
      />
      <input style={styles.div}
        type='password'
        placeholder='Enter Password'
        onChange={(event) => setPassword(event.target.value)}
      />
      <Button type='submit' variant='outlined'>Submit</Button>
    </form>
    </div>
  )
}

export default Login;
