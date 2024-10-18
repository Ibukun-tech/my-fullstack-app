"use client"
import Link from 'next/link';
import { useState } from 'react';
import { ShoppingCartIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useAppContext } from '@/context/Store';
const Navbar = () => {
  const {state,dispatch}=useAppContext()
  const [isMenuOpen, setIsMenuOpen] = useState(false);
const handleLogout=()=>{
  dispatch({type:'LOGOUT'})
}
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white text-blue-600 p-4 shadow-md">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            Ibk Store
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="hover:text-blue-800">
              Home
            </Link>
            {state.user ? (
            <>
              <span>Welcome, {state.user.name}</span>
              <button onClick={handleLogout} className="hover:text-gray-300">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="hover:text-gray-300">
                Login
              </Link>
              <Link href="/signup" className="hover:text-gray-300">
                Register
              </Link>
            </>
          )}
            <Link href="/cart" className="hover:text-blue-800">
              <ShoppingCartIcon className="h-6 w-6" />
            </Link>
          </div>
          <button onClick={toggleMenu} className="md:hidden focus:outline-none">
            <Bars3Icon className="h-6 w-6 mr-2 text-blue-600" />
          </button>
        </div>
      </div>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      ></div>
      
      {/* Mobile menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4">
          <button onClick={toggleMenu} className="mb-4">
            <XMarkIcon className="h-6 w-6 text-blue-600" />
          </button>
          <Link href="/" className="block py-2 hover:text-blue-800">
            Home
          </Link>
{state.user ? (
            <>
              <span>Welcome, {state.user.name}</span>
              <button onClick={handleLogout} className="hover:text-gray-300">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="hover:text-gray-300">
                Login
              </Link>
              <Link href="/register" className="hover:text-gray-300">
                Register
              </Link>
            </>
          )}
          <Link href="/cart" className="block py-2 hover:text-blue-800">
            <div className="flex items-center">
              <ShoppingCartIcon className="h-6 w-6 mr-2" />
              Cart
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
