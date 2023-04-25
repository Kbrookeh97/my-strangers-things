import React, { Fragment } from 'react';

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
