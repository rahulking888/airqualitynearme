export function createTwoKeyRoundRobin(key1: string, key2: string) {
  const keys = [key1, key2];
  let index = 0;

  return function getNextKey() {
    const key = keys[index];
    index = (index + 1) % 2; // 0 → 1 → 0 → 1
    return key;
  };
}
