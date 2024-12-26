const color = document.getElementById('colorPicker');
const text = document.getElementById('bodyText');

//背景色を変更する関数
function changeColor(){
  document.body.style.backgroundColor = color.value;
  text.textContent = color.value;
}

// カラーピッカーが変更されたときに、背景色を変える
color.addEventListener('input', changeColor);
