import React, { useState, useEffect } from 'react';
import Post from '../../components/Post/Post';
import './Profile.css';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [activeTab, setActiveTab] = useState('posts');
  const [loading, setLoading] = useState(true);

  // Mock user data
  useEffect(() => {
    const mockUser = {
      id: 1,
      name: "John Doe",
      username: "@johndoe",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      bio: "Passionate photographer and creative designer. Love sharing beautiful moments with the world.",
      followers: 1247,
      following: 892,
      posts: 45,
      location: "San Francisco, CA",
      website: "https://johndoe.com",
      joinedDate: "March 2020"
    };

    const mockPosts = [
      {
        id: 1,
        title: "Beautiful Mountain Landscape",
        description: "Stunning view of snow-capped mountains at sunset",
        imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
        author: {
          name: "John Doe",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face"
        },
        likes: 124,
        comments: 8,
        isLiked: true,
        isSaved: false
      },
      {
        id: 2,
        title: "Delicious Food Photography",
        description: "Homemade pasta with fresh herbs and parmesan",
        imageUrl: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&h=600&fit=crop",
        author: {
          name: "John Doe",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face"
        },
        likes: 89,
        comments: 12,
        isLiked: false,
        isSaved: true
      },
      {
        id: 3,
        title: "Modern Interior Design",
        description: "Minimalist living room with natural light",
        imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=500&fit=crop",
        author: {
          name: "John Doe",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face"
        },
        likes: 256,
        comments: 23,
        isLiked: true,
        isSaved: false
      }
    ];

    // Simulate loading
    setTimeout(() => {
      setUser(mockUser);
      setPosts(mockPosts);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="profile">
      <div className="container">
        {/* Profile Header */}
        <div className="profile-header">
          <div className="profile-cover">
            <div className="profile-avatar">
              <img src={user.avatar} alt={user.name} />
            </div>
          </div>
          
          <div className="profile-info">
            <div className="profile-main">
              <h1 className="profile-name">{user.name}</h1>
              <p className="profile-username">{user.username}</p>
              <p className="profile-bio">{user.bio}</p>
              
              <div className="profile-meta">
                <div className="meta-item">
                  <span className="meta-value">{user.posts}</span>
                  <span className="meta-label">Posts</span>
                </div>
                <div className="meta-item">
                  <span className="meta-value">{user.followers}</span>
                  <span className="meta-label">Followers</span>
                </div>
                <div className="meta-item">
                  <span className="meta-value">{user.following}</span>
                  <span className="meta-label">Following</span>
                </div>
              </div>
            </div>
            
            <div className="profile-actions">
              <button className="btn btn-primary">Edit Profile</button>
              <button className="btn btn-secondary">Share Profile</button>
            </div>
          </div>
        </div>

        {/* Profile Details */}
        <div className="profile-details">
          <div className="detail-item">
            <span className="detail-icon">📍</span>
            <span className="detail-text">{user.location}</span>
          </div>
          <div className="detail-item">
            <span className="detail-icon">🌐</span>
            <a href={user.website} className="detail-link" target="_blank" rel="noopener noreferrer">
              {user.website}
            </a>
          </div>
          <div className="detail-item">
            <span className="detail-icon">📅</span>
            <span className="detail-text">Joined {user.joinedDate}</span>
          </div>
        </div>

        {/* Profile Tabs */}
        <div className="profile-tabs">
          <button
            className={`tab-btn ${activeTab === 'posts' ? 'active' : ''}`}
            onClick={() => setActiveTab('posts')}
          >
            Posts
          </button>
          <button
            className={`tab-btn ${activeTab === 'saved' ? 'active' : ''}`}
            onClick={() => setActiveTab('saved')}
          >
            Saved
          </button>
          <button
            className={`tab-btn ${activeTab === 'liked' ? 'active' : ''}`}
            onClick={() => setActiveTab('liked')}
          >
            Liked
          </button>
        </div>

        {/* Posts Grid */}
        <div className="posts-grid">
          {posts.map(post => (
            <div key={post.id} className="post-wrapper">
              <Post post={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
