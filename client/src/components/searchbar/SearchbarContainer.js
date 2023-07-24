import React, { useState } from 'react'
import Searchbar from './Searchbar';

const SearchbarContainer = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
      e.preventDefault();
      setSearchTerm(e.target.value);
  }

  const handleCancel = (e) => {
      e.preventDefault();
      setSearchTerm('');
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(searchTerm);
  }

  return <Searchbar handleChange={handleChange}
                    handleCancel={handleCancel}
                    handleSubmit={handleSubmit}
                    searchTerm={searchTerm} />;
}

export default SearchbarContainer;