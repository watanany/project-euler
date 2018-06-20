module Lib
    ( someFunc
    ) where

import Data.List (nub)

someFunc :: IO ()
someFunc = do
  let domain = [1..999]
  let threeMultiples = [x | x <- domain, x `mod` 3 == 0]
  let fiveMultiples = [x | x <- domain, x `mod` 5 == 0]
  let multiples = nub $ threeMultiples ++ fiveMultiples
  print $ sum multiples
