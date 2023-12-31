/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React,{useState} from "react";
import { ChromePicker } from "react-color";


export const ColorPicker = ({setSelectedColor,selectedColor}) => {
  return (
    <ChromePicker
      color={selectedColor}
      onChange={updatedColor=>setSelectedColor(updatedColor?.hex)}
    />      
  );
};