document.addEventListener("DOMContentLoaded", () => {
  const colorPicker = document.getElementById("colorPicker");

  const lightContrast = document.getElementById("lightContrast");
  const textLight = document.getElementById("textLight");
  const darkContrast = document.getElementById("darkContrast");
  const textDark = document.getElementById("textDark");
  const invertContrast = document.getElementById("invertContrast");
  const textInverse = document.getElementById("textInverse");

  // RGBからカラーコードに変換するための処理を記述した関数
  const rgbToHex = (rgb) =>
    `#${rgb.map((value) => value.toString(16).padStart(2, "0")).join("")}`;

  // 明るい色
  const lightenColor = (rgb, offset = 70) =>
    rgb.map((value) => Math.min(255, value + offset));
  const applyLightenedColor = () => {
    const selectedColor = parseColorInput(colorPicker.value);
    const brightColor = lightenColor(selectedColor);
    const brightHex = rgbToHex(brightColor);
    lightContrast.style.backgroundColor = brightHex;
    textLight.textContent = brightHex;
  };

  // 暗い色
  const darkenColor = (rgb, offset = 70) =>
    rgb.map((value) => Math.max(0, value - offset));
  const applyDarkenedColor = () => {
    const selectedColor = parseColorInput(colorPicker.value);
    const darkColor = darkenColor(selectedColor);
    const darkHex = rgbToHex(darkColor);
    darkContrast.style.backgroundColor = darkHex;
    textDark.textContent = darkHex;
  };

  // 逆相の色
  const invertColor = (rgb) => rgb.map((value) => 255 - value);
  const applyInvertedColor = () => {
    const selectedColor = parseColorInput(colorPicker.value);
    const invertedColor = invertColor(selectedColor);
    const invertedHex = rgbToHex(invertedColor);
    invertContrast.style.backgroundColor = invertedHex;
    textInverse.textContent = invertedHex;
  };

  // HEXカラーコードをRGBに変換
  const parseColorInput = (colorValue) => {
    const hex = colorValue.startsWith("#") ? colorValue : "#FFFFFF";
    const bigint = parseInt(hex.slice(1), 16);
    return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
  };

  // カラーピッカーイベント
  colorPicker.addEventListener("input", () => {
    applyLightenedColor();
    applyDarkenedColor();
    applyInvertedColor();
  });
});
