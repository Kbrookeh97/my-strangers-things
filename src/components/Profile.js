import React, { useState } from 'react';
import { Button, Card, CardContent, TextField, Typography } from '@mui/material';
import './style.css'

const styles = {
  fontFamily: 'Roboto',
  h1: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    marginTop: '10px',
    marginBottom: '10px',
  },
  h2: {
    fontFamily: 'Roboto'
  },
  myprofile: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Roboto',
    marginTop: '20px',
    width: '100%',
    padding: '10px',
    color: '#405DE6',
    fontWeight: 800,
  },
  card: {
    fontFamily: "Roboto",
    marginTop: "10px",
    width: "90%",
    padding: "10px",
  },
  messageCard: {
    marginTop: '10px',
    padding: '10px',
  },
  messageHeading: {
    marginTop: '0',
  },
  messageContent: {
    marginBottom: '0',
  },
  noMessagesText: {
    fontFamily: 'Roboto',
    textAlign: 'center',
    marginTop: '10px',
    marginBottom: '10px'
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh',
  }
};


function Profile({ user, token, logout }) {
  const [posts, setPosts] = useState([]);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

//this message functionality isn't built out, I couldn't seem to figure out how to display messages sent to my account and back.

  const handleSend = (event) => {
    event.preventDefault();
    setMessages(messages => [...messages, {postId: 1, message: {content: newMessage}}]);
    setNewMessage('');
  }

  return (
    <div style={styles.container}>
    <>
      <Card variant='outlined' style={styles.card}>
        <CardContent style={styles.myprofile}>
          <Typography variant='h4' style={styles.h1}>My Profile</Typography>
        </CardContent>
        <CardContent>
          <Typography variant='h5' style={styles.h2}>My messages:</Typography>
          {messages.length > 0 ? (
            messages.map((message, index) => (
              <Card key={index} variant='outlined' style={styles.messageCard}>
                <CardContent>
                  <Typography variant='h6' style={styles.messageHeading}>{`Post ID: ${message.postId}`}</Typography>
                  <Typography variant='body1' style={styles.messageContent}>{`Message: ${message.message.content}`}</Typography>
                </CardContent>
              </Card>
            ))
          ) : (
            <Typography variant='body1' style={styles.noMessagesText}>You haven't received any messages yet.</Typography>
          )}
          <form onSubmit={handleSend}>
            <TextField 
              label='New message'
              variant='standard'
              value={newMessage}
              onChange={(event) => {setNewMessage(event.target.value)}}
              fullWidth
            />
            <Button type='submit' variant='contained' fullWidth style={{ marginTop: '10px' }}>
              Send
            </Button>
          </form>
        </CardContent>
      </Card>
    </>
    </div>
  );
}

export default Profile;
