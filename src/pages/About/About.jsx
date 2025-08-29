import React from 'react';
import { Link } from 'react-router-dom';
import { FiHeart, FiUsers, FiGlobe, FiAward } from 'react-icons/fi';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>About Clipnest</h1>
            <p className="hero-subtitle">Where creativity meets community</p>
            <p className="hero-description">
              Clipnest is more than just a platform for sharing posts. It's a vibrant community 
              where creative minds come together to inspire, discover, and celebrate the beauty 
              of human imagination.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p>
              To inspire creativity and foster meaningful connections through visual storytelling. 
              We believe everyone has a unique perspective to share, and every post has the power 
              to spark inspiration in others.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <FiHeart />
              </div>
              <h3>Creativity First</h3>
              <p>We celebrate all forms of creative expression and encourage users to share their unique vision with the world.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <FiUsers />
              </div>
              <h3>Community</h3>
              <p>Building meaningful connections between creators and enthusiasts who share similar passions and interests.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <FiGlobe />
              </div>
              <h3>Diversity</h3>
              <p>Embracing different cultures, perspectives, and creative styles from around the globe.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <FiAward />
              </div>
              <h3>Quality</h3>
              <p>Maintaining high standards for content while encouraging growth and learning for all creators.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="story-content">
            <h2>Our Story</h2>
            <p>
              Clipnest was born from a simple idea: what if we could create a space where people 
              could not only share their creative work but also discover inspiration from others? 
              A place where a photographer in Tokyo could inspire a designer in New York, where 
              a chef's food photography could spark ideas for an artist's next painting.
            </p>
            <p>
              What started as a small community of friends sharing their creative projects has 
              grown into a global platform connecting millions of creators, artists, photographers, 
              designers, and creative enthusiasts. Every day, we're amazed by the incredible 
              content our community shares and the connections that form around shared passions.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">10M+</div>
              <div className="stat-label">Posts Shared</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5M+</div>
              <div className="stat-label">Active Users</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">150+</div>
              <div className="stat-label">Countries</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Categories</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2>Meet Our Team</h2>
          <p className="team-intro">
            We're a passionate group of designers, developers, and creative professionals 
            dedicated to building the best platform for creative expression.
          </p>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" alt="Team Member" />
              </div>
              <h3>Alex Chen</h3>
              <p>Founder & CEO</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face" alt="Team Member" />
              </div>
              <h3>Sarah Johnson</h3>
              <p>Head of Design</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="Team Member" />
              </div>
              <h3>Michael Rodriguez</h3>
              <p>Lead Developer</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Join Our Community?</h2>
            <p>Start sharing your creativity and discover amazing posts from around the world.</p>
            <div className="cta-buttons">
              <Link to="/signup" className="btn btn-primary">Sign Up Free</Link>
              <Link to="/explore" className="btn btn-secondary">Explore Posts</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="about-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <span className="logo-icon">📌</span>
              <span className="logo-text">Clipnest</span>
            </div>
            <p>&copy; 2024 Clipnest. All rights reserved.</p>
            <div className="footer-links">
              <Link to="/about">About</Link>
              <Link to="/privacy">Privacy</Link>
              <Link to="/terms">Terms</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
