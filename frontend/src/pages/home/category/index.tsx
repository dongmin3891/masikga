import React, { useEffect, useState } from 'react';
import CategoryButton from '../../../components/home';
import categoryList from '../../../interfaces/categoryList';
import api from '../../../api';

const CategoryList = ({id, categoryName}) :JSX.Element => {


  return (
      <>
        <CategoryButton key={id} id={id} categoryName={categoryName} />
      </>
    
  );
}

export default CategoryList;