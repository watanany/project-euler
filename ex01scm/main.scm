#!/usr/bin/env gosh
; -*- coding: utf-8 -*-

(define-syntax print-answer
  (syntax-rules ()
    ((_) (print #"Answer: ~|answer|"))))

(define (can-divide-evenly? x . ys)
  (any (cut = <> 0)
    (map (cut mod x <>) ys)))

(define (can-divide-evenly-by-3-or-5? x)
  (can-divide-evenly? x 3 5))

(define answer
  (let*
    ([L (iota 999 1)]
     [L2 (filter can-divide-evenly-by-3-or-5? L)])
    (apply + L2)))

(define (main . args)
  (print-answer))
