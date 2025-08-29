import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiSearch, FiPlus, FiUser, FiLogOut, FiMenu, FiX } from 'react-icons/fi';
import { useAuth } from '../../context/AuthContext';
import './Header.css';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/explore?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      logout();
      navigate('/');
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo (match Landing page) */}
          <Link to="/home" className="logo" aria-label="Clipnest home">
            <span className="logo-icon">📌</span>
            <span className="logo-text">Clipnest</span>
          </Link>

          {/* Search Bar */}
          <form className="search-form" onSubmit={handleSearch}>
            <div className="search-input-wrapper">
              <FiSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search for posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>
          </form>

          {/* Navigation */}
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <Link to="/home" className="nav-link">Home</Link>
            <Link to="/explore" className="nav-link">Explore</Link>
            <Link to="/create" className="nav-link create-link">
              <FiPlus />
              Create Post
            </Link>
            <Link to="/profile" className="nav-link profile-link">
              <FiUser />
              {user ? user.name : 'Profile'}
            </Link>
            <button className="nav-link logout-btn" onClick={handleLogout}>
              <FiLogOut />
              Logout
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
