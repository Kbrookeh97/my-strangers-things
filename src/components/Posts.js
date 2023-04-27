import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function Posts({ posts }) {
  // console.log('from Posts component', posts)
  
  return (
    <>
      {
        posts && posts.map((post) => {
          return (
            <Fragment key={post._id}>
              {
                post.isAuthor ? (
                  <>
                    <p>{post.title}</p>
                    <button>Delete</button>
                    <Link to={`/update-post/${post._id}`} ><button>Edit Post</button></Link>
                  </>
                ) : (
                  <>
                    <p>{post.title}</p>
                    <button>Message</button>
                  </>
                )
              }
            </Fragment>
          )
        })
      }
    </>
  );
}

export default Posts;
