import React, { useState } from 'react';
import MenuList from '../../pages/MenuList';
// import styled from 'styled-components';
import { MenuListType } from '../../types';

const CategoryButton = () :JSX.Element => {

  const [menuList, setMenuList] = useState<MenuListType[] | null>();

  const apiTest = () => {
    const result = fetch(`http://localhost:4000/api/hello`)
    .then(response => response.json())
    .then(data => console.log("data",data));
    console.log("apiTest", result);
  }

  // 버튼 눌렀을 때 아래 버튼 아래 화면에 리스트 뿌리기
  // TODO : json파일 만들어서 불러오기!
  const hangOverListButtonClick  = (kind : string) => {
    apiTest();
    if(kind === "hangover") {
      setMenuList([{
        id : "1",
        kind : "hangover",
        image : "",
        foodName : [
          {
            id: "1",
            name : "선지 해장국"
          }
        ],
        storeName : "은희네 제주국",
        location : "",
      }])
    }else if ( kind === "choice"){
      setMenuList([{
        id : "1",
        kind : "choice",
        image : "",
        foodName : [
          {
            id : "1",
            name : "돈까스"
          }
        ],
        storeName : "연돈",
        location : "",
      }])
    }else{
      setMenuList([{
        id : "1",
        kind : "random",
        image : "",
        foodName : [
          {
            id : "1",
            name : "아무거나"
          }
        ],
        storeName : "랜덤함수",
        location : "",
      }])
    }
    
  }

  

  return (
      <>
        <div>
          <button type="button" onClick={() => hangOverListButtonClick("hangover")}>숙취해소</button>
          <button type="button" onClick={() => hangOverListButtonClick("choice")}>고를래!</button>
          <button type="button" onClick={() => hangOverListButtonClick("random")}>랜덤!</button>
          <button type="button" onClick={() => hangOverListButtonClick("random")}>한식!</button>
        </div>
        {menuList !== null &&
        // TODO : menulist property error
          <MenuList menulist={menuList} />
        }
        {/* <ul>
          {menuList.map((hangOverList) => (
            <li key={hangOverList.id}>{hangOverList.storeName}</li>
          ))}
        </ul> */}
      </>
    
  );
}

export default CategoryButton;