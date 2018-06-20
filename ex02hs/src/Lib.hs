module Lib
    ( someFunc
    ) where

{-----------------------------------------------------------------------
- someFunc :: IO ()
- someFunc = do
-   print $ sum $ filter even $ takeWhile (< 4000000) $ map fibonacci [1..]
-
- fibonacci :: Int -> Int
- fibonacci n = fibonacci' n
-   where
-     fibonacci' 1 = 1
-     fibonacci' 2 = 2
-     fibonacci' n = fibonacci' (n - 2) + fibonacci' (n - 1)
-----------------------------------------------------------------------}

someFunc :: IO ()
someFunc = print value
  where
    domain = fibonacci (< 4000000)
    value = sum [x | x <- domain, even x]

fibonacci :: (Int -> Bool) -> [Int]
fibonacci f = fibonacci' f [2, 1]
  where
    fibonacci' f acc@(x:y:xs) =
      case not (f x) of
        True -> reverse acc
        False -> fibonacci' f ((x + y):acc)
