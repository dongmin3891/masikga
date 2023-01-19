import React from 'react'
import { TextField } from '@mui/material';

interface IProps {
  placeholder : string;
  variant : "standard" | "filled" | "outlined" | undefined;
  value: string;
  name: string;
  type?: string;
  onChange? : (e:any) => void;
}

const BasicInput = (props : IProps) => {
  const { placeholder, variant, value, name, type, onChange } = props;
  return (
    <>
      <TextField 
        placeholder={placeholder}
        variant= {variant}
        value={value}
        name={name}
        onChange={onChange}
        type={type}
      />
    </>
  )
}

export default BasicInput;