import { Cache } from "../src/cache";

test('it fails', () => {
  expect(false).toBe(true);
});


test('if key doesnt exist', () => {
  const cache = new Cache();
  expect(cache.get('nonExistentKey')).toBeNull();
});

test('when accesscounter null', () => {
  const cache = new Cache();
  cache.set('key', 'value', 1); 
  cache.get('key'); 
  expect(cache.get('key')).toBeNull();
});

test('decrement accesscounter', () => {
  const cache = new Cache();
  cache.set('key', 'value', 2); 
  expect(cache.get('key')).toBe('value');
  expect(cache.get('key')).toBe('value');
  expect(cache.get('key')).toBeNull();
});

test('list of access statistics', () => {
  const cache = new Cache();
  cache.set('key1', 'value1', 2); 
  cache.set('key2', 'value2'); 
  cache.get('key1');
  cache.get('key2');
  const stats = cache.getStats();
  expect(stats).toEqual([
    { key: 'key1', value: 'value1', accessCount: 1 },
    { key: 'key2', value: 'value2', accessCount: 0 },
  ]);
});


