import React from 'react';
import styles from './productCard.module.scss';
import { images } from '../../media/mediaHolder';

const ProductCard = (props) => {
    const { name, price } = props;

    return (
        <div className={styles['container']}>
            <img src={images.defaultProductPic} alt='' />
            <div className={styles['details']}>
                <span>{name}</span>
                <span className={styles['price']}>{price}</span>
            </div>
        </div>
    )
}

export default ProductCard;