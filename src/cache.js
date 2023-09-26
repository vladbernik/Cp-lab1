class Cache {
  constructor() {
    this.cache = new Map();
  }

  set(key, value, accessCount = 1) {
    this.cache.set(key, { value, accessCount });
  }

  get(key) {
    if (!this.cache.has(key)) return null;
    const entry = this.cache.get(key);
    
    if (entry.accessCount === 0) {
      this.cache.delete(key);
      return null;
    }

    entry.accessCount--;
    return entry.value;
  }

  getStats() {
    const stats = [];
    for (const [key, entry] of this.cache.entries()) {
      stats.push({ key, value: entry.value, accessCount: entry.accessCount });
    }
    return stats;
  }
}
export { Cache }

// const cache = new Cache();

// cache.set("key1", "value1", 2);
// cache.set("key2", "value2", 3);

// console.log(cache.get("key1")); 
// console.log(cache.get("key2"));
// console.log(cache.get("key1")); 
// console.log(cache.getStats());