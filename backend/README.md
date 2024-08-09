# Backend system

Django を使用しています。
API としての機能しか有しておりません。

## 開発環境構築

### 環境変数設定

環境変数の設定を行います。
本ディレクトリに.env ファイルを作成し設定しています。

#### Django の環境変数

```
SECRET_KEY="your secret key" # 暗号化キー
PIPENV_VENV_IN_PROJECT=true # 仮想環境の設定
```

#### DB の設定（任意）

特に指定が無い場合は django 標準の sqlite3 が使用されます。

```
DB_ENGINE="db engine"
DB_NAME="db name"
DB_USER="db user"
DB_PASSWORD="db password"
DB_HOST="db host name"
DB_PORT=8080
```

### Django の構築

※pipenv を使用しています
下記コマンドで各種パッケージをインストール

```bash
pipenv sync --dev
```

DB のマイグレーションを行います

```bash
pipenv run python manage.py migrate
```

### dev 環境立ち上げ

```bash
pipenv run dev
```

### code 整形・静的解析

```bash
pipenv run format
pipenv run lint
```
