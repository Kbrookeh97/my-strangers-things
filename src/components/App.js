import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './style.css'
import { 
  Register,
  Posts,
  Login,
  CreatePost,
  Nav,
  UpdatePost,
  SendMessage,
  Profile
} from './';

import { fetchPosts, myData } from '../ajax-requests';


function App() {
  const [token, setToken] = useState('');
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [messageContent, setMessageContent] = useState('');
  
  const navigate = useNavigate();

  const handleSendMessage = (content) => {
    setMessageContent(content);
  };
  
  function tokenCheck() {
    if (window.localStorage.getItem('token')) {
      setToken(window.localStorage.getItem('token'));
    }
  }
  
  async function getPosts() {
    const results = await fetchPosts(token);
    if (results.success) {
      setPosts(results.data.posts)
    }
  }
  
  async function getMyData() {
    const results = await myData(token);
    if (results.success) {
      setUser(results.data);
    }
  }
  
  useEffect(() => {
    tokenCheck();
  }, [])
  
  useEffect(() => {
    getPosts();
    if (token) {
      getMyData();
      setIsLoggedIn(true);
    }
  }, [token])
  
  
  return (
    <div>
      <Nav 
        setToken={setToken} 
        setIsLoggedIn={setIsLoggedIn} 
        isLoggedIn={isLoggedIn} 
        navigate={navigate}
      />
      <Routes>
        <Route 
          path='/' 
          element={<Posts posts={posts} isLoggedIn={isLoggedIn} token={token} getPosts={getPosts}/>} 
        />
        <Route 
          path='/register' 
          element={<Register setToken={setToken} navigate={navigate} />} 
        />
        <Route
          path='/login'
          element={<Login setToken={setToken} navigate={navigate} />}
        />
        <Route
          path='/create-post'
          element={<CreatePost token={token} getPosts={getPosts} navigate={navigate} />}
        />
        <Route
          path='/update-post/:postId'
          element={<UpdatePost 
          posts={posts} 
          token={token} 
          getPosts={getPosts} 
          navigate={navigate}/>}
        />
        <Route 
        path='/send-message/:postId'
        element={<SendMessage
          posts={posts}
          token={token}
          getPosts={getPosts}
          navigate={navigate}
          handleSend={handleSendMessage}
        />}
        />
        <Route 
        path='/profile'
        element={<Profile
          user={user}
          posts={posts}
          token={token}
          fetchPosts={fetchPosts}
          navigate={navigate}
          messageContent={messageContent}
        />}
        />
      </Routes>
    </div>
  );
}

export default App;
