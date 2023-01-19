import React from 'react'
import Button from '@mui/material/Button';
interface IProps {
  className?: string;
  text:string;
  variant: 'contained' | 'outlined';
  onClick: (e:any) => void;
  id?: string
}

const BasicButton = ({ className, text, variant, onClick, id }:IProps) => {
  return (
    <Button className={className} id={id} variant={variant} onClick={onClick}>{text}</Button>
  )
}

export default BasicButton