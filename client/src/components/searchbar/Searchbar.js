import React, { useState } from 'react'
import { icons } from '../../media/mediaHolder';
import styles from './searchbar.module.scss';

const Searchbar = (props) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();

        setSearchTerm(e.target.value);
    }

    return (
        <div className={styles['container']}>
            <img className={styles['icon']} src={icons.searchbar} alt='' />

            <input className={styles['searchbar-input']} 
                   type='search' 
                   placeholder='Search for products' 
                   id='searchbar' 
                   name='searchbar' 
            />

            <a className={styles['cancel-btn']}>
                <img src={icons.cancel} alt='' />
            </a>
        </div>
    )
}

export default Searchbar;