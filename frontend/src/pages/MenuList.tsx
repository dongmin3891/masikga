import React from 'react';
// import { MenuListType } from '../types';



const MenuList = ({ menu }) :JSX.Element => {
  return (
      <>
        <div>
          메뉴리스트
        </div>
        <ul>
          {menu?.map((items : any) => (
            <li key={items.id}>{items.storeName}</li>
          ))}
        </ul>
      </>
    
  );
}

export default MenuList;