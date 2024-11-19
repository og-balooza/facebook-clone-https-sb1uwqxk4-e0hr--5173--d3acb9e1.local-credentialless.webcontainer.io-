import React from 'react';
import { Gift } from 'lucide-react';

export default function RightSidebar() {
  const contacts = [
    { id: 1, name: 'Sarah Johnson', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop' },
    { id: 2, name: 'Michael Chen', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop' },
    { id: 3, name: 'Emily Davis', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop' },
  ];

  return (
    <div className="fixed right-0 w-64 h-screen pt-16 pb-4 px-2 overflow-y-auto">
      <div className="mb-4">
        <div className="flex items-center space-x-3 p-3">
          <Gift className="w-6 h-6 text-blue-500" />
          <div>
            <p className="font-medium">3 Birthday Today</p>
            <p className="text-sm text-gray-500">Including Sarah Johnson</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-gray-500 font-semibold mb-2 px-3">Contacts</h3>
        <div className="space-y-1">
          {contacts.map(contact => (
            <button
              key={contact.id}
              className="flex items-center space-x-3 w-full p-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <img src={contact.avatar} alt={contact.name} className="w-8 h-8 rounded-full" />
              <span className="text-gray-700">{contact.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}