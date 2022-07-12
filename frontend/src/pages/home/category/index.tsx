import React, { useEffect, useState } from 'react';
import CategoryButton from '../../../components/home';
import categoryList from '../../../interfaces/categoryList';
import api from '../../../api';

const CategoryList = ({id, categoryName}) :JSX.Element => {


  // useEffect(() => {
  //   getCategoryList();
  //   // getMenuList();
  // },[])

  // const getCategoryList = async () => {
  //   const result  = await api.getCategoryList();
  //   // TODO : 조건 api code로 변경
  //   console.log(" categoryList :", result.data);
  //   if(result.retCode === "0000"){
  //       setCategory(result.data);
  //   }
  // }

  // const menuListOnClick = () => {
  //   console.log("test");
  // }

  /* 
    1.categoryButton에 onclick을 걸어줘야함
    2.oncliCK 눌렀을 때 id별로 리스트 뿌려줘야함
    3. 일단 상위 페이지를 하나 더 만드는 게 맞을듯?
    4. map으로 menu컴포넌트 돌린다고 가정을 해보자
    5. 처음에 페이지 들어왔을 때 menuList 호출해서 state에 담고
    state담은 값으로 컴포넌트에 props로 전달
    6. onclick을 여기에 걸고 온클릭 할 때마다 데이터 바꿔주면 되는거 아님?
    7. 데이터 담는 state 1개 정제된 데이터 state 한개.. 정제된 데이터로
    props 전달..
  */

  return (
      <>
        
        <CategoryButton key={id} id={id} categoryName={categoryName} />
        
      </>
    
  );
}

export default CategoryList;