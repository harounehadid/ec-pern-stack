import React from 'react';

const FilterItem = (props) => {
  const { name } = props;
  
  return (
    <div>{name}</div>
  )
}

export default FilterItem;