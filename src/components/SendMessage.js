import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Button, ButtonGroup } from '@mui/material';
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
  },
  button: {
    fontFamily: 'gaegu',
    fontWeight: 'bold',
    width: '100px',
    color: 'black',
    background: 'rgba(163, 123, 202, 1)'
  },
}

const SendMessage = ({ currentPost, token }) => {
  const post = currentPost;
  const [message, setMessage] = useState("");
  
  async function handleSubmit(event) {
    event.preventDefault();
      console.log(message.value)
      alert('Message sent!')
      setMessage("")
      
    
  }
  return (
    <div >
      <h3 style={styles.h3}>Send Message Here!</h3>
    <form onSubmit={handleSubmit} style={styles.div}>
      <input style={styles.div}
        type='text'
        placeholder='Enter Message'
        onChange={(event) => setMessage(event.target.value)}
      />
      <ButtonGroup>
      <Button style={styles.button} type='submit' variant='outlined'>Submit</Button>
      <Button style={styles.button}><Link to='/' style={{color: "black"}}>Go Home</Link></Button>
      </ButtonGroup>
    </form>
    
    </div>
  )
}

export default SendMessage;

