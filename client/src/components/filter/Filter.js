import React from 'react';
import styles from './filter.module.scss';
import FilterItem from '../filter-item/FilterItem';

const Filter = () => {
    const lists = ['Mujet', 'Hombre', 'Technologia', 'Categorias', 'Marcas'];

    return (
        <div className={styles['container']}>
            {
                lists.map(item => <FilterItem name={item} />)
            }
        </div>
    )
}

export default Filter;