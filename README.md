# IndexedCache.js

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A cache library for web applications that uses [IndexedDB](https://github.com/code4fukui/IndexedDB).

## Features
- Caching data using IndexedDB
- Automatically fetches and stores data
- Provides `fetchOrLoad` function for easy access
- Allows clearing the cache

## Requirements
This library requires a browser that supports IndexedDB.

## Usage
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

## License
MIT License