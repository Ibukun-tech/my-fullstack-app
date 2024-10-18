"use client"
import React from 'react';
import Navbar from '../../Components/Navbar';
import Cart from '../../Components/cart';

export default function CartPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto py-8 px-4">
        <Cart />
      </main>
    </div>
  );
}