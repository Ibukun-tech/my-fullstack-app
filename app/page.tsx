"use client"
import React, {Suspense} from "react"
import Image from "next/image";
import Navbar from "@/Components/Navbar";
import ProductCardSkeleton from "@/Components/ProductCardSkeleton";
// import ProductCard from "@/Components/ProductCardProps"
import dynamic from "next/dynamic";
const ProductCard=dynamic(()=>import("@/Components/ProductCardProps"),{
  loading: () => <p><ProductCardSkeleton/></p>,
  ssr: false
})

const products=[
  { id: 1, name: 'Product 1', price: 19.99, image: '/product1.jpg' },
  { id: 2, name: 'Product 2', price: 29.99, image: '/product2.jpg' },
  { id: 3, name: 'Product 3', price: 39.99, image: '/product3.jpg' },
  { id: 4, name: 'Product 4', price: 49.99, image: '/product4.jpg' },
]
export default function Home() {
  return (
    <>
      <Navbar/>
      <main className="container mx-auto py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Suspense key={product.id} fallback={<ProductCardSkeleton/>}>
              <ProductCard {...product} />
            </Suspense>
          ))}
        </div>
      </main>
    </>
  );
}
