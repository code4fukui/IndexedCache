# IndexedCache.js

a cache lib for WebApps with [IndexedDB](https:/github.com/code4fukui/IndexedDB)

## Usage of Cache / fetchOrLoad

```js
import { fetchOrLoad } from "https://code4fukui.github.io/IndexedCache/IndexedCache.js";

const bin = await fetchOrLoad("./somedata.bin");
```

or

```js
import { IndexedCache } from "https://code4fukui.github.io/IndexedCache/IndexedCache.js";

const cache = await IndexedCache.create("cache", 1);
const bin = await cache.fetchOrLoad("./somedata.bin");
await cache.clear();
```
