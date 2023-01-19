import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useHistory } from 'react-router';

const Header = () :JSX.Element => {
  
  const history = useHistory();

  const logoutHandler = () => {
    // TODO: 로그아웃 프로세스 정의
    history.push('/login');
  }

  return (

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 3 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
                            마식가
          </Typography>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
    
        // <div className='header'>
        //         <header>마 식 가</header>
        //         <span></span>
        //         {/* <button type='button'>햄버거</button> */}
        // </div>
  );
}

export default Header;