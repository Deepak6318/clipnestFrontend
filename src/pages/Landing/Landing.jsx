import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiEye, FiEyeOff, FiMail, FiLock } from 'react-icons/fi';
import { useAuth } from '../../context/AuthContext';
import './Landing.css';

const Landing = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Login user
      const user = login(formData);
      console.log('Login successful:', user);
      
      // Redirect to home page
      navigate('/home');
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsSubmitting(true);
    
    try {
      // Simulate Google login
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const user = login({ email: 'demo@google.com', name: 'Demo User' });
      console.log('Google login successful:', user);
      
      navigate('/home');
    } catch (error) {
      console.error('Google login failed:', error);
      alert('Google login failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="landing">
      {/* Navigation Bar */}
      <nav className="landing-nav">
        <div className="nav-left">
          <Link to="/" className="nav-logo">
            <span className="logo-icon">📌</span>
            <span className="logo-text">Clipnest</span>
          </Link>
          <Link to="/explore" className="nav-explore">Explore</Link>
        </div>
        
        <div className="nav-right">
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/create" className="nav-link">Create</Link>
          <Link to="/login" className="nav-btn nav-btn-login">Log in</Link>
          <Link to="/signup" className="nav-btn nav-btn-signup">Sign up</Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="landing-content">
        {/* Left Section - Background Image and Slogan */}
        <div className="landing-left">
          <div className="background-overlay">
            <div className="slogan">
              <h1>Discover Your Creative Soul</h1>
            </div>
          </div>
        </div>

        {/* Right Section - Login Form */}
        <div className="landing-right">
          <div className="login-card">
            {/* Info Banner */}
            <div className="info-banner">
              <div className="info-icon">ℹ️</div>
              <p>Welcome to Clipnest! Log in to start sharing your creative posts.</p>
            </div>

            {/* Logo and Welcome */}
            <div className="welcome-section">
              <div className="welcome-logo">
                <span className="logo-icon">📌</span>
              </div>
              <h2>Welcome to Clipnest</h2>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <div className="input-wrapper">
                  <FiMail className="input-icon" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="input-wrapper">
                  <FiLock className="input-icon" />
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Password"
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
              </div>

              <div className="forgot-password">
                <Link to="/forgot-password">Forgot your password?</Link>
              </div>

              <button type="submit" className="login-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Logging in...' : 'Log in'}
              </button>
            </form>

            {/* Divider */}
            <div className="divider">
              <span>OR</span>
            </div>

            {/* Alternative Login Options */}
            <div className="alternative-login">
              <button 
                className="google-login-btn" 
                onClick={handleGoogleLogin}
                disabled={isSubmitting}
              >
                <div className="google-logo">G</div>
                <span>Continue with Google</span>
              </button>
            </div>

            {/* Legal Text */}
            <div className="legal-text">
              <p>
                By continuing, you agree to Clipnest's Terms of Service and acknowledge you've read our Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
