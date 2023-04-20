import React from 'react';

function Posts({ posts }) {
  // console.log('from Posts component', posts)
  
  return (
    <>
      {
        posts && posts.map((post) => {
          return (
            <p key={post._id}>{post.title}</p>
          )
        })
      }
    </>
  );
}

export default Posts;
