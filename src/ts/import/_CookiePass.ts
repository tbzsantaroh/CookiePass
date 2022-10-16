// # CookiePass

// ## 動作説明
// htmlページを開いたら質問ポップアップを全画面表示し、Yesの場合はcookieを作成して、以降ポップアップを表示しない。

// ## 使い方
// 1. このポップアップを表示したいhtmlのbody要素に <body data-cookiepass_lang='ja'> で、data属性を指定する。
// 2. 使いたいhtml内のjsで import { cookiepass } from './import/_CookiePass-dialog'; で、 ファイル読み込み。
// 3. cookiepass(); で実行。 ()内に表示したいテキストの設定を入れる。設定サンプルは、この下のサンプルテキスト。

// ## タイトル部分のCSS
// #cookie-modal h1 { color: white; background: pink; }


// 引数なしの場合に表示されるサンプルテキスト
const cookiepass_LangText = [
  {
    lang: 'ja', // bodyタグのdata属性
    h1: 'タイトル質問文', // 質問タイトル
    warning: 'NOボタン押したときに表示される警告文',  // NOボタン押したら表示されるテキスト
    yes: 'Yesボタンの説明文', // YESボタン下のテキスト
    no: 'NOボタンの説明文', // NOボタン下のテキスト
    caution: '*最下部の説明文' // 最下部のテキスト
  },
  {
    lang: 'en',
    h1: 'en sample text',
    warning: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    yes: '',  // テキストが必要ない場合は、空の''にする
    no: '',
    caution: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }
];


// 外部ファイルから使えるように全体を関数化してexport
export const cookiepass = (indata = cookiepass_LangText) => {
  // document.cookie = 'cookiepassyes=true; max-age=0'; // 動作テスト用 cookie削除してポップアップ強制表示

  // ポップアップウィンドを生成する
  if (document.cookie.indexOf('cookiepassyes=true') === -1) { // cookieが無い場合だけ以下を実行

    document.addEventListener('DOMContentLoaded', () => { // DOMツリー構築が終わったタイミングで実行

      // **言語設定を読み取って、言語指定変数を切り替え**
      let BodyData = (<HTMLBodyElement>document.querySelector('body')).dataset.cookiepass_lang;  // 親要素bodyの言語確認用data属性を変数化
      if (typeof BodyData === 'undefined') {  // 例外処理: data属性が存在しない場合、エラーで何も表示されなくなるので例外動作を指定する
        BodyData = 'ja';  // デフォルトデータのjaを指定
      }

      let ChangeText = indata.find((v) => v.lang === BodyData); // 言語別テキスト配列から、親要素のdataと同じ文字列のlangがある配列だけを探し出して変数化
      if (typeof ChangeText === 'undefined') {  // 例外処理: 上のfindで、bodyのdata属性と一致する言語セットが存在しない場合、エラーで何も表示されなくなるので例外動作を指定する
        ChangeText = indata[0];  // 言語データの1つ目を指定
      }

      // HTMLの生成や書き換えは処理が遅いので、可能な限りスクリプト内で書き換えを終わらせてからHTML出力する
      // HTMLを生成 (Pugにオリジナルあり src/pug/cookiepass-template.pug)
      const InsertHTML = `
<dialog id="cookie-modal">
<h1>${ChangeText.h1}</h1>
<p class="warning" id="warning"><strong>${ChangeText.warning}</strong></p>
<div class="btn-wrap">
<button id="btnYes"><span class="btn-text">YES</span><br><span class="btn-caption">${ChangeText.yes}</span></button>
<button id="btnNo"><span class="btn-text">NO</span><br><span class="btn-caption">${ChangeText.no}</span></button>
</div>
<p class="caution">${ChangeText.caution}</p>
</dialog>
`;

      (<HTMLBodyElement>document.querySelector('body')).insertAdjacentHTML('afterbegin', InsertHTML); // HTMLのbodyタグ内一番上に、作ったHTML要素を挿入

      const dialogContent = (<HTMLDialogElement>document.querySelector('#cookie-modal'));  // htmlに追加したdialog要素を取得
      dialogContent.showModal();  // dialog要素を表示

      // Yesボタン押したときの挙動
      const btnYes = (<HTMLButtonElement>dialogContent.querySelector('button#btnYes'));  // yesボタン変数化
      btnYes.addEventListener('click', () => { // Yesボタンを押すと以下実行
        document.cookie = 'cookiepassyes=true; path=/; max-age=31536000';  // cookie追加
        dialogContent.classList.add('close'); // CSSの閉じるアニメーション
        setTimeout(() => dialogContent.close(), 500);  // 0.5秒後に閉じる CSSアニメーションが終わってから閉じるために、アニメーション時間の間ぶん待つ
      });

      // Noボタン押したときの挙動
      const btnNo = (<HTMLButtonElement>dialogContent.querySelector('button#btnNo'));  // Noボタン変数化
      const WarningText = (<HTMLParagraphElement>dialogContent.querySelector('p.warning')); // 警告テキスト部分を変数化
      btnNo.addEventListener('click', () => WarningText.style.transform = 'scaleY(1)');  // Noボタンを押すと、警告テキストのCSS ScaleYを1に書き換える
    });
  }
}