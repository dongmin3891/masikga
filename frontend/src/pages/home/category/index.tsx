import React, { useEffect, useState } from 'react';
import CategoryButton from '../../../components/home';
import categoryList from '../../../interfaces/categoryList';
import api from '../../../api';

const CategoryList = () :JSX.Element => {

  const [category, setCategory] = useState<categoryList[]>([]);


  useEffect(() => {
    getCategoryList();
  },[])

  const getCategoryList = async () => {
    const result  = await api.getCategoryList();
    // TODO : 조건 api code로 변경
    if(result.data.length > 0){
        setCategory(result.data);
    }
  }

  return (
      <>
        <div>
          메뉴리스트
        </div>
          {
            category?.map((items) => (
              <CategoryButton key={items.id} id={items.id} categoryName={items.categoryName} />
            ))
          }
      </>
    
  );
}

export default CategoryList;