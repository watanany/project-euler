#!/usr/bin/gosh
; -*- coding: utf-8 -*-
(import (scheme base)
        (only (scheme list) filter)
        (only (scheme inexact) sqrt)
        (only (scheme write) display)
        (only (gauche base) lrange print))


(define (primes pred)
  (define (do-primes pred p acc)
    (if (not (pred p))
        (reverse acc)
        (do-primes pred (next-prime-number p) (cons p acc))))
  (do-primes pred 2 (list)))


(define (next-prime-number n)
  (let ([nn (+ n 1)])
    (if (prime-number? nn) nn (next-prime-number nn))))


(define (prime-number? n)
  (let* ([r (floor (sqrt n))]
         [fs (filter
               (lambda (t) (zero? (modulo n t)))
               (lrange 2 (+ r 1)))])
    (zero? (length fs))))


#;
(define (range start stop step)
  (define (do-range start stop step acc)
    (if (> start stop)
        (reverse acc)
        (do-range (+ start step) stop step (cons start acc))))
  (do-range start stop step (list)))


(define N 2000000)
(print
  (apply + (primes (lambda (n) (< n N)))))
