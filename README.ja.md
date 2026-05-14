# IndexedCache.js

[IndexedDB](https://github.com/code4fukui/IndexedDB) を使用したWebアプリケーション向けのキャッシュライブラリです。

## 機能
- IndexedDBを使用したデータのキャッシュ
- データの自動取得と保存
- 簡単にアクセスできる `fetchOrLoad` 関数の提供
- キャッシュのクリアが可能

## 必要条件
このライブラリを使用するには、IndexedDBをサポートするブラウザが必要です。

## 使い方
### `fetchOrLoad`
```js
import { fetchOrLoad } from "https://code4fukui.github.io/IndexedCache/IndexedCache.js";

const bin = await fetchOrLoad("./somedata.bin");
```

### `IndexedCache`
```js
import { IndexedCache } from "https://code4fukui.github.io/IndexedCache/IndexedCache.js";

const cache = await IndexedCache.create("cache", 1);
const bin = await cache.fetchOrLoad("./somedata.bin");
await cache.clear();
```

## ライセンス
MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
