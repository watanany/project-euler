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

def main():
    domain = range(1, 1001)

    words = (word(d) for d in domain)

    trimed_words = (w.replace(' ', '').replace('-', '') for w in words)
    total_length = sum(len(w) for w in trimed_words)

    print(total_length)


def word(n):
    "convert `n` to English numerals"
    return compose(n, full(*partial(n)))



def partial(n, numbers=[], words=[]):
    "convert `n` to partial numbers and partial words"
    digits = digit(n)
    w = D.get(n)
    h = 10 ** (digits - 1)
    i = n // h * h

    if w is not None:
        return (tuple(numbers[::-1]), tuple(([w] + words)[::-1]))
    elif digits == 1:
        return (tuple(numbers[::-1]), tuple(words[::-1]))
    else:
        if D.get(i) is not None:
            return partial(n % h, numbers, [D.get(i)] + words)
        else:
            return partial(n % h, [i] + numbers, words)


def full(numbers, words, acc=[]):
    """\
    convert partial numbers and partial words to full words.
    numbers must contain only 3-4 digits number.
    """
    if len(numbers) == 0:
        return tuple(acc[::-1]) + words
    else:
        s = str(numbers[0])
        w = '{}-{}'.format(D[int(s[0])],
                           E[len(s)])
        return full(numbers[1:], words, [w] + acc)

def compose(d, words):
    "insert 'and' to propery position"
    digits = digit(d)

    if digits < 3:
        return join(words)
    elif digits == 3 or digits == 4:
        if len(words) >= 2:
            return '{} and {}'.format(words[0],
                                      join(words[1:]))
        else:
            return join(words)

def join(words):
    "join word list with one space"
    return ' '.join(words)

def digit(n):
    "number of digits"
    return len(str(n))


if __name__ == '__main__':
    main()
