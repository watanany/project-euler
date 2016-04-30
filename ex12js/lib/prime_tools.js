export default class PrimeTools {
  constructor() {
    this.primes = new Set([2, 3]);
  }

  isPrime(x) {
    if (this.primes.has(x))
      return true;

    if (x % 2 == 0)
      return false;

    const max = Math.sqrt(x);
    for (let i = 3; i <= max; i += 2) {
      if (x % i == 0)
        return false;
    }

    this.primes.add(x);
    return true;
  }

  factorize(x) {
    const factors = [];
    const primes = Array.from(this.primes);

    // find out factors from primes
    for (let i = 0; i < primes.length; i++) {
      if (x % primes[i] == 0) {
        factors.push(primes[i]);
        x = parseInt(x / primes[i]);
        i = -1;
      }

      if (x == 1)
        return factors.sort();
    }

    // find out prime factors from [2..]
    for (let i = 2; ; i++) {
      if (this.isPrime(i) && x % i == 0) {
        factors.push(i);
        x = parseInt(x / i);
        i = 1;
      }

      if (x == 1)
        return factors.sort();
    }
  }
}
