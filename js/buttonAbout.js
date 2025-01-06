//参考：https://qiita.com/riversun/items/1adffa5674bc5123b16d

//aboutボタンが押された、という情報を取得する
const buttonClickAbout = document.getElementById("about");

//モーダルウインドウを開く処理
function openModalAbout() {
    const createAboutWindow = new JSFrame();
 
    const modalAbout = createAboutWindow.create({
        name: 'windowAbout',
        title: 'color Palletとは？',
        left: 0, top: 0, width: 300, height: 500,
        movable: true,
        resizable: true,
        style: {
            backgroundColor:'rgb(220, 220, 220)',
            overflow: 'auto'
        },
        url:'./common/descAbout.html'
    });
    //画面の中心に配置する
    modalAbout.setPosition(window.innerWidth / 2, window.innerHeight / 2, 'CENTER_CENTER');

    //モーダルウィンドウとして開く.
    modalAbout.showModal();
};

//ボタンが押された時に行う処理
buttonClickAbout.addEventListener("click", () => {
  //ウィンドウを表示する
    openModalAbout();
});