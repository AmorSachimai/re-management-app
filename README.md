# re-management-app

昔作った業務管理システムを構築し直してみる。
特にゴールを決めておらず、勉強しながら気長に作っていくのですぐには使えません。
なんとなくclean architecture的な思想で作っていく。

## どんなアプリ？

メイン機能はお客様からの問い合わせに対しての対応記録を管理するもの。コールセンターとかで使われているようなやつ。

サブの機能として、社内図書の管理だったり wiki だったりを実装している。(この辺は適当に作ったので記憶があいまい)

最近勉強中の React なんかと組み合わせていい感じにしていく。

## 技術スタック

- Python
  - Django
- TypeScript(JavaScript)
  - Node.js
  - Next.js(React)

## 開発環境の構築

このアプリは backend(API)側と fronend 側でディレクトリを分けています。それぞれのディレクトリ内に readme を配置したので、そちらを参照のこと。

see: [backend](backend/README.md)
see: [frontend](frontend/README.md)
