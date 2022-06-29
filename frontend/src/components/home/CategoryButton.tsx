import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
import api from '../../api';
import categoryList from '../../interfaces/categoryList';





const CategoryButton = () :JSX.Element => {

  const [category, setCategory] = useState<categoryList[]>([]);


    useEffect(() => {
        getCategoryList();
    },[])

    const getCategoryList = async () => {
        const result  = await api.getCategoryList();
        if(result.data.length > 0){
            setCategory(result.data);
        }
    }

  return (
      
    <div>
        {
            category.length > 0 && category !== undefined &&
            category?.map((items) => (
                <button type="button" key={items.id}>{items.categoryName}</button>
            ))
        }
    </div>
      
    
  );
}

export default CategoryButton;