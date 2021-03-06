import React, { useEffect, useState } from "react";
import CategoryList from "./category";
import Menu from "./menu";
import api from "../../api";
import categoryList from "../../interfaces/categoryList";

const Home = () => {

  const [category, setCategory] = useState<categoryList[]>(null);
// 한번 더 테스트
  useEffect(() => {
    getCategoryList();
},[])
// pull request test
const getCategoryList = async () => {
    const result = await api.getCategoryList();
    // TODO : 조건 api code로 변경
    console.log(" categoryList :", result.data);
    if(result.retCode === "0000"){
        setCategory(result.data);
    }
}


// 카테고리 리스트 조회 후 클릭마다 현재 아이디 menu로 프롭스 넘겨주기
// 현재 클릭된 ID STATE에 담기
// useRef 써보기
  return (
    <>
        <div>
          메뉴를 골라줘
        </div>

        {
            category?.map((items) => (
                <CategoryList key={items.id} id={items.id} categoryName={items.categoryName} />
            ))
            // 리스트
        }
        
        <Menu />
    </>
  )
}

export default Home; 