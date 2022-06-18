---
title: "Sieve of Eratosthenes & Finding Primes"
excerpt: "We describe how to find primes up to some number using Sieve of Eratosthenes. Inspired from that, we write a generator-based implementation to find first few primes."
date: "2022-06-15"
---

One of the oldest problems in mathematics is to find prime numbers. There are many methods, such as [generating random primes](https://en.wikipedia.org/wiki/Miller%E2%80%93Rabin_primality_test), finding [really really large ones](https://en.wikipedia.org/wiki/Mersenne_prime), or [giving approximations on how many primes are there](https://en.wikipedia.org/wiki/Prime-counting_function).

A simple and intuitive method to find prime numbers up to a given limit is [Sieve of Eratosthenes](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes), attributed to Eratosthenes of Cyrene back in 3rd century. The algorithm is as follows:

1. We want to find the primes up to some number $n$. We start by making a list of numbers, from 2 to $n$ inclusive.
2. We are currently at the first number, which is 2. Say $p=2$.
3. Mark the remaining numbers in the list that is a multiple of $p$, which is $2p$, $3p$ and so on. Note that $p$ is not marked.
4. Go to the next unmarked number and set that to $p$, then go to step 3. If there are no remaining unmarked numbers, stop.

```typescript
function getPrimes(upToNumber: number): number[] {
  const isPrime = new Array<boolean>(upToNumber + 1)
  isPrime.fill(true) // assume everything is prime
  isPrime[0] = false // 0 is not prime
  isPrime[1] = false // 1 is not prime

  for (let p = 2; p * p <= upToNumber; p++) {
    if (isPrime[p]) {
      // we mark all multiples of n to be not-prime
      for (let x = 2 * p; x <= upToNumber; x += p) isPrime[x] = false
    }
  }

  // map bools to actual numbers by marking primes positive and selecting them
  return isPrime.map((p, i) => (p ? i : -i)).filter((p) => p > 0)
}
```

We only look at primes up to the square root of target number at the loop. To understand why, consider the square root $\sqrt{n}$. Now suppose you found a prime $p$ that is $p > \sqrt{n}$. When it comes to marking it's multiples $2p, 3p, \ldots$ notice that these were all marked before, when you found the primes $2, 3$ and such. The first value that is not marked by any previous prime would be $pp$, which is the square of this prime itself. However, this prime is greater than $\sqrt{n}$, thus $pp$ is definitely greater than our target number; and is beyond our array of numbers. No need to look for that!

## Finding First Primes

The sieve method above gave me the following idea: what if we immediately stored a skipped-over number to be prime as we are marking the sieve? More specifically, we will store an array of primes and composites. We will also have a single variable to store the candidate number. Suppose we begin with the following:

```text
prime: [2]
composite: [2]
candidate: 3
```

We iterate all composites with respect to their primes until all of them are greater than or equal to the candidate number. The next state becomes:

```text
prime: [2]
composite: [4] = [2 + 2]
candidate: 3
```

Then we check if any of the composites are equal to the candidate number. If not, then the candidate number must be a prime because no composite will ever be equal to it from that point on, which like skipping over the number in sieve. Here are more examples:

```text
prime: [2, 3]
composite: [4, 3]
candidate: 3

prime: [2, 3]
composite: [4, 6]
candidate: 4 -> not a prime because there is a composite equal to it

prime: [2, 3]
composite: [6, 6]
candidate: 5 -> is a prime, all composite are greater than it

... and so on
```

For each prime & composite pair, we could use a generate function in TypeScript (for fun). Each generator will hold the prime number itself, and the composite that is the multiple of its prime. On every candidate, they will iterate and **yield** their composite numbers, and once enough amount of primes are reached they will terminate: **returning** the prime number they are responsible of.

```typescript
function getPrimesGen(numPrimes: number): number[] {
  const gens: Generator<number, number, number>[] = []
  let n = 2 // current candidate number
  let eq = false // flag to be set within generator
  let terminate = false // flag to terminate generators

  // generator function
  function* gen(p: number): Generator<number, number, number> {
    let c: number = p // c = composite, p = prime
    while (true) {
      if (c < n) c += p // seeks first p * x >= n
      if (c == n) eq = true // set equal flag for outside
      if (terminate) return p // return the respective prime number p
      else yield c // return the next p * x
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

Generators is a bit overkill for this algorithm and I mostly did it to have fun, you could simply hold an auxilliary array for the composite values. In doing so, the composite value update will be begging to be parallelized! So here below is my C code using OpenMP to parallelize the simpler version without generators:

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
  for (int i = 0; i < P; i++) printf("%d ", primes[i]);
}
```
