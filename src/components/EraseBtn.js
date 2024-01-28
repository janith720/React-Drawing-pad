import React from "react";
import BrushIcon from "@material-ui/icons/Brush";
import eraser from "../images/eraser.png";

export default function EraseBtn({
  setSelectedColor,
  setSelectedLineSize,
  setPickerName,
}) {
  const erase = () => {
    setSelectedColor("white");
    setSelectedLineSize(20);
    setPickerName("Eraser");
  };
  const Brush = () => {
    setSelectedColor("#22194D");
    setSelectedLineSize(10);
    setPickerName("Brush");
  };

  return (
    <div
      style={{
        margin: "20px",
      }}
    >
      <label style={{ fontSize: "12px", margin: "8px", color: "#9E9E9E" }}>
        Brush
      </label>
      <label style={{ fontSize: "12px", marginLeft: "18px", color: "#9E9E9E" }}>
        Eraser
      </label>
      <br />
      <button
        onClick={Brush}
        style={{
          padding: "4px",
          background: "white",
          border: "none",
          borderRadius: "5px",
          boxShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
          margin: "5px",
          cursor: "pointer",
        }}
      >
        <BrushIcon style={{ fontSize: "40px" }} />
      </button>

      <button
        onClick={erase}
        style={{
          padding: "10px 9px 4px 8px",
          background: "white",
          border: "none",
          borderRadius: "5px",
          boxShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
          margin: "5px",
          cursor: "pointer",
        }}
      >
        <img src={eraser} alt="erase" />
      </button>
    </div>
  );
}
