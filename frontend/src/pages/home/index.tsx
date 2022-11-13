import React, { useEffect, useState } from "react";
import CategoryList from "./category";
import Menu from "./menu";
import api from "../../api";
import categoryList from "../../interfaces/categoryList";
import CategoryButton from "../../components/home";



const Home = () => {
  //TODO: type 정의
  const [category, setCategory] = useState<categoryList[]>(null);
  const [menuId, setMunuId] = useState('A'); 
// 한번 더 테스트
  useEffect(() => {
    // TODO: menuid 변경될 때마다 api 호출 아니면 rxjs맵도 사용해봐도 될듯
    getCategoryList();
  },[])

  useEffect(() => {
    console.log("menuId", menuId);
  },[menuId])

// pull request test
const getCategoryList = async () => {
    const result = await api.getCategoryList();
    // TODO : 조건 api code로 변경
    if(result.retCode === "0000"){
        setCategory(result.data);
    }
}

const categoryOnClick = (e) => {
  const menuId = e.target.menuId
  setMunuId(menuId)
}


// 카테고리 리스트 조회 후 클릭마다 현재 아이디 menu로 프롭스 넘겨주기
// 현재 클릭된 ID STATE에 담기
// useRef 써보기
// 여서 button으로 redering
  return (
    <>
        <div>
          메뉴를 골라줘
        </div>
        {
            category?.map((items) => (
              <CategoryButton setMenuId={setMunuId} key={items.id} menuId={items.kind} categoryName={items.categoryName} onClick={categoryOnClick} />
            ))

        }
        <Menu menuId={menuId}/>
    </>
  )
}

export default Home; 