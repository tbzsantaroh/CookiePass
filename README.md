# CookiePass

webページに全画面の確認ポップアップを表示、Yesボタンを押したらCookieを保存し、以降ポップアップを表示しない。  
ついでに、html側で言語指定して表示テキスト切り替え可能。  
というスクリプト。

[動作demo](https://tbzsantaroh.github.io/CookiePass/dist/)

## Dependency

- sass　v1.51
- typescript v4.6

## Setup

`src/ts/import/_CookiePass.ts`  
`src/scss/cookiepass.scss`

この2つのファイルを使う。  

## Usage

1. javascriptに `import { cookiepass } from './_CookiePass';` で、 ファイル読み込み。
1. javascriptに `cookiepass();` で実行。
1. htmlのbody要素に `<body data-cookiepass_lang='**'>` という感じでdata属性を指定する。

### 1. importで読み込み

javascriptに `import { cookiepass } from './_CookiePass';` で、 ファイル読み込み。  
`_CookiePass.ts` の部分は任意のファイルパスで指定する。  

### 2. `cookiepass();` で実行

先程書いた `import { cookiepass } from './_CookiePass';` より下の行に、 `cookiepass();` と書く。  
引数 `()` にポップアップ内容のテキストを入れる。

```javascript
cookiepass([
  {
    lang: 'ja', // bodyタグのdata属性
    h1: 'タイトル質問文', // 質問タイトル
    warning: 'NOボタン押したときに表示される警告文',  // NOボタン押したら表示されるテキスト
    yes: 'Yesボタンの説明文', // YESボタン下のテキスト
    no: 'NOボタンの説明文', // NOボタン下のテキスト
    caution: '*最下部の説明文' // 最下部のテキスト
  }
]);
```
  
`lang: '**';` だけは表示テキストではなく、テキストを切り替えるためのもの。  
<!-- html側で `<body data-cookiepass_lang='**'>` という感じで、表示するテキストを指定する。 -->

### 3. htmlのbody要素にdata属性を指定する

htmlのbody要素に `<body data-cookiepass_lang='**'>` という感じでdata属性を指定する。  
先程の引数 `lang: '**'` で指定した内容を入れる。  

```javascript
cookiepass([
  {
    lang: 'ja',
    ~~~
  },
  {
    lang: 'en',
    ~~~
  },
  {
    lang: 'tc',
    ~~~
  }
]);
```

javascript側の引数をこんな感じで複数作っていた場合、htmlのdata属性 `lang='**'` で、どのテキストを表示するか選べる。

---

### Sample Code

#### index.html

```html
<html>
  <head>
    ~
    <link href="cookiepass.css" rel="stylesheet">
  </head>
  <body data-cookiepass_lang='ja'>
    ~
    <script defer src="cookiepass.js"></script>
  </body>
</html>
```

#### cookiepass.js

```typescript
import { cookiepass } from './_CookiePass';

cookiepass([
  {
    lang: 'ja',
    h1: '日本語文サンプル',
    warning: 'そこへいきなり、ピンクの目をした白うさぎが近くを走ってきたのです。',
    yes: 'はい',
    no: 'いいえ',
    caution: 'それだけなら、そんなにめずらしいことでもありませんでした。さらにアリスとしては、そのうさぎが「どうしよう！どうしよう！ちこくしちゃうぞ！」とつぶやくのを聞いたときも、それがそんなにへんてこだとは思いませんでした'
  },
  {
    lang: 'en',
    h1: 'en sample text',
    warning: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    yes: '',
    no: '',
    caution: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    lang: 'tc',
    h1: '繁体字サンプル',
    warning: 'そこへいきなり、ピンクの目をした白うさぎが近くを走ってきたのです。',
    yes: '',
    no: '',
    caution: 'それだけなら、そんなにめずらしいことでもありませんでした。さらにアリスとしては、そのうさぎが「どうしよう！どうしよう！ちこくしちゃうぞ！」とつぶやくのを聞いたときも、それがそんなにへんてこだとは思いませんでした'
  },
  {
    lang: 'sc',
    h1: '簡体字サンプル',
    warning: 'そこへいきなり、ピンクの目をした白うさぎが近くを走ってきたのです。',
    yes: '',
    no: '',
    caution: 'それだけなら、そんなにめずらしいことでもありませんでした。さらにアリスとしては、そのうさぎが「どうしよう！どうしよう！ちこくしちゃうぞ！」とつぶやくのを聞いたときも、それがそんなにへんてこだとは思いませんでした'
  }
]);
```

## License

This software is released under the MIT License, see LICENSE.

## Authors

<https://github.com/tbzsantaroh>
