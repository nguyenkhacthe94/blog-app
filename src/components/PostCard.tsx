// src/components/PostCard.tsx
import React from 'react';
import { Post } from '@/types';

interface PostCardProps {
    post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
    return (
        <div className="p-4 border border-gray-300 rounded-md shadow-md">
            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
            <h3 className="text-lg font-semibold text-gray-600 mb-2">{post.subtitle}</h3>
            <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover mb-4 rounded-md" />
            <div
                className="text-gray-700"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />
        </div>
    );
};

export default PostCard;