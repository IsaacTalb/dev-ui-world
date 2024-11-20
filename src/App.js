import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { getAuthenticatedUser } from './utils/api'; // Import the functions
import Layout from './components/Layout';
import PublicPage from './pages/PublicPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PostPage from './pages/PostPage'; // Where the user can post after authentication
import ProtectedRoute from './components/ProtectedRoute';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './tailwind.generated.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getAuthenticatedUser();
        setUser(data); // Set user data if authenticated
        setIsAuthenticated(true);
      } catch {
        setIsAuthenticated(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" component={PublicPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route
            path="/posts"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <PostPage />
              </ProtectedRoute>
            }
          />
          {/* Add more routes as needed */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
