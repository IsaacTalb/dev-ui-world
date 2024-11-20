import React, { useState } from 'react';
import api from '../utils/api';

const PostPage = () => {
  const [content, setContent] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) {
      alert(' Please log in to post content as Creator.');
      return;
    }
    try {
      await api.post(
        '/post',
        { content },
        { headers: { Authorization: `Bearer $ {token}` } }
      );
      alert('Content posted successfully!');
    } catch (error) {
      console.error('Failed to post content', error);
      alert('Error posting content. Please Log in.');
    }
  };

  return (
    <div>
      <h2>Post Content</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enter your UI component ..."
          required
        ></textarea>
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default PostPage;
