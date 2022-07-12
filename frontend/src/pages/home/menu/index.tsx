import React, { useEffect, useState } from "react";
import api from "../../../api";
import MenuListType from "../../../interfaces/menuList";

const Menu = () => {

    const [menuList, setMenuList] = useState<MenuListType[]>(null);

	useEffect(() => {
		getMenuList();
	},[])

    const getMenuList = async () => {
		const result = await api.getMenuList();
		if(result.retCode === "0000"){
			setMenuList(result.data);
		}
    }

	console.log("menuList", menuList);

	return (
		<div>
			<h1>Menu Component</h1>
		</div>
	)
}

export default Menu;
