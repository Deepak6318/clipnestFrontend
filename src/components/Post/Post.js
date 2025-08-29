import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiShare2, FiBookmark, FiMoreHorizontal } from 'react-icons/fi';
import './Post.css';

const Post = ({ post }) => {
  const [isSaved, setIsSaved] = useState(post.isSaved || false);

  const handleSave = () => {
    setIsSaved(!isSaved);
  };

  const handleShare = async () => {
    const url = `${window.location.origin}/post/${post.id}`;
    const shareData = {
      title: post.title || 'Post',
      text: post.description || 'Check out this post',
      url
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(url);
        // Optional: you might integrate a toast system elsewhere
      } else {
        // Fallback
        const dummy = document.createElement('input');
        dummy.value = url;
        document.body.appendChild(dummy);
        dummy.select();
        document.execCommand('copy');
        document.body.removeChild(dummy);
      }
    } catch (err) {
      // Silently ignore for now
    }
  };

  return (
    <div className="post">
      <div className="post-image-container">
        <Link to={`/post/${post.id}`}>
          <img 
            src={post.imageUrl} 
            alt={post.title}
            className="post-image"
            loading="lazy"
          />
        </Link>
        <div className="post-overlay">
          <button 
            className={`overlay-btn save ${isSaved ? 'saved' : ''}`}
            onClick={handleSave}
            aria-label={isSaved ? 'Remove from saved' : 'Save post'}
          >
            <FiBookmark />
          </button>
          <button 
            className="overlay-btn share"
            onClick={handleShare}
            aria-label="Share post"
          >
            <FiShare2 />
          </button>
          <button 
            className="overlay-btn more"
            aria-label="More options"
          >
            <FiMoreHorizontal />
          </button>
        </div>
      </div>
      {/* No extra text/content below image per requirements */}
    </div>
  );
};

export default Post;
