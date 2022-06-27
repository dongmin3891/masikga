import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
import api from '../../api';
import categoryList from '../../interfaces/categoryList';





const CategoryButton = () :JSX.Element => {

  const [category, setCategory] = useState<categoryList[]>([]);


  useEffect(() => {
    getCategoryList();
    console.log("asdsad", category)
  },[])

  const getCategoryList = async () => {
    const result  = await api.getCategoryList();
    console.log("category :", result);
    // TODO : type 선언
    if(result.length > 0){
      setCategory(result);
    }
  }

  // 버튼 눌렀을 때 아래 버튼 아래 화면에 리스트 뿌리기
  // TODO : json파일 만들어서 불러오기!
  
  const hangOverListButtonClick  = () => {
    // if(kind === "hangover") {
    //   setMenuList([{
    //     id : "1",
    //     kind : "hangover",
    //     image : "",
    //     foodName : [
    //       {
    //         id: "1",
    //         name : "선지 해장국"
    //       }
    //     ],
    //     storeName : "은희네 제주국",
    //     location : "",
    //   }])
    // }else if ( kind === "choice"){
    //   setMenuList([{
    //     id : "1",
    //     kind : "choice",
    //     image : "",
    //     foodName : [
    //       {
    //         id : "1",
    //         name : "돈까스"
    //       }
    //     ],
    //     storeName : "연돈",
    //     location : "",
    //   }])
    // }else{
    //   setMenuList([{
    //     id : "1",
    //     kind : "random",
    //     image : "",
    //     foodName : [
    //       {
    //         id : "1",
    //         name : "아무거나"
    //       }
    //     ],
    //     storeName : "랜덤함수",
    //     location : "",
    //   }])
    // }
    
  }

  

  return (
      <>
      {/* TODO : 버튼 모듈화 */}
        <div>
          <button type="button" onClick={() => hangOverListButtonClick("hangover")}>숙취해소</button>
          <button type="button" onClick={() => hangOverListButtonClick("choice")}>고를래!</button>
          <button type="button" onClick={() => hangOverListButtonClick("random")}>랜덤!</button>
          <button type="button" onClick={() => hangOverListButtonClick("random")}>한식!</button>
        </div>
        {/* {menuList !== null &&
        
          <MenuList menu={menuList} />
        } */}
        {/* <ul>
          {menuList.map((hangOverList) => (
            <li key={hangOverList.id}>{hangOverList.storeName}</li>
          ))}
        </ul> */}
      </>
    
  );
}

export default CategoryButton;