import React from 'react'
import Container from '@mui/material/Container'

const ContainerSm = ({children}) => {
  return (
    <Container 
      maxWidth="sm"
    >
    {children}
    </Container>
  )
}

export default ContainerSm;