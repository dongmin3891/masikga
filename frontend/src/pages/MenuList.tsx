import React from 'react';
// eslint-disable-next-line no-unused-vars
import { MenuListType } from '../types';
// import styled from 'styled-components';

// TODO : menulist property error clear
const MenuList = ({ menulist } : MenuListType[] ) :JSX.Element => {

  console.log("test",menulist);

  return (
      <>
        <div>
          메뉴리스트
        </div>
        <ul>
          {menulist?.map((items : any) => (
            <li key={items.id}>{items.storeName}</li>
          ))}
        </ul>
      </>
    
  );
}

export default MenuList;