import System.Environment (getArgs)
import Data.List (subsequences)
import qualified Data.Set as Set

{- prime numbers -}
p :: [Integer]
p = 2:3:(f p (tail p))

{- internal function for prime numbers -}
f :: [Integer] -> [Integer] -> [Integer]
f xs ys = r:(f xs (tail ys))
  where
    m = head ys
    pp = (takeWhile (/= m) xs) ++ [m]
    g n = all (/= 0) $ map (mod n) pp
    r = head $ filter g [(m + 1)..]

{- prime factorization -}
pf :: Integer -> [Integer]
pf 1 = []
pf x = a:(pf d)
  where
    a = head $ filter ((== 0) . (mod x)) p
    d = (toInteger $ truncate $ (fromIntegral x) / (fromIntegral a))

{- divisors of x -}
divisors :: Integer -> [Integer]
divisors x = Set.toList $ Set.map product $ Set.fromList $ subsequences $ pf x

main = do
  args <- getArgs
  let n = read $ args !! 0 :: Int
  let t = head $ filter ((> n) . length . divisors) [1..]
  print t
