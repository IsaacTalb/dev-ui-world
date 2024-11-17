import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './tailwind.generated.css';
import Header from './components/Header';
import Aside from './components/Aside';
import Content from './components/Content';
import Slider from './components/Slider';
import Footer from './components/Footer';

const App = () => {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  const [showModal, setShowModal] = useState(false);

  // Show the modal when the app loads if the user is not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      setShowModal(true);
    }
  }, [isAuthenticated]);

  // Handle login button click
  const handleLogin = async () => {
    setShowModal(false);
    await loginWithRedirect();
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <Aside />
        <div className="flex-1 flex flex-col">
          <Slider />
          <Content />
        </div>
      </div>
      <Footer />

      {/* Modal for login/signup */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-3/4 md:w-1/2 lg:w-1/3">
            <h2 className="text-lg font-bold mb-4">Welcome to Dev-UI World</h2>
            <p className="mb-6">Please log in or sign up to access the site.</p>
            <button
              onClick={handleLogin}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              Log In / Sign Up
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
