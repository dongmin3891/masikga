import React, { Dispatch, SetStateAction } from 'react';
import { useHistory } from 'react-router';
// import styled from 'styled-components';

interface IProps {
  menuId: string,
  categoryName: string,
  onClick: (e:any) => void,
  setMenuId: Dispatch<SetStateAction<string>>;
}

const CategoryButton = ({ menuId, categoryName, onClick, setMenuId } : IProps) => {
  const history = useHistory();
  const CetegoryonClick = (e) => {


    // history.replace({
    //   pathname: `/home/${e.target.id}`,
    //   // state: e.target
    // })
    // console.log("test", e.currentTarget)
  }
  // returnSetItem: Dispatch<SetStateAction<string[]>>;
  return (
        <button type="button" id={String(menuId)} key={menuId} onClick={(e) =>onClick(e)} >{categoryName}</button>
  );
}

export default CategoryButton;