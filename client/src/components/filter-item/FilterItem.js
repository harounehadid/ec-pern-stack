import React from 'react';
import styles from './filterItem.module.scss';
import { icons } from '../../media/mediaHolder';

const FilterItem = (props) => {
  const { name } = props;
  
  return (
    <a className={styles['container']}>
      <span>{name}</span>
      <img className={styles['icon']} src={icons.dropdown} alt='' />
    </a>
  )
}

export default FilterItem;