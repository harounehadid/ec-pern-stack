import React from 'react';
import styles from './productShowcase.module.scss';
import ProductCard from '../product-card/ProductCard';

const ProductShowcase = () => {
    const products = [
        {
            name: 'product1',
            price: '2500 DZD'
        },
        {
            name: 'product2',
            price: '3700 DZD'
        },
        {
            name: 'product3',
            price: '5500 DZD'
        },
        {
            name: 'product4',
            price: '15500 DZD'
        },
        {
            name: 'product5',
            price: '7500 DZD'
        },
        {
            name: 'product6',
            price: '2400 DZD'
        },
        {
            name: 'product7',
            price: '1000 DZD'
        },
        {
            name: 'product8',
            price: '10500 DZD'
        },
        {
            name: 'product9',
            price: '3400 DZD'
        }
    ];

    return (
        <div className={styles['container']}>
            {
                products.map(product => <ProductCard name={product.name} price={product.price} />)
            }
        </div>
    )
}

export default ProductShowcase;