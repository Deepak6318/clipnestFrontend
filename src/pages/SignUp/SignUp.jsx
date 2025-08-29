import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiEye, FiEyeOff, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { useAuth } from '../../context/AuthContext';
import './SignUp.css';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Auto-login after signup
        const user = login(formData);
        console.log('Signup successful:', user);
        
        navigate('/home');
      } catch (error) {
        console.error('Signup failed:', error);
        alert('Signup failed. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleGoogleSignup = async () => {
    setIsSubmitting(true);
    
    try {
      // Simulate Google signup
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const user = login({ email: 'demo@google.com', name: 'Demo User' });
      console.log('Google signup successful:', user);
      
      navigate('/home');
    } catch (error) {
      console.error('Google signup failed:', error);
      alert('Google signup failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="signup-page">
      <div className="container">
        <div className="signup-container">
          {/* Logo and Welcome */}
          <div className="signup-header">
            <Link to="/" className="logo-link">
              <div className="logo">
                <span className="logo-icon">📌</span>
                <span className="logo-text">Clipnest</span>
              </div>
            </Link>
            <h1>Join Clipnest</h1>
            <p>Sign up to discover your creative soul</p>
          </div>

          {/* Sign Up Form */}
          <form onSubmit={handleSubmit} className="signup-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <div className="input-wrapper">
                <FiUser className="input-icon" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className={errors.name ? 'error' : ''}
                  required
                />
              </div>
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

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
                  placeholder="Enter your email"
                  className={errors.email ? 'error' : ''}
                  required
                />
              </div>
              {errors.email && <span className="error-message">{errors.email}</span>}
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
                  placeholder="Create a password"
                  className={errors.password ? 'error' : ''}
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
              {errors.password && <span className="error-message">{errors.password}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div className="input-wrapper">
                <FiLock className="input-icon" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirm your password"
                  className={errors.confirmPassword ? 'error' : ''}
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
              {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
            </div>

                           <button type="submit" className="signup-btn" disabled={isSubmitting}>
                 {isSubmitting ? 'Signing up...' : 'Sign up'}
               </button>
          </form>

          {/* Divider */}
          <div className="divider">
            <span>OR</span>
          </div>

          {/* Google Sign Up */}
          <button className="google-signup-btn" onClick={handleGoogleSignup} disabled={isSubmitting}>
            <div className="google-logo">G</div>
            <span>Continue with Google</span>
          </button>

          {/* Login Link */}
          <div className="login-link">
            <p>
              Already have an account? <Link to="/login">Log in</Link>
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

export default SignUp;
