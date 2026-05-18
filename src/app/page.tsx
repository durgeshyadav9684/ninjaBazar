import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BestDeals from '@/components/BestDeals';
import TrendingCategories from '@/components/TrendingCategories';
import ProductList from '@/components/ProductList';
import QuestionForm from '@/components/QuestionForm';
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

const AIR_CLEANING_PRODUCTS = [
  { id: '9', title: 'Industrial Air Purifier HEPA Filter', price: '₹12,999', minOrder: '5 Pieces' },
  { id: '10', title: 'Home Air Cleaner Quiet Mode', price: '₹4,499', minOrder: '20 Pieces' },
  { id: '11', title: 'UV Light Air Sterilizer', price: '₹3,299', minOrder: '50 Pieces' },
  { id: '12', title: 'Portable Desk Air Purifier', price: '₹1,499', minOrder: '100 Pieces' },
];

const SPORTS_PRODUCTS = [
  { id: '13', title: 'Resistance Bands Set of 5', price: '₹599', minOrder: '200 Pieces' },
  { id: '14', title: 'Dumbbell Set 20kg Adjustable', price: '₹3,499', minOrder: '20 Pieces' },
  { id: '15', title: 'Cricket Bat English Willow', price: '₹2,999', minOrder: '10 Pieces' },
  { id: '16', title: 'Baseball Bat Solid Wood', price: '₹1,299', minOrder: '50 Pieces' },
];

const BEAUTY_PRODUCTS = [
  { id: '17', title: 'Digital Blood Pressure Monitor', price: '₹1,199', minOrder: '50 Pieces' },
  { id: '18', title: 'Facial Steamer Spa Quality', price: '₹899', minOrder: '100 Pieces' },
  { id: '19', title: 'Makeup Brush Set 15 Pcs', price: '₹499', minOrder: '200 Pieces' },
  { id: '20', title: 'Essential Oils Set 6 Pack', price: '₹699', minOrder: '100 Pieces' },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="animate-fade-in">
        <Hero />
        <BestDeals />
        <TrendingCategories />
        <ProductList title="Featured Products" products={FEATURED_PRODUCTS} />
        <ProductList title="Apparel & Fashion" products={APPAREL_PRODUCTS} />
        <ProductList title="Air Cleaning Equipment" products={AIR_CLEANING_PRODUCTS} />
        <ProductList title="Sports & Entertainment" products={SPORTS_PRODUCTS} />
        <ProductList title="Beauty & Health" products={BEAUTY_PRODUCTS} />
        <QuestionForm />
      </main>
      <Footer />
    </>
  );
}
