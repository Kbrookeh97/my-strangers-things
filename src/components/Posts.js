import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup } from '@mui/material';
import { deletePost, } from "../ajax-requests";
import './style.css'

const styles = {
  posts: {
    fontFamily: 'gaegu',
    display: 'flex',
    flexDirection: 'column',
    marginRight: '5px',
    padding: '10px',
    justifyContent: 'center',
    border: 'solid-black',
  },
  h3: {
    fontFamily: 'mali',
    display: 'flex',
    justifyContent: 'center'
  },
  button: {
    fontFamily: 'gaegu',
    fontWeight: 'bold',
    width: '150px',
    color: 'black',
    background: 'rgba(163, 123, 202, 1)'
  },
  container: {
    border: 'solid-black'
  }
};




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
                    <p style={{padding: "1px 40px", fontSize: "20px", flexDirection: "column", border: "solid black"}}>
                      <span style={{ fontWeight: "bold", marginRight:"10pt", marginLeft:"0pt", fontSize: '30pt'}}>{post.title}</span>
                      <span style={{ marginRight:"10pt"}}>${post.price}</span>
                      <span style={{ marginRight:"10pt"}}>Description: {post.description}</span>
                    <ButtonGroup>
                    <Button variant='outlined' style={styles.button}>Delete</Button>
                    <Button variant='outlined' style={styles.button}><Link to={`/update-post/${post._id}`} style={{color: "black"}}>Edit Post</Link></Button>
                    </ButtonGroup>
                    </p>
                    
                  </>
                ) : (
                  <>
                    <p style={{padding: "1px 40px", fontSize: "20px", flexDirection: "column", border: "solid black"}}>
                      <span style={{ fontWeight: "bold", marginRight:"10pt", marginLeft:"0pt", fontSize: '30pt'}}>{post.title}</span>
                      <span style={{ marginRight:"10pt"}}>${post.price}</span>
                      <span style={{ marginRight:"10pt"}}>Description: {post.description}</span>
                      <Button style={styles.button} variant='outlined'><Link to="/sendMessage">Send Message</Link></Button>
                    </p>
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
