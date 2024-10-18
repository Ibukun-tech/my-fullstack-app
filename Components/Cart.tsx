"use client"
import React from 'react';
import { ShoppingCartIcon, XMarkIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/outline';
import { useAppContext } from '@/context/Store';
const Cart: React.FC = () => {
    
  const { state, dispatch } = useAppContext();

  const handleRemoveItem = (id: number) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    dispatch({ type: 'UPDATE_CART_ITEM_QUANTITY', payload: { id, quantity } });
  };
  const total = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-blue-600 mb-6 flex items-center">
        <ShoppingCartIcon className="h-6 w-6 mr-2" />
        Your Cart
      </h2>
      <div className="space-y-4">
        {/* Sample cart item */}
        {state.cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-4 border-b">
            {state.cart.map((item) => (
              <div key={item.id} className="mb-2 sm:mb-0">
                <div>  
                  <h3 className="font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-gray-600">${item.price}</p>
                </div>
                <div className="flex items-center">
                  <button className="text-blue-500 hover:text-blue-600 p-1">
                    <MinusIcon onClick={() => handleUpdateQuantity(item.id, Math.max(1, item.quantity - 1))} className="h-5 w-5" />
                  </button>
                  <span className="mx-2 w-8 text-center">{item.quantity}</span>
                  <button className="text-blue-500 hover:text-blue-600 p-1">
                    <PlusIcon onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)} className="h-5 w-5" />
                  </button>
                  <button className="ml-4 text-red-500 hover:text-red-600 p-1">
                    <XMarkIcon onClick={() => handleRemoveItem(item.id)} className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="mt-6">
          <p className="text-xl font-semibold text-gray-800">
            Total: $ `${total}`        
          </p>
          <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
            Checkout
          </button>
        </div>
      </div>
    </div>
 );
};

export default Cart;
