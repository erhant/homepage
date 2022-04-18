---
title: "Euclid's Proof & Generating Primes"
excerpt: "In this post, we look at Euclid's proof on the infinitude of primes. We then implement the method in this proof iteratively to generate primes."
date: "2022-04-14"
---

# The Proof

One of the oldest proofs in the book ([literally](https://en.wikipedia.org/wiki/Proofs_from_THE_BOOK)) is Euclid's proof that there are infinitely many primes. It is done via proof by contradiction.

1. Assume that the set of primes $P$ is finite: $P = \{p_1, p_2, ..., p_k\}$.
2. Calculate a new integer $n = p_1 \times p_2 \times \ldots \times p_k + 1$.
3. We can then argue that there exists a smallest factor $q$ such that $1 < q \leq n$. If $q$ were to divide any of the primes in $P$, it would have to divide $1$ too. Since this is not possible, $q$ must be prime.

## Euclid-Mullin Sequence

If we start with a finite set $P = {2}$, and iteratively find the smallest factor of the number that is the product of our primes plus one, we get $3, 7, 43, 13, 53, 5, 6221671, 38709183810571, 139, \ldots$. This is called the [Euclid-Mullin Sequence](https://en.wikipedia.org/wiki/Euclid%E2%80%93Mullin_sequence) (see [OEIS A000945](https://oeis.org/A000945)). A very intriguing question we might ask here: can we get every prime via this method?

This happens to be extremely difficult to prove, and no one knows the answer. However, a probabilistic argument states that indeed we are almost certainly getting every prime within this sequence:

- Take a prime $q$. What is the probability that our generated $n$ is divisible by $q$?
- It is $1/q$. To understand why, pick $q=2$: you are essentially asking what is the probability that $n$ is even. More precisely, in every $q$ integers, 1 of them is divisible by $q$.
- The probability that $q$ does not divide $n$ is $1-1/q$.
- Since we are doing this iteratively, we can ask: what is the probability that $q$ does not divide any of the numbers seen until step $t$? That would be:
  $$
  (1 - 1/q)^t
  $$

If you take a large $t$, this approaches 0; meaning that eventually there will be a number that is divisible by $q$. This is not a proof though, it is just an argument! We have no idea how to prove this for all primes. If you would like to compute this sequence yourself, here is my Python implementation:

```python
def euclid(cnt: int) -> List[int]:
  # product of elements in a list
  def prod(list: List[int]) -> int:
    ans = list[0]
    for i in range(1,len(list)):
      ans *= list[i]
    return ans

  def find_smallest_prime_factor(n: int) -> int:
    # start from 3; we dont care about 2 here, because n is always odd
    i = 3
    # increment by 2 every step until you reach sqrt(n)
    while i * i <= n:
      # if i divides n, return that as the smallest prime factor
      if (n % i == 0):
        return i
      i += 2

    # otherwise, n itself is a prime
    return n

  # initial prime set is just [2]
  primes: List[int] = [2]
  while (len(primes) < cnt):
    # generate the new number. note that this number is always odd
    n: int = prod(primes) + 1
    # find the smallest prime factor of this number
    q: int = find_smallest_prime_factor(n)
    # add it to the list of primes
    primes.append(q)

  return primes

print("Primes:",euclid(10))
```
