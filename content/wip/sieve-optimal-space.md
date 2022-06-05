---
title: "Sieve of Eratosthenes & Finding First N Primes"
excerpt: "We describe how to find primes up to some number x using Sieve of Eratosthenes. Inspired from that, we write a generator-based implementation to find first x primes."
date: "2022-05-29"
---

One of the oldest problems in mathematics is to find the prime numbers. There are many methods, such as [generating random primes](https://en.wikipedia.org/wiki/Miller%E2%80%93Rabin_primality_test), finding [really really large ones](https://en.wikipedia.org/wiki/Mersenne_prime), or [giving approximations on how many primes are there](https://en.wikipedia.org/wiki/Prime-counting_function).

A simple and intuitive method to find prime numbers up to a given limit was [Sieve of Eratosthenes](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes), attributed to Eratosthenes of Cyrene back in 3rd century. The algorithm is as follows:

1. We want to find the primes up to some number $n$. We start by making a list of numbers, from 2 to $n$ inclusive.
2. We are currently at the first number, which is 2. Say $p=2$.
3. Mark the remaining numbers in the list that is a multiple of $p$, which is $2p$, $3p$ and so on. Note that $p$ is not marked.
4. Go to the next unmarked number and set that to $p$, then go to step 3. If there are no remaining unmarked numbers, stop.

```typescript
function getPrimes(upToNumber: number): number: number[] {
  const isPrime = new Array<boolean>(upToNumber+1);
  isPrime.fill(true); // assume everything is prime
  isPrime[0] = false; // 0 is not prime
  isPrime[1] = false; // 1 is not prime

  const primes: number[] = []; // list of primes

  for (let n = 1; n <= upToNumber; n++) {
    if (isPrime[n]) {
      // n is a prime, we save it
      primes.push(n)
      // we mark all multiples of n to be not-prime
      for (let x = 2*n; x <= upToNumber; x += n)
        isPrime[x] = false;
    }
  }

  return primes;
}
```

There are quite a lot of optimizations we can do here, such as

## Finding First $x$ Primes

```typescript
function getPrimesGen(numPrimes: number): number[] {
  const gens: Generator<number, number, number>[] = []
  let n = 2 // current candidate number
  let eq = false // flag to be set within generator
  let terminate = false // flag to terminate generators

  // generator function
  function* gen(p: number): Generator<number, number, number> {
    let k: number = p
    while (true) {
      if (k < n) k += p // seeks first p*x >= n
      if (k == n) eq = true // set equal flag for outside
      if (terminate) return p // return the respective prime number p
      else yield k // return the next p*x
    }
  }

  while (gens.length < numPrimes) {
    gens.forEach((g) => g.next()) // iterate all numbers to their next multiple
    if (!eq) gens.push(gen(n)) // if none of them are equal to n, n must be a prime
    eq = false // reset for next iteration
    n++ // get the next number
  }

  // set this flag to terminate generators
  terminate = true

  return gens.map((g) => g.next().value)
}
```

Note that generators is a bit overkill for this algorithm, you could simply hold an auxilliary array for the composite values as below:

```typescript
function getPrimesNoGen(numPrimes: number): number[] {
  const primes: number[] = Array<number>(numPrimes) // holds the prime itself
  const composites: number[] = Array<number>(numPrimes) // holds the latest composite for a prime

  let n = 2 // current number
  let eq // flag
  let p = 0 // number of primes so far
  while (p < numPrimes) {
    eq = false // reset flag

    for (let i = 0; i < p; i++) {
      if (composites[i] < n) composites[i] += primes[i]
      if (composites[i] === n) eq = true
    }

    if (!eq) {
      primes[p] = n
      composites[p] = n
      p++
    }
    n++
  }

  return primes
}
```

The composite value update is begging to be parallelized, therefore I will include my C implementation using OpenMP directives for that:

```cpp
#include <stdio.h>
#include <stdbool.h>

#define P 100

int main() {
  unsigned int p = 0;
  unsigned int primes[P] = {0};
  unsigned int composites[P] = {0};
  bool eq;

  for (unsigned int n = 2; p < P; n++) {
    eq = false; // reset flag

    #pragma omp parallel for
    for (unsigned int i = 0; i < p; i++) {
      unsigned int tmp = composites[i]; // read to reduce memory access
      if (tmp < n)
        tmp += primes[i];
      if (tmp == n)
        eq = true;
      composites[i] = tmp; // write back
    }

    if (!eq) {
      primes[p] = n;
      composites[p] = n;
      p++;
    }

  }

  // done, you can print primes
  for (int i = 0; i < P; i++)
    printf("%d ", primes[i]);

}
```
