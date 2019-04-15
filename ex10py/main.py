from math import sqrt, floor
from itertools import takewhile, islice, count


def main():
    N = 2000000
    ps = takewhile(lambda n: n < N, primes())
    print(sum(ps))


def first(seq):
    sliced = islice(seq, 1)
    lis = list(sliced)
    return lis[0]


def primes():
    p = 2
    while True:
        yield p
        p = next_prime(p)


def next_prime(n):
    return first(t for t in count(n + 1) if is_prime(t))


def is_prime(n):
    r = floor(sqrt(n))
    fs = [t for t in range(2, r + 1) if n % t == 0]
    return len(fs) == 0


if __name__ == '__main__':
    main()
