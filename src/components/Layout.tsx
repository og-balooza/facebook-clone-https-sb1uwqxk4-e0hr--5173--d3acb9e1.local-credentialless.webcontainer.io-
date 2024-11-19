import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import RightSidebar from './RightSidebar';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 pt-20 px-4 ml-64 mr-64">
          <div className="max-w-2xl mx-auto">
            {children}
          </div>
        </main>
        <RightSidebar />
      </div>
    </div>
  );
}