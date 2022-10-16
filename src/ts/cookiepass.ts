import '@scss/sample-base.scss';  // 背景ボケてるか確認用の共用CSS
import '@scss/cookiepass.scss'; // スタイルシート読み込み


import { cookiepass } from './import/_CookiePass';

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