import React, { useState } from 'react';
import LoginForm from '../components/auth/LoginForm';
import SignUpForm from '../components/auth/SignUpForm';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-facebook text-5xl font-bold mb-8">facebook</h1>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {isLogin ? 'Log in to Facebook' : 'Create a new account'}
          </h2>
        </div>

        {isLogin ? <LoginForm /> : <SignUpForm />}

        <div className="text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-facebook hover:underline"
          >
            {isLogin ? 'Create new account' : 'Already have an account?'}
          </button>
        </div>
      </div>
    </div>
  );
}