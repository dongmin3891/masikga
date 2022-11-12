import React from 'react';
import { useHistory } from 'react-router';
// import styled from 'styled-components';

//  폴더구조 변경해야함
const CategoryButton = ({ id, categoryName }) => {
  const history = useHistory();
  const categoryIdOnClick = (e) => {
    history.replace({
      pathname: `/home/${e.target.id}`,
      // state: e.target
    })
    console.log("test", e.currentTarget)
  }

  return (
        <button type="button" id={id} key={id} onClick={(e) =>categoryIdOnClick(e)} >{categoryName}</button>
  );
}

export default CategoryButton;