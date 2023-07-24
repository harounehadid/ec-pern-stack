import React from 'react'
import styles from './header.module.scss';
import SearchbarContainer from '../searchbar/SearchbarContainer';

const Header = () => {
  return (
    <div className={styles['container']}>
        <SearchbarContainer />
    </div>
  )
}

export default Header;
