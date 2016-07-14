import Data.List
import Data.Natural

properDivisors :: Natural -> [Natural]
properDivisors n = filter (\x -> mod n x == 0) [1..(truncate $ (fromIntegral n :: Double) / 2)]

isAbundant :: Natural -> Bool
isAbundant n = n < (sum $ properDivisors n)

abundantNumbers :: [Natural]
abundantNumbers = filter isAbundant $ [1..]

isSumOfTwoAbundant :: Natural -> Bool
isSumOfTwoAbundant n = isSumOfTwoAbundant_ n (head abundantNumbers)

isSumOfTwoAbundant_ :: Natural -> Natural -> Bool
isSumOfTwoAbundant_ n x
  | x < n =
    let
      ys = takeWhile (\y -> x + y <= n) $ dropWhile (x >) abundantNumbers
    in
      if (find (\y -> x + y == n) ys) /= Nothing then
        True
      else
        if length ys >= 2 then
          isSumOfTwoAbundant_ n (ys !! 1)
        else
          False
  | otherwise =
    False

main = do
  print $ sum $ filter (not . isSumOfTwoAbundant) [1..28123]
