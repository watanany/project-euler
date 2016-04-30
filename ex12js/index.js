import 'babel-polyfill';
import PrimeTools from './lib/prime_tools'
import {product,subsequences,triangleNumber} from './lib/util'

function main() {
  const N = 500;
  const pt = new PrimeTools();

  for (const i of triangleNumber()) {
    const primeFactors = pt.factorize(i);
    const subsets = subsequences(primeFactors);
    const divisors = new Set(subsets.map(product));

    if (divisors.size > N) {
      console.log(`The number is ${i}`)
      break;
    }
  }
}

if (require.main === module)
  main();
