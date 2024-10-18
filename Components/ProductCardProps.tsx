"use client"
import React, { useContext } from "react"
import { ProductCardProps } from "../types/types"
import Image from "next/image"
import { useAppContext } from "@/context/Store"
// import { AppContext } from "../context/Store"
const {state,dispatch}=useAppContext()
const ProductCard: React.FC<ProductCardProps> = ({id, name, price, image }: ProductCardProps) => {
  // const { state, dispatch } = useContext(AppContext)
const handleAddToCart=()=>{
  if (!state.user){
    alert("You must be logged in to add items to cart to ")
    return 
  }
   dispatch({
      type: 'ADD_TO_CART',
      payload: { id, name, price, quantity: 1 },
    });
}

  // const handleAddToCart = () => {
  //   if (!state.user) {
  //     alert("You must be logged in to add items to the cart.")
  //     return
  //   }
  //   dispatch({ type: 'ADD_TO_CART', payload: { id: Math.random(), name, price } })
  // }

  return(
     <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image src={image} alt={name} width={300} height={200} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-600">${price.toFixed(2)}</p>
        <button 
          onClick={handleAddToCart} 
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard
