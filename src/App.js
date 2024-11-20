import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './tailwind.generated.css';
import PublicPage from './pages/PublicPage';
import PostPage from './pages/PostPage';
import LoginPage from './pages/LoginPage';
import Header from './components/Header';
import Aside from './components/Aside';
import Content from './components/Content';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<PublicPage />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Aside />
      <Content />
      <Footer />
    </Router>
  );
};

export default App;
