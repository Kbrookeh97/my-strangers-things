import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import './style.css'

const styles = {
  posts: {
    display: 'flex',
    flexDirection: 'column',
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
    fontFamily: 'mali',
    width: '12%',
    color: 'purple',
    background: 'rgba(163, 123, 202, 1)'
  }
}

function Posts({ posts }) {
  // console.log('from Posts component', posts)
  
  return (
    <div style={styles.posts}>
      {
        posts && posts.map((post) => {
          return (
            <Fragment key={post._id}>
              {
                post.isAuthor ? (
                  <>
                    <p>{post.title}</p>
                    <Button variant='outlined'>Delete</Button>
                    <Link to={`/update-post/${post._id}`} ><button>Edit Post</button></Link>
                  </>
                ) : (
                  <>
                    <p>{post.title}</p>
                    <Button style={styles.button} variant='outlined'>Message</Button>
                  </>
                )
              }
            </Fragment>
          )
        })
      }
    </div>
  );
}

export default Posts;
