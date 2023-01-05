import React from 'react';
import * as S from './style';

const Header = () :JSX.Element => {
  return (
        <div className='header'>
            <S.Title>
                <header>마 식 가 배포 테스트</header>
                <span></span>
                {/* <button type='button'>햄버거</button> */}
            </S.Title>
        </div>
  );
}

export default Header;