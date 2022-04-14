---
title: "Euclid's Proof on Infinitude of Primes"
excerpt: "In this post, I talk about Euclid's Proof on the infinitude of primes."
date: "2022-04-11"
---

# Euclids Proof

One of the oldest proofs in the book ([literally](https://en.wikipedia.org/wiki/Proofs_from_THE_BOOK)) is Euclid's proof that there are infinitely many primes. The proof is via contradiction. We first assume that the set of primes $P$ is finite: $P = \{p_1, p_2, ..., p_k\}$. We then calculate a new integer $n = p_1 \times p_2 \times \ldots \times p_k + 1$.

We can then argue that there exists $q$ such that $1 < q \leq n$. If $q$ were to divide any of the primes in $P$, it would have to divide $1$ too. Since this is not possible, $q$ must be prime.

## Iteratively adding primes

If we start with a finite set $P = {2}$, and iteratively do this process, we get $3, 7, 43, 13, \ldots$. A cool question we might ask here is that: can we get every prime like this?

The answer: it is VERY hard to prove this and we do not know, but we are ALMOST CERTAIN that the answer is YES. How can this be possible? Well, we can propose a probabilistic argument.

Suppose we take a prime $q$. What is the probability that our generated $n$ is divisible by $q$? It is $1/q$. This might seem complicated at first glance, but it is actually very straightforward. If you pick $q=2$, you are essentially asking what is the probability that $n$ is even. More precisely, in every $q$ integers, 1 of them is divisible by $q$.

So the probability that $q$ does not divide $n$ is $(1-1/q)$. Since we are doing this iteratively, we can ask: what is the probability that $q$ does not divide any of the numbers seen until step $t$? That would be $(1 - 1/q)^t$.

If you take a large $t$, this approaches 0; meaning that eventually there will be a number that is divisible by $q$, and at that point $q$ will be added to our set of primes.

This is not a proof though, it is just an argument! We have no idea how to prove this for all primes.

_code will be added later_
