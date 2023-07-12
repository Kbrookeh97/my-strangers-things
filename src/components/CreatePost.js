import React, { useState } from 'react';
import { makePost } from '../ajax-requests';
import { Link } from 'react-router-dom';
import './style.css'
import { Button, ButtonGroup } from '@mui/material';

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

function CreatePost({ token, getPosts }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  // const [location, setLocation] = useState('');
  // const [willDeliver, setWillDeliver] = useState(false);
  
  async function handleSubmit(event) {
    event.preventDefault();
    const post = {title, description, price}
    
    const results = await makePost(post, token)
    
    if (results.success) {
      getPosts();
    } else {
      getPosts();
    }
  }
  
  return (
    <div>
      <h3 style={styles.h3}>Create Post Here!</h3>
    <form onSubmit={handleSubmit} style={styles.div}>
      <input style={styles.div}
        type='text'
        placeholder='Enter Title'
        value={title}
        onChange={(event) => {setTitle(event.target.value)}}
      />
      <input style={styles.div}
        type='text'
        placeholder='Enter Description'
        value={description}
        onChange={(event) => {setDescription(event.target.value)}}
      />
      <input style={styles.div}
        type='text'
        placeholder='Enter Price'
        value={price}
        onChange={({target: {value}}) => {setPrice(value)}}
      />
      <ButtonGroup variant='outlined'>
        <Button type='submit' >Create Post</Button>
        <Button><Link to='/'>Go Home</Link></Button>
      </ButtonGroup>
    </form>
    </div>
  )
}

export default CreatePost;
