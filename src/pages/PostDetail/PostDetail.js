import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiHeart, FiMessageCircle, FiShare2, FiBookmark, FiArrowLeft, FiMoreHorizontal } from 'react-icons/fi';
import './PostDetail.css';

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([]);
  const [likedCommentIds, setLikedCommentIds] = useState(new Set());
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  // Mock data for demonstration
  useEffect(() => {
    const mockPost = {
      id: parseInt(id),
      title: "Beautiful Mountain Landscape",
      description: "Stunning view of snow-capped mountains at sunset. This breathtaking scene was captured during a hiking trip in the Swiss Alps. The golden hour light perfectly illuminated the snow-capped peaks, creating a magical atmosphere that I'll never forget. The crisp mountain air and the sound of distant waterfalls made this moment truly special.",
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      category: "nature",
      tags: ["mountains", "landscape", "sunset", "nature", "photography"],
      location: "Swiss Alps, Switzerland",
      author: {
        name: "Nature Lover",
        username: "@naturelover",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
      },
      likes: 124,
      comments: 8,
      isLiked: false,
      isSaved: false,
      createdAt: "2 days ago"
    };

    const mockComments = [
      {
        id: 1,
        text: "Absolutely stunning! The lighting is perfect.",
        author: "Photo Enthusiast",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face",
        createdAt: "1 hour ago",
        likes: 12
      },
      {
        id: 2,
        text: "This makes me want to plan a hiking trip! Beautiful capture.",
        author: "Adventure Seeker",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
        createdAt: "3 hours ago",
        likes: 8
      },
      {
        id: 3,
        text: "The composition is amazing. Great work!",
        author: "Art Lover",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
        createdAt: "5 hours ago",
        likes: 15
      }
    ];

    // Simulate loading
    setTimeout(() => {
      setPost(mockPost);
      setComments(mockComments);
      setLikesCount(mockPost.likes);
      setIsLiked(mockPost.isLiked);
      setIsSaved(mockPost.isSaved);
      setLoading(false);
    }, 1000);
  }, [id]);

  const handleLike = () => {
    if (isLiked) {
      setLikesCount(likesCount - 1);
    } else {
      setLikesCount(likesCount + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
  };

  const handleShare = async () => {
    const url = `${window.location.origin}/post/${id}`;
    const shareData = {
      title: post?.title || 'Post',
      text: post?.description || 'Check out this post',
      url
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(url);
      } else {
        const dummy = document.createElement('input');
        dummy.value = url;
        document.body.appendChild(dummy);
        dummy.select();
        document.execCommand('copy');
        document.body.removeChild(dummy);
      }
    } catch (err) {
      // ignore
    }
  };

  const toggleCommentLike = (commentId) => {
    setComments(prev => prev.map(c => {
      if (c.id !== commentId) return c;
      const isLikedNow = likedCommentIds.has(commentId);
      return { ...c, likes: isLikedNow ? Math.max(0, c.likes - 1) : c.likes + 1 };
    }));
    setLikedCommentIds(prev => {
      const next = new Set(prev);
      if (next.has(commentId)) next.delete(commentId); else next.add(commentId);
      return next;
    });
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      const newComment = {
        id: Date.now(),
        text: commentText,
        author: "You",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
        createdAt: "Just now",
        likes: 0
      };
      setComments([newComment, ...comments]);
      setCommentText('');
    }
  };

  if (loading) {
    return (
      <div className="loading">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="error">
        <h2>Post not found</h2>
        <p>The post you're looking for doesn't exist.</p>
        <button className="btn btn-primary" onClick={() => navigate('/')}>
          Go Home
        </button>
      </div>
    );
  }

  return (
    <div className="post-detail">
      <div className="container">
        {/* Back Button */}
        <button className="back-btn" onClick={() => navigate(-1)}>
          <FiArrowLeft />
          Back
        </button>

        <div className="post-detail-content">
          {/* Post Image */}
          <div className="post-image-section">
            <img src={post.imageUrl} alt={post.title} className="post-detail-image" />
            
            {/* Action Buttons */}
            <div className="post-actions">
              <button 
                className={`action-btn ${isLiked ? 'liked' : ''}`}
                onClick={handleLike}
                aria-label={isLiked ? 'Unlike' : 'Like'}
              >
                <FiHeart />
                <span>{likesCount}</span>
              </button>
              
              <button className="action-btn" aria-label="Comment">
                <FiMessageCircle />
                <span>{comments.length}</span>
              </button>
              
              <button className="action-btn" aria-label="Share" onClick={handleShare}>
                <FiShare2 />
              </button>
              
              <button 
                className={`action-btn ${isSaved ? 'saved' : ''}`}
                onClick={handleSave}
                aria-label={isSaved ? 'Remove from saved' : 'Save post'}
              >
                <FiBookmark />
              </button>
              
              <button className="action-btn" aria-label="More options" onClick={() => setIsMoreOpen(!isMoreOpen)}>
                <FiMoreHorizontal />
              </button>
              {isMoreOpen && (
                <div className="more-menu" onMouseLeave={() => setIsMoreOpen(false)}>
                  <button className="more-menu-item" onClick={() => setIsMoreOpen(false)}>Copy link</button>
                  <button className="more-menu-item" onClick={() => setIsMoreOpen(false)}>Report</button>
                </div>
              )}
            </div>
          </div>

          {/* Post Information */}
          <div className="post-info-section">
            <div className="post-header">
              <h1 className="post-title">{post.title}</h1>
              <p className="post-description">{post.description}</p>
            </div>

            {/* Post Meta */}
            <div className="post-meta">
              <div className="post-author">
                <img src={post.author.avatar} alt={post.author.name} className="author-avatar" />
                <div className="author-info">
                  <span className="author-name">{post.author.name}</span>
                  <span className="author-username">{post.author.username}</span>
                </div>
              </div>
              
              <div className="post-details">
                <div className="detail-item">
                  <span className="detail-label">Category:</span>
                  <span className="detail-value">{post.category}</span>
                </div>
                {post.location && (
                  <div className="detail-item">
                    <span className="detail-label">Location:</span>
                    <span className="detail-value">{post.location}</span>
                  </div>
                )}
                <div className="detail-item">
                  <span className="detail-label">Posted:</span>
                  <span className="detail-value">{post.createdAt}</span>
                </div>
              </div>
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="post-tags">
                {post.tags.map(tag => (
                  <span key={tag} className="tag">#{tag}</span>
                ))}
              </div>
            )}

            {/* Comments Section */}
            <div className="comments-section">
              <h3>Comments ({comments.length})</h3>
              
              {/* Add Comment */}
              <form onSubmit={handleCommentSubmit} className="comment-form">
                <textarea
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  placeholder="Add a comment..."
                  className="comment-input"
                  rows="3"
                />
                <button type="submit" className="btn btn-primary" disabled={!commentText.trim()}>
                  Post Comment
                </button>
              </form>

              {/* Comments List */}
              <div className="comments-list">
                {comments.map(comment => (
                  <div key={comment.id} className="comment">
                    <img src={comment.avatar} alt={comment.author} className="comment-avatar" />
                    <div className="comment-content">
                      <div className="comment-header">
                        <span className="comment-author">{comment.author}</span>
                        <span className="comment-time">{comment.createdAt}</span>
                      </div>
                      <p className="comment-text">{comment.text}</p>
                      <button className="comment-like-btn" onClick={() => toggleCommentLike(comment.id)}>
                        <FiHeart />
                        <span>{comment.likes}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
