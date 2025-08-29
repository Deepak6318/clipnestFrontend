import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FiEye, FiEyeOff, FiMail, FiLock } from 'react-icons/fi';
import { useAuth } from '../../context/AuthContext';
import './Login.css';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
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
      
      // Redirect to intended page or home
      const from = location.state?.from?.pathname || '/home';
      navigate(from, { replace: true });
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
      
      const from = location.state?.from?.pathname || '/home';
      navigate(from, { replace: true });
    } catch (error) {
      console.error('Google login failed:', error);
      alert('Google login failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="login-page">
      <div className="container">
        <div className="login-container">
          {/* Logo and Welcome */}
          <div className="login-header">
            <Link to="/" className="logo-link">
              <div className="logo">
                <span className="logo-icon">📌</span>
                <span className="logo-text">Clipnest</span>
              </div>
            </Link>
            <h1>Welcome back</h1>
            <p>Log in to discover your creative soul</p>
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

          {/* Google Login */}
          <button className="google-login-btn" onClick={handleGoogleLogin} disabled={isSubmitting}>
            <div className="google-logo">G</div>
            <span>Continue with Google</span>
          </button>

          {/* Sign Up Link */}
          <div className="signup-link">
            <p>
              Don't have an account? <Link to="/signup">Sign up</Link>
            </p>
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
  );
};

export default Login;
