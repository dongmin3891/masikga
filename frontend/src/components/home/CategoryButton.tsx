import React, { useEffect, useState } from 'react';
import MenuList from '../../pages/MenuList';
// import styled from 'styled-components';
import { MenuListType } from '../../types';
import api from '../../api';




const CategoryButton = () :JSX.Element => {

  const [menuList, setMenuList] = useState<MenuListType[]>([]);


  useEffect(() => {
    test();
    menuListTest();
  },[])

  const test = async () => {
    const hello = await api.getHelloWorld();
    console.log("hello", hello);
  }

  const menuListTest = async () => {
    const menuTest = await api.getMenuList();
    console.log("menu", menuTest);
  }

  // 버튼 눌렀을 때 아래 버튼 아래 화면에 리스트 뿌리기
  // TODO : json파일 만들어서 불러오기!
  
  const hangOverListButtonClick  = (kind : string) => {
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
      {/* TODO : 버튼 모듈화 */}
        <div>
          <button type="button" onClick={() => hangOverListButtonClick("hangover")}>숙취해소</button>
          <button type="button" onClick={() => hangOverListButtonClick("choice")}>고를래!</button>
          <button type="button" onClick={() => hangOverListButtonClick("random")}>랜덤!</button>
          <button type="button" onClick={() => hangOverListButtonClick("random")}>한식!</button>
        </div>
        {menuList !== null &&
        // TODO : menulist property error
          <MenuList {...menuList} />
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