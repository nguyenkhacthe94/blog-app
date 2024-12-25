// src/app/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { Post } from '@/types';
import PostCard from '../components/PostCard';

const Home: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('http://localhost:8080/api/posts/6');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("API Response before updating:", data);
        setPosts(data);
        console.log("API Response after updating:", data);
      } catch (e: any) {
        console.error('Failed to fetch posts:', e);
        setError(e.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);


  if (loading) {
    return <p>Loading posts...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts && Array.isArray(posts) ? (
              posts.map((post, index) => (
                  <PostCard key={index} post={post} />
              ))
          ) : (
              <p>No posts to display.</p>
          )}
        </div>
      </div>
  );
};

export default Home;