import React from 'react';
import { ThumbsUp, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { Timestamp } from 'firebase/firestore';

interface PostProps {
  id: string;
  content: string;
  imageUrl?: string;
  authorName: string;
  authorAvatar: string;
  timestamp: Timestamp;
  likes: number;
  comments: number;
  shares: number;
}

export default function Post({
  content,
  imageUrl,
  authorName,
  authorAvatar,
  timestamp,
  likes,
  comments,
  shares,
}: PostProps) {
  return (
    <div className="bg-white rounded-lg shadow mb-4">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <img src={authorAvatar} alt={authorName} className="w-10 h-10 rounded-full" />
            <div>
              <h3 className="font-semibold">{authorName}</h3>
              <p className="text-gray-500 text-sm">
                {formatDistanceToNow(timestamp.toDate(), { addSuffix: true })}
              </p>
            </div>
          </div>
          <button className="text-gray-500 hover:bg-gray-100 p-2 rounded-full">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>

        <p className="text-gray-800 mb-4">{content}</p>

        {imageUrl && (
          <img src={imageUrl} alt="Post content" className="w-full rounded-lg mb-4" />
        )}

        <div className="flex items-center justify-between text-gray-500 text-sm mb-4">
          <span>{likes} Likes</span>
          <div className="space-x-4">
            <span>{comments} Comments</span>
            <span>{shares} Shares</span>
          </div>
        </div>

        <div className="border-t border-b py-1">
          <div className="flex justify-between">
            <button className="flex items-center space-x-2 hover:bg-gray-100 flex-1 justify-center py-2 rounded-lg">
              <ThumbsUp className="w-5 h-5" />
              <span>Like</span>
            </button>

            <button className="flex items-center space-x-2 hover:bg-gray-100 flex-1 justify-center py-2 rounded-lg">
              <MessageCircle className="w-5 h-5" />
              <span>Comment</span>
            </button>

            <button className="flex items-center space-x-2 hover:bg-gray-100 flex-1 justify-center py-2 rounded-lg">
              <Share2 className="w-5 h-5" />
              <span>Share</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}