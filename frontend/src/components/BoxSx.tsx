import React from 'react'
import Box from '@mui/material/Box'

const BoxSx = ({children}) => {
  return (
    <Box
      sx={{
        margin: 0,
        border: 1,
        // justifyContent:'center',
        width: 300,
        height: 300,
        backgroundColor:'pink',
        // '&:hover': {
        //   backgrounColor: 'primary.main',
        //   opacity: [0.9, 0.8, 0.7]
        // }
      }}
    >
      {children}
    </Box>
      
  )
}

export default BoxSx;