# IndexedCache.js

Webアプリのキャッシュライブラリです。[IndexedDB](https://github.com/code4fukui/IndexedDB)を使ってデータをキャッシュします。

## 機能
- IndexedDBを使ってデータをキャッシュ
- 自動的にデータをフェッチして保存
- `fetchOrLoad`関数で簡単にデータにアクセス
- キャッシュのクリアが可能

## 使い方

```js
import { fetchOrLoad } from "https://code4fukui.github.io/IndexedCache/IndexedCache.js";

const bin = await fetchOrLoad("./somedata.bin");
```

または

```js
import { IndexedCache } from "https://code4fukui.github.io/IndexedCache/IndexedCache.js";

const cache = await IndexedCache.create("cache", 1);
const bin = await cache.fetchOrLoad("./somedata.bin");
await cache.clear();
```

## 必要環境
このライブラリはIndexedDBをサポートしているブラウザが必要です。

## ライセンス
MIT License