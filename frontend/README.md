# frontend system

[Next.js](https://nextjs.org/) を使用しています。

## 開発環境構築

### 環境変数設定

環境変数の設定を行います。
本ディレクトリに.env ファイルを作成し設定しています。

```
API_HOST="" # backendのホスト名 or IPアドレス
```

### 開発環境の起動

各種パッケージをインストール

```bash
npm i
```

### dev 環境立ち上げ

```bash
npm run dev
```

### code 整形・静的解析

```bash
npm run format
npm run lint
```
