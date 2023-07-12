import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { updatePost } from '../ajax-requests';
import { Button } from '@mui/material';

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
    background: 'rgba(163, 123, 202, 1)',
  }
};

function UpdatePost({ posts, token, getPosts }) {
  const navigate = useNavigate();
  const { postId } = useParams();
  // console.log("params 'id' value: ", postId);
  const [post] = posts.filter((post) => post._id === postId );
  
  const { title, description, price } = post ? post : {};
  
  const [updatedTitle, setTitle] = useState(title);
  const [updatedDescription, setDescription] = useState(description);
  const [updatedPrice, setPrice] = useState(price);
  const [errorMessage, setErrorMessage] = useState('');
  
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const updatedPost = {
      title: updatedTitle,
      description: updatedDescription,
      price: updatedPrice,
    }
    
    const results = await updatePost(postId, token, updatedPost);
    if (results.success) {
      getPosts();
      navigate('/');
    } else {
      setErrorMessage(results.error.message)
    }
  }
  
  
  return (
    <>
    <div>
      <h3 style={styles.h3}>Edit Your Post Here!</h3>
      {post ? (
        <>
          <form onSubmit={handleSubmit} style={styles.div}>
            <input style={styles.div}
              type="text"
              value={updatedTitle}
              onChange={(ev) => setTitle(ev.target.value)}
            />
            <input style={styles.div}
              type="text"
              value={updatedDescription}
              onChange={(ev) => setDescription(ev.target.value)}
            />
            <input style={styles.div}
              type="text"
              value={updatedPrice}
              onChange={(ev) => setPrice(ev.target.value)}
            />
            <Button style={styles.button} variant='outlined' type='submit'>Save Changes</Button>
          </form>
          {
            errorMessage && <p>{errorMessage}</p>
          }
        </>
      ) : (
        <h1>Post Does Not Exist.</h1>
      )}
      </div>
    </>
  )
}

export default UpdatePost;
