import React, { useContext, useEffect } from 'react';
import styles from './productShowcase.module.scss';
import ProductCard from '../product-card/ProductCard';
import productFinder from '../../api/productFinder';
import { ProductsContext } from '../../context/ProductsContext';

const ProductShowcase = (props) => {
    const { products, setProducts } = useContext(ProductsContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await productFinder.get('/');
                setProducts(response.data.data.products);
            } catch (err) {
                console.log(err);
            }
        }

        fetchData();

    }, []);

    return (
        <div className={styles['container']}>
            {
                products.map(product => <ProductCard key={product.id} name={product.name} price={product.price} />)
            }
        </div>
    )
}

export default ProductShowcase;