//参考：https://qiita.com/riversun/items/1adffa5674bc5123b16d

//HowToボタンが押された、という情報を取得する
const buttonClickHowTo = document.getElementById("howTo");

//モーダルウインドウを開く処理
function openModalHowTo() {
  const createHowToWindow = new JSFrame();
  const modalHowTo = createHowToWindow.create({
    name: "windowHowTo",
    title: "使い方は？",
    left: 0,
    top: 0,
    width: 500,
    height: 400,
    movable: false,
    resizable: false,
    style: {
      backgroundColor: "rgb(220, 220, 220)",
      overflow: "auto",
    },
    url: "./common/descHowTo.html",
  });
  //画面の中心に配置する
  modalHowTo.setPosition(
    window.innerWidth / 2,
    window.innerHeight / 2,
    "CENTER_CENTER"
  );

  //モーダルウィンドウとして開く.
  modalHowTo.showModal();
}

//ボタンが押された時に行う処理
buttonClickHowTo.addEventListener("click", () => {
  //ウィンドウを表示する
  openModalHowTo();
});
