import React, { useState } from "react";

const ColorBox = () => {
  const [hexColor, setHexColor] = useState("");
  const [rgbColor, setRgbColor] = useState({
    r: 38,
    g: 38,
    b: 38,
  });
  const [backgroundColor, setBackgroundColor] = useState(false);

  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
  function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  }

  return (
    <div
      style={{
        backgroundColor: backgroundColor
          ? "#" + hexColor
          : `rgb(${rgbColor.r},${rgbColor.g},${rgbColor.b})`,
      }}
      className="w-80 h-80 rounded-lg flex flex-col justify-center items-center shadow"
    >
      <div className="w-3/5 h-12 mb-4 px-4 flex flex-row justify-center items-center text-3xl">
        #
        <input
          className="w-24 text-gray-500"
          type="text"
          placeholder="262626"
          value={hexColor}
          onChange={(e) => {
            setBackgroundColor(true);
            setHexColor(e.target.value);
            hexToRgb(`#${e.target.value}`) !== null &&
              setRgbColor(hexToRgb(`#${e.target.value}`));
          }}
        />
      </div>
      <div className="w-3/5 h-12 mb-4 px-4 flex flex-row justify-center items-center text-3xl">
        rgb(
        <input
          className="w-12 text-gray-500"
          type="number"
          placeholder="38"
          value={rgbColor.r}
          onChange={(e) => {
            setBackgroundColor(false);
            setRgbColor({ ...rgbColor, r: e.target.value });
            setHexColor(
              rgbToHex(e.target.value, rgbColor.g, rgbColor.b).slice(1)
            );
          }}
        />
        ,
        <input
          className="w-12 text-gray-500"
          type="number"
          placeholder="38"
          value={rgbColor.g}
          onChange={(e) => {
            setBackgroundColor(false);
            setRgbColor({ ...rgbColor, g: e.target.value });
            setHexColor(
              rgbToHex(rgbColor.r, e.target.value, rgbColor.b).slice(1)
            );
          }}
        />
        ,
        <input
          className="w-12 text-gray-500"
          type="number"
          placeholder="38"
          value={rgbColor.b}
          onChange={(e) => {
            setBackgroundColor(false);
            setRgbColor({ ...rgbColor, b: e.target.value });
            setHexColor(
              rgbToHex(rgbColor.r, rgbColor.g, e.target.value).slice(1)
            );
          }}
        />
        )
      </div>
    </div>
  );
};

export default ColorBox;
