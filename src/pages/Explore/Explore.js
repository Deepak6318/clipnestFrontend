import React, { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';
import { useSearchParams } from 'react-router-dom';
import Post from '../../components/Post/Post';
import './Explore.css';

const Explore = () => {
  const [searchParams] = useSearchParams();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const searchQuery = searchParams.get('search') || '';

  const categories = [
    { id: 'all', name: 'All Posts', icon: '🌟' },
    { id: 'nature', name: 'Nature', icon: '🌿' },
    { id: 'food', name: 'Food', icon: '🍽️' },
    { id: 'design', name: 'Design', icon: '🎨' },
    { id: 'travel', name: 'Travel', icon: '✈️' },
    { id: 'fashion', name: 'Fashion', icon: '👗' },
    { id: 'art', name: 'Art', icon: '🖼️' },
    { id: 'technology', name: 'Technology', icon: '💻' }
  ];

  // Mock data for demonstration
  useEffect(() => {
    const mockPosts = [
      {
        id: 1,
        title: "Beautiful Mountain Landscape",
        description: "Stunning view of snow-capped mountains at sunset",
        imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
        category: "nature",
        author: {
          name: "Nature Lover",
          avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face"
        },
        likes: 124,
        comments: 8,
        isLiked: false,
        isSaved: false
      },
      {
        id: 2,
        title: "Delicious Food Photography",
        description: "Homemade pasta with fresh herbs and parmesan",
        imageUrl: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&h=600&fit=crop",
        category: "food",
        author: {
          name: "Foodie Chef",
          avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face"
        },
        likes: 89,
        comments: 12,
        isLiked: true,
        isSaved: false
      },
      {
        id: 3,
        title: "Modern Interior Design",
        description: "Minimalist living room with natural light",
        imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=500&fit=crop",
        category: "design",
        author: {
          name: "Design Studio",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face"
        },
        likes: 256,
        comments: 23,
        isLiked: false,
        isSaved: true
      },
      {
        id: 4,
        title: "Travel Photography",
        description: "Ancient temple in Southeast Asia",
        imageUrl: "https://images.unsplash.com/photo-1548013146-79ded13c9d56?w=400&h=700&fit=crop",
        category: "travel",
        author: {
          name: "Wanderlust",
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=face"
        },
        likes: 167,
        comments: 15,
        isLiked: false,
        isSaved: false
      },
      {
        id: 5,
        title: "Artistic Photography",
        description: "Abstract patterns in urban architecture",
        imageUrl: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=400&fit=crop",
        category: "art",
        author: {
          name: "Art Vision",
          avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face"
        },
        likes: 98,
        comments: 7,
        isLiked: true,
        isSaved: false
      },
      {
        id: 6,
        title: "Fashion Inspiration",
        description: "Street style fashion in the city",
        imageUrl: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=600&fit=crop",
        category: "fashion",
        author: {
          name: "Style Guide",
          avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=50&h=50&fit=crop&crop=face"
        },
        likes: 203,
        comments: 18,
        isLiked: false,
        isSaved: true
      }
    ];

    // Simulate loading
    setTimeout(() => {
      setPosts(mockPosts);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = !searchQuery || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  if (loading) {
    return (
      <div className="loading">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="explore">
      <div className="container">
        <div className="explore-header">
          <h1>Explore Posts</h1>
          {searchQuery && (
            <p className="search-results">
              Search results for: <strong>"{searchQuery}"</strong>
            </p>
          )}
        </div>

        {/* Category Filters */}
        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => handleCategoryChange(category.id)}
            >
              <span className="category-icon">{category.icon}</span>
              <span className="category-name">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        {filteredPosts.length > 0 ? (
          <Masonry
            breakpointCols={{ default: 4, 1280: 4, 1024: 3, 640: 2, 0: 1 }}
            className="masonry-grid"
            columnClassName="masonry-grid_column"
          >
            {filteredPosts.map(post => (
              <div key={post.id} className="post-wrapper">
                <Post post={post} />
              </div>
            ))}
          </Masonry>
        ) : (
          <div className="empty-state">
            <h3>No posts found</h3>
            <p>
              {searchQuery 
                ? `No posts match your search for "${searchQuery}"`
                : 'No posts in this category yet. Try selecting a different category or check back later!'
              }
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Explore;
