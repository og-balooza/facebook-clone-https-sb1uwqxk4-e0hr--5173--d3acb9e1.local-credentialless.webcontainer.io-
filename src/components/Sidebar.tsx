import React from 'react';
import { Users, Bookmark, Calendar, Video, ShoppingBag, Clock } from 'lucide-react';

export default function Sidebar() {
  const menuItems = [
    { icon: Users, text: 'Friends' },
    { icon: Bookmark, text: 'Saved' },
    { icon: Calendar, text: 'Events' },
    { icon: Video, text: 'Watch' },
    { icon: ShoppingBag, text: 'Marketplace' },
    { icon: Clock, text: 'Memories' },
  ];

  return (
    <div className="fixed w-64 h-screen pt-16 pb-4 px-2 overflow-y-auto">
      <div className="space-y-1">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className="flex items-center space-x-3 w-full p-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <item.icon className="w-6 h-6 text-blue-500" />
            <span className="text-gray-700 font-medium">{item.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
}