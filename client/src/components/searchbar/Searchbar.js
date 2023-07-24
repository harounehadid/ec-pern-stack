import React from 'react'
import { icons } from '../../media/mediaHolder';
import styles from './searchbar.module.scss';

const Searchbar = (props) => {
    const {
        handleChange, 
        handleCancel, 
        handleSubmit,
        searchTerm
    } = props;

    return (
        <form className={styles['container']} onSubmit={handleSubmit}>
            <a onClick={handleSubmit}>
                <img className={styles['icon']} src={icons.searchbar} alt='' />
            </a>

            <input className={styles['searchbar-input']} 
                   type='search' 
                   placeholder='Search for products' 
                   id='searchbar' 
                   name='searchbar'
                   value={searchTerm}
                   onChange={handleChange}
            />

            <a className={styles['cancel-btn']} onClick={handleCancel}>
                <img src={icons.cancel} alt='' />
            </a>
        </form>
    )
}

export default Searchbar;