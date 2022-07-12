import React, { useEffect, useState } from "react";
import api from "../api";
import CategoryButton from "../components/home/CategoryButton";

import categoryList from "../interfaces/categoryList";
import MenuListType from "../interfaces/menuList";
import MenuList from "./MenuList";

const Home = () => {

    const [category, setCategory] = useState<categoryList[]>(null);
    const [menuList, setMenuList] = useState<MenuListType[]>(null);

    useEffect(() => {
        getCategoryList();
        getMenuList();
    },[])

    const getCategoryList = async () => {
        const result  = await api.getCategoryList();
        // TODO : 조건 api code로 변경
        console.log(" categoryList :", result.data);
        if(result.retCode === "0000"){
            setCategory(result.data);
        }
    }

    const getMenuList = async () => {
        const result = await api.getMenuList();
        if(result.retCode === "0000"){
            setMenuList(result.data);
        }
    }

    console.log("category :", category);
    console.log("menuList :", menuList); 

    return (
        <>
            {
                category?.map((items) => (
                <CategoryButton key={items.id} id={items.id} categoryName={items.categoryName} />
                ))
            }
            <MenuList />
        </>
    )
}

export default Home;
