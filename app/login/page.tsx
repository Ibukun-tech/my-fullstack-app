"use client"
import React from 'react';
// import Navbar from "../../Components/Navbar";
import LoginForm from '../../Components/Login';

export default function Login() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* <Navbar /> */}
      <main className="container mx-auto py-8">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl text-blue-600 text-center  font-bold mb-6">Login</h1>
          <LoginForm />
        </div>
      </main>
    </div>
  );
}
