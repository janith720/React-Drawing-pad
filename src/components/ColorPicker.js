import React from 'react';
import { HexColorPicker } from 'react-colorful';

export default function ColorPicker({selectedColor,setSelectedColor}) {
  return <div style={{borderBottom: '1px solid #BDBDBD'}}>
      <HexColorPicker style={{
        margin: '20px',
        
      }} 
      selectedColor={selectedColor} 
      onChange={setSelectedColor}/>
  </div>;
}
