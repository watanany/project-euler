#!/usr/bin/env python
# -*- coding: utf-8 -*-

D = {
    1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine',
    10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen',
    20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety',
}

E = {
    3: 'hundred',
    4: 'thousand',
}


def word(n):
    "convert `n` to English numerals"
    return _compose(*_full(*_partial(n)))


def _partial(n, _n=None, numbers=[], words=[]):
    "convert `n` to _partial numbers and _partial words"
    if _n is None: _n = n

    digits = _digit(_n)
    h = 10 ** (digits - 1)
    i = _n // h * h

    if D.get(_n) is not None:
        return [n, numbers[::-1], ([D.get(_n)] + words)[::-1]]
    elif digits == 1:
        return [n, numbers[::-1], words[::-1]]
    elif D.get(i) is not None:
        return _partial(n, _n % h, numbers, [D.get(i)] + words)
    else:
        return _partial(n, _n % h, [i] + numbers, words)

def _full(n, numbers, words, acc=[]):
    "convert partial numbers and partial words to full words"
    if len(numbers) == 0:
        return [n, acc[::-1] + words]
    else:
        s = str(numbers[0])
        w = '{}-{}'.format(D[int(s[0])], E[len(s)])

        return _full(n, numbers[1:], words, [w] + acc)

def _compose(n, words):
    "insert 'and' to propery position"
    digits = _digit(n)

    if len(words) >= 3 and n % 10 != 0:
        return '{} and {}-{}'.format(_join(words[:-2]), words[-2], words[-1])
    elif digits >= 3 and len(words) >= 2:
        return '{} and {}'.format(words[0], _join(words[1:]))
    elif digits == 2 and len(words) == 2 and n % 10 != 0:
        return '{}-{}'.format(*words)
    else:
        return _join(words)


def _join(words):
    "join word list with one space"
    return ' '.join(words)

def _digit(n):
    "number of digits"
    return len(str(n))



def _main():
    domain = range(1, 1001)

    words = (word(d) for d in domain)

    trimed_words = (w.replace(' ', '').replace('-', '') for w in words)

    total_length = sum(len(w) for w in trimed_words)

    # DEBUG
    print('=' * 80)
    for t in (_partial(d) for d in domain): print(t)
    print('=' * 80)
    for t in (_full(*_partial(d)) for d in domain): print(t)
    print('=' * 80)
    for t in (_compose(*_full(*_partial(d))) for d in domain): print(t)
    print('=' * 80)

    print(total_length)


if __name__ == '__main__':
    _main()
