module Lib
    ( someFunc
    ) where

someFunc :: IO ()
someFunc = print $ sum ps
  where
    n = 2000000
    ps = takeWhile (< n) primes

primes :: [Int]
primes = primes' 2

{- This function isn't optimized for tail call. -}
primes' :: Int -> [Int]
primes' n = p:(primes' $ p + 1)
  where
    p = nextPrime n

nextPrime :: Int -> Int
nextPrime n = head [t | t <- [n..], isPrime(t)]

isPrime :: Int -> Bool
isPrime n = (length fs) == 0
  where
    r = floor $ sqrt $ fromIntegral n :: Int
    fs = [t | t <- [2..r], n `mod` t == 0]
