import React from 'react';
// import styled from 'styled-components';

const CategoryButton = ({id, categoryName}) :JSX.Element => {

  return (
        <button type="button" key={id}>{categoryName}</button>
  );
}

export default CategoryButton;