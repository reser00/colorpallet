// //aboutボタンが押された、という情報を取得する
// const buttonClickAbout = document.getElementById("about");

// //フロートウインドウを出現させる処理　参考：https://qiita.com/riversun/items/1adffa5674bc5123b16d
// const createAboutWindow = new JSFrame();
// const about = createAboutWindow.create({
//   title: "ウィンドウ",
//   left: 20,
//   top: 20,
//   width: 320,
//   height: 220,
//   movable: true, //マウスで移動可能
//   resizable: true, //マウスでリサイズ可能
//   html: '<div id="my_element" style="padding:10px;font-size:12px;color:darkgray;">Contents of window</div>',
// });

// //ボタンが押された時に行う処理
// buttonClickAbout.addEventListener("click", () => {
//   //ウィンドウを表示する
//   about.show();
// });

//上記はうまく動かなかったのでコメントアウトで一旦避難する。
//特定の何かをきっかけにウインドウの最前面に出てくるウインドウを
//モーダルウインドウと呼ぶらしいのでそっちを採用してみる。

//以下はソッチの実装。参考：https://qiita.com/riversun/items/1adffa5674bc5123b16d


//aboutボタンが押された、という情報を取得する
const buttonClickAbout = document.getElementById("about");

//モーダルウインドウを開く処理
function openModalAbout() {
    const createAboutWindow = new JSFrame();
    //以下innerHTML内にHTMLを記述するとcreateメソッド内htmlパラメータで呼び出しできる
    //
    // const innerHTML = '<div class="modal-header">' +
    //     '<h6 class="modal-title">変更を保存してよいですか？</h6>' +
    //     '</div>' +
    //     ' <div class="modal-body">' +
    //     '保存する場合はOKを押してください。保存しない場合はCancelを押してください。' +
    //     '</div>' +
    //     '<div class="modal-footer">' +
    //     // '<button id="bt_submit" type="button" class="btn btn-outline-primary">OK</button>' +
    //     '</div>';
    //
    //今回は別ファイルにHTMLを用意してurlパラメータで指定する。コールバックは用意しない

    const modalAbout = createAboutWindow.create({
        name: 'windowAbout',
        title: 'color Palletとは？',
        left: 0, top: 0, width: 500, height: 400,
        movable: false,
        resizable: false,
 
    });
    //画面の中心に配置する
    modalAbout.setPosition(window.innerWidth / 2, window.innerHeight / 2, 'CENTER_CENTER');

    // //モーダルウィンドウとして開く
    // modalAbout.showModal(_frame => {
    //     //モーダルウィンドウが閉じられたときのコールバック
    //     createAboutWindow.showToast({
    //         html: `${_frame.getName()}が閉じられました.`, align: 'center',duration:2000
    //     });
    // });


    //モーダルウィンドウとして開く.コールバックを設定しないとどうなるのか確認
    //問題なかったのでこちらを採用。
    modalAbout.showModal();
};

//ボタンが押された時に行う処理
buttonClickAbout.addEventListener("click", () => {
  //ウィンドウを表示する
    openModalAbout();
});