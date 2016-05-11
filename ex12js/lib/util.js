import Bit from './bit'

export function subsequences(array) {
  const bits = new Bit(array.length);
  const subsets = [];

  while (true) {
    const subset = [];

    for (let i = 0; i < bits.length; i++) {
      if (bits[i] === 1) subset.push(array[i]);
    }

    subsets.push(subset);
    if (bits.every(v => v === 1)) break;
    bits.incr();
  }

  return subsets.sort((a, b) => a.length - b.length);
}

export function product(array) {
  return array.reduce((acc, x) => acc * x, 1);
}

export function* triangleNumber() {
  let n = 0;

  for (let i = 1; ; i++)
    yield n += i;
}
