import React, { useState } from "react";
import Canvas from "../components/Canvas";
import ColorPicker from "../components/ColorPicker";
import EraseBtn from "../components/EraseBtn";
import LineWidth from "../components/LineWidth";

const LineSizes = [1, 4, 6, 8, 10, 14, 20];

export default function Home() {
  const [selectedColor, setSelectedColor] = useState("#22194D");
  const [selectedLineSize, setSelectedLineSize] = useState(LineSizes[4]);

  const [pickerName, setPickerName] = useState("Brush");

  return (
    <div style={{ display: "flex" }}>
      <Canvas
        selectedColor={selectedColor}
        selectedLineSize={selectedLineSize}
      />

      <div style={{ marginLeft: "20px" }}>
        <ColorPicker
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
        <EraseBtn
          setSelectedColor={setSelectedColor}
          setSelectedLineSize={setSelectedLineSize}
          setPickerName={setPickerName}
        />
        <LineWidth
          selectedLineSize={selectedLineSize}
          setSelectedLineSize={setSelectedLineSize}
          LineSizes={LineSizes}
          pickerName={pickerName}
        />
      </div>
    </div>
  );
}
