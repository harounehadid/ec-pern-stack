import React from 'react'
import Header from '../components/header/Header';
import Filter from '../components/filter/Filter';
import ProductShowcase from '../components/product-showcase/ProductShowcase';

export default function Home() {
  return (
    <>
        <Header />
        <Filter />
        <ProductShowcase />
    </>
  )
}
