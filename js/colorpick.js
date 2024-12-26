// JavaScript

const color = document.getElementById('colorPicker');
const text = document.getElementById('bodyText');

//背景色を変更する関数
//function構文を使う書き方
function changeColor(){
  document.body.style.backgroundColor = color.value;
  text.textContent = color.value;
}
//document.body.style.backgroundColor
//(HTMLを示す).(どのタグかを示す).(CSSを示す).(どこのコマンドかを示す)

//アロー関数を使う書き方
// const changeColor = () => {
//   document.body.style.backgroundColor = color.value;
//   text.textContent = color.value;
// }

// カラーピッカーが変更されたときに、背景色を変える
color.addEventListener('input', changeColor);
