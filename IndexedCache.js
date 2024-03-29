import { IndexedDB } from "https://code4fukui.github.io/IndexedDB/IndexedDB.js";

export class IndexedCache {
  constructor(db) {
    this.db = db;
  }
  static async create(dbname = "cache", dbver = 1) {
    const db = await IndexedDB.create(dbname, ["url", "data"], dbver);
    return new IndexedCache(db);
  }
  async fetchOrLoad(url) {
    const res = await this.db.get("url", url);
    if (res.length > 0) {
      return res[0].data;
    }
    const res2 = new Uint8Array(await (await fetch(url)).arrayBuffer());
    await this.db.add({ url, data: res2 });
    return res2;
  }
  async clear() {
    const length = await this.db.length();
    for (let i = 0; i < length; i++) {
      await this.db.removeAt(i + 1);
    }
  }
}

let cache = null;
export const getDefaultCache = async () => {
  if (!cache) {
    cache = await IndexedCache.create();
  }
  return cache;
};

export const fetchOrLoad = async (url) => {
  return await getDefaultCache().fetchOrLoad(url);
};

export const clearCache = async () => {
  await getDefaultCache.clear();
};
