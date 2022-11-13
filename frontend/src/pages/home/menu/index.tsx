import React, { useEffect, useState } from "react";
import api from "../../../api";
import MenuListType from "../../../interfaces/menuList";

interface IProps {
  menuId: string;
}

const Menu = ( { menuId } : IProps) => {

    const [menuList, setMenuList] = useState<MenuListType[]>(null);

    //menuId에 따른 menuList 조회
    // post 요청
    // 서버 api 확인
	useEffect(() => {
		getMenuList(menuId);
	},[menuId])

  const getMenuList = async (menuId) => {
    const result = await api.getMenuList(menuId);

    if(result.retCode === "0000"){
    console.log("result", result);
      setMenuList(result.data);
    }
  }
	return (
		<div>
			<h1>Menu Component</h1>
      <div>
        <ul>
          {menuList?.map((items) => (
            <li key={items.id}>
              <h3>{items.storeName}</h3>
              {/* <img alt=''>임시 이미지</img> */}
              {items.foodName[0].name}
              <div>{items.location}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    
	)
}

export default Menu;
