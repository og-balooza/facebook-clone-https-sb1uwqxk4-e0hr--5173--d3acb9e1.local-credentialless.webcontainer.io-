import React, { useState } from 'react';
import { Image, Video, Smile } from 'lucide-react';
import { usePostStore } from '../store/postStore';
import { useAuthStore } from '../store/authStore';

export default function CreatePost() {
  const [content, setContent] = useState('');
  const { createPost } = usePostStore();
  const { user } = useAuthStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    try {
      await createPost(content);
      setContent('');
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center space-x-4 mb-4">
          <img
            src={user?.photoURL || 'https://api.dicebear.com/7.x/avataaars/svg?seed=default'}
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What's on your mind?"
            className="bg-gray-100 hover:bg-gray-200 rounded-full px-4 py-2.5 text-gray-500 flex-grow focus:outline-none focus:ring-2 focus:ring-facebook"
          />
        </div>

        <div className="border-t pt-4">
          <div className="flex justify-between">
            <button type="button" className="flex items-center space-x-2 hover:bg-gray-100 flex-1 justify-center py-2 rounded-lg">
              <Video className="w-6 h-6 text-red-500" />
              <span className="text-gray-600 font-medium">Live Video</span>
            </button>

            <button type="button" className="flex items-center space-x-2 hover:bg-gray-100 flex-1 justify-center py-2 rounded-lg">
              <Image className="w-6 h-6 text-green-500" />
              <span className="text-gray-600 font-medium">Photo/Video</span>
            </button>

            <button type="button" className="flex items-center space-x-2 hover:bg-gray-100 flex-1 justify-center py-2 rounded-lg">
              <Smile className="w-6 h-6 text-yellow-500" />
              <span className="text-gray-600 font-medium">Feeling/Activity</span>
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="mt-4 w-full bg-facebook text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Post
        </button>
      </form>
    </div>
  );
}