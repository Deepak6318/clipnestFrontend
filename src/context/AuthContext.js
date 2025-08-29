import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is logged in on app start
  useEffect(() => {
    const token = localStorage.getItem('clipnest_token');
    const userData = localStorage.getItem('clipnest_user');
    
    if (token && userData) {
      try {
        setUser(JSON.parse(userData));
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Error parsing user data:', error);
        localStorage.removeItem('clipnest_token');
        localStorage.removeItem('clipnest_user');
      }
    }
    setLoading(false);
  }, []);

  const login = (userData) => {
    // Simulate API login
    const token = 'demo_token_' + Date.now();
    const user = {
      id: userData.id || Date.now(),
      name: userData.name || userData.email,
      email: userData.email,
      avatar: userData.avatar || `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face`
    };

    localStorage.setItem('clipnest_token', token);
    localStorage.setItem('clipnest_user', JSON.stringify(user));
    
    setUser(user);
    setIsAuthenticated(true);
    
    return user;
  };

  const logout = () => {
    localStorage.removeItem('clipnest_token');
    localStorage.removeItem('clipnest_user');
    setUser(null);
    setIsAuthenticated(false);
  };

  const value = {
    isAuthenticated,
    user,
    login,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
