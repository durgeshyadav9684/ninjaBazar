import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BestDeals from '@/components/BestDeals';
import ProductList from '@/components/ProductList';
import Footer from '@/components/Footer';

const FEATURED_PRODUCTS = [
  { id: '1', title: 'Smart Watch Series 7 with Blood Oxygen Monitor', price: '₹2,999', minOrder: '10 Pieces' },
  { id: '2', title: 'Wireless Bluetooth Earbuds with Noise Cancellation', price: '₹1,299', minOrder: '50 Pieces' },
  { id: '3', title: 'Ergonomic Office Chair with Lumbar Support', price: '₹5,499', minOrder: '5 Pieces' },
  { id: '4', title: '4K Ultra HD Action Camera 60fps', price: '₹4,999', minOrder: '20 Pieces' },
];

const APPAREL_PRODUCTS = [
  { id: '5', title: 'Men\'s Cotton Casual Polo Shirt', price: '₹499', minOrder: '100 Pieces' },
  { id: '6', title: 'Women\'s Running Sports Bra', price: '₹399', minOrder: '50 Pieces' },
  { id: '7', title: 'Unisex Winter Hoodie Thick Fleece', price: '₹899', minOrder: '50 Pieces' },
  { id: '8', title: 'Denim Jacket Classic Fit', price: '₹1,199', minOrder: '30 Pieces' },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="animate-fade-in">
        <Hero />
        <BestDeals />
        <ProductList title="Featured Products" products={FEATURED_PRODUCTS} />
        <ProductList title="Apparel & Fashion" products={APPAREL_PRODUCTS} />
      </main>
      <Footer />
    </>
  );
}
