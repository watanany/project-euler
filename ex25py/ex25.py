# -*- coding: utf-8 -*-
F = { 1: 1, 2: 1 }

def f(n):
    F[n - 1] = F.get(n - 1)
    F[n - 2] = F.get(n - 2)

    if F[n - 1] is None: F[n - 1] = f(n - 1)
    if F[n - 2] is None: F[n - 2] = f(n - 2)

    F[n] = F[n - 1] + F[n - 2]

    return F[n]


def main():
    n = 3

    while True:
        value = f(n)
        if len(str(value)) == 1000:
            print('Output: {}'.format(n))
            break
        n += 1


if __name__ == '__main__':
    main()
