import React from 'react';
// import styled from 'styled-components';

//  폴더구조 변경해야함
const CategoryButton = ({ id, categoryName }) => {

  return (
        <button type="button" key={id}>{categoryName}</button>
  );
}

export default CategoryButton;