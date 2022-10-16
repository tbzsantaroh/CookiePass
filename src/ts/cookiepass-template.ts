import '@scss/cookiepass-template.scss';  // スタイルシート読み込み


const dialogContent = (<HTMLDialogElement>document.querySelector('#cookie-modal'));  // dialog要素を指定

// 自動でポップアップ開く
document.addEventListener('DOMContentLoaded', () => {
  dialogContent.showModal();
});
