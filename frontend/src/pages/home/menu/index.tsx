import React, { useEffect, useState } from "react";
import MenuListType from "../../../interfaces/menuList";
import { useQuery, useMutation } from "react-query"
import { getMenuList } from "../../../api";
import { AxiosError } from "axios";

interface IProps {
  menuId: string;
}
interface QueryDataType {
  data?: Array<MenuListType>
}

const Menu = ( { menuId } : IProps) => {
  // 1. useMutation에 넘겨준 mutation 비동기 함수의 실행 결과의 타입, 
  // 2. useMutation에 넘겨준 mutation 비동기 함수의 에러 결과의 타입
  // 3. mutate 함수에 전달할 인자를 지정하는 generic 타입
  // 4. mutation function을 실행하기 전에 수행하는 onMutate callback 함수의 return값을 지정하는 타입
  // 참고 링크 : https://gusrb3164.github.io/web/2022/01/23/react-query-typescript/
  const { mutate, status, data: menuList, error } = useMutation<QueryDataType, AxiosError, string>(
    'menuList',
    getMenuList
  );
  
	useEffect(() => {
    console.log("rendering");
    mutate(menuId);
	},[menuId])
  
  if(status === "loading") return <span>Loding...</span>;
  if(status === "error" ) return <span>Error: {error}</span>;

	return (
		<div>
			<h1>Menu Component</h1>
      <div>
        <ul>
          {menuList?.data?.map((items) => (
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
