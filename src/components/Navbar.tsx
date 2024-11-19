import React from 'react';
import { Home, Search, Bell, MessageCircle, Menu, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-facebook text-3xl font-bold">facebook</span>
            <div className="ml-4 relative">
              <input
                type="text"
                placeholder="Search Facebook"
                className="bg-gray-100 p-2 pl-10 rounded-full w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 text-gray-500 w-5 h-5" />
            </div>
          </div>
          
          <div className="flex space-x-8">
            <Home className="w-6 h-6 text-blue-500" />
            <MessageCircle className="w-6 h-6 text-gray-500" />
            <Bell className="w-6 h-6 text-gray-500" />
            <Menu className="w-6 h-6 text-gray-500" />
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <User className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}