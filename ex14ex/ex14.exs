defmodule Ex14 do
  require Integer

  def f(n) when Integer.is_even(n) do
    trunc n / 2
  end

  def f(n) when Integer.is_odd(n) do
    3 * n + 1
  end

  def g(1) do
    [1]
  end

  def g(n) when is_number(n) do
    [n] ++ g(f(n))
  end

  def main do
    targets = 1..1_000_000

    lens = targets
    |> Stream.map(&g/1)
    |> Stream.map(&length/1)

    Stream.zip(targets, lens)
    |> Enum.max_by(&elem(&1, 1))
    |> elem(0)
    |> IO.puts
  end
end

