import React  from 'react';
import Navbar from '../../Components/Navbar';
import RegisterForm from '../../Components/Signup';

export default function Signup() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto py-8">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl text-blue-600 text-center  font-bold mb-6">Register</h1>
          <RegisterForm />
        </div>
      </main>
    </div>
  );
}

