import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
    color : black;  
    font-size: 2em;
    display : flex;
    justify-content: space-around ;
    justify-content: space-between ;
    background-color: yellowgreen;
    padding: 0.3em 0.3em 0.3em 0.3em ;
`;

const Header = () :JSX.Element => {
  return (
    
        <div className='header'>
            <Title>
                <header>마 식 가</header>
                {/* <button type='button'>햄버거</button> */}
            </Title>
        </div>
    
  );
}

export default Header;