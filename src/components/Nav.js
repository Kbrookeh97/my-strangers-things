import React from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup, } from "@mui/material";
import './style.css'

const styles = {
  nav: { 
    display: 'flex',
    flexDrirection: 'row',
    justifyContent: 'space-between'
  },
  h1: {
    fontFamily: 'mali',
    marginRight: '25px'
  },
  button: {
    color: 'white',
  }
};

function Nav({ setToken, setIsLoggedIn, isLoggedIn }) {
  
  function logout() {
    setToken('');
    setIsLoggedIn(false);
    window.localStorage.removeItem("token");
  }
  
  return (
    <div style={styles.nav}>
    <nav >
      <h1 style={styles.h1}>Stranger's Things!</h1>
      {isLoggedIn ? (
        <>
          <ButtonGroup>
            <Button variant="text" style={styles.button}><Link to="/create-post">Create Post</Link></Button>
            <Button variant="text" style={styles.button}><Link to="/">See all posts</Link></Button>
            <Button variant="text"  style={styles.button} onClick={logout}>Log Out</Button>
          </ButtonGroup>
        </>
      ) : (
        <>
        <ButtonGroup>
          <Button variant="text" style={styles.button}><Link to="/login">Login</Link></Button>
          <Button variant="text" style={styles.button}><Link to="/register">Register</Link></Button>
        </ButtonGroup>
        </>
      )}
    </nav>
    </div>
  );
}

export default Nav;
