import React, { useEffect, useState } from "react";
import Menu from "./menu";
import { getCategoryList } from "../../api";
import CategoryList from "../../interfaces/CategoryList";
import CategoryButton from "../../components/home";
import { useQuery } from "react-query";
import { AxiosError } from "axios";
import RecipeReviewCard from "../../components/MenuCard";


interface QueryDataType {
  data: Array<CategoryList> // 제네릭
}

const Home = () => {
  //TODO: type 정의
  const [menuId, setMunuId] = useState('A'); 
  // 1. useQuery로 실행하는 function의 return값 정의, 
  // 2. query function의 error 형식을 정의
  // 3. data에 담기는 실질적 type
  const { status, data: categoryList, error } = useQuery<QueryDataType, AxiosError, QueryDataType>(
    "getCetegory", 
    getCategoryList,
    {refetchOnWindowFocus :false}
  );

  const categoryOnClick = (e) => {
    const menuId = e.currentTarget.id
    setMunuId(menuId)
  }

// 카테고리 리스트 조회 후 클릭마다 현재 아이디 menu로 프롭스 넘겨주기
// 현재 클릭된 ID STATE에 담기
// useRef 써보기
// 여서 button으로 redering

  if(status === "loading") return <span>Loding...</span>
  if(status === "error") return <span>Error: {error}</span>
  
  return (
    <>
      <div className="home_wrap">
        <div className="home_box">
        <h1 className="home_category_title">
          카테고리 리스트
        </h1>
        {
            categoryList?.data?.map((items) => (
              <CategoryButton 
                setMenuId={setMunuId} 
                key={items.id} 
                menuId={items.kind} 
                categoryName={items.categoryName} 
                onClick={categoryOnClick} 
              />
            ))
        }
        <Menu menuId={menuId}/>
        </div>
      </div>
    </>
  )
}

export default Home; 