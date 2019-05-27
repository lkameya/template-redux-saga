import * as React from 'react';
import { TextField } from '@material-ui/core';

export const CustomField = ({ label, placeholder, field, form }) => {
  return <TextField name={field.name} label={label} 
  style={{marginTop: '5px'}}
  fullWidth
  placeholder={placeholder} {...field} 
  helperText={form.touched[field.name] ? form.errors[field.name] : ""} 
  error={(form.touched[field.name] && form.errors[field.name]) ? true : false} />;
};
