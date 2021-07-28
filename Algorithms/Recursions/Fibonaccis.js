const fib = (n) => {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
};

const fibOptimized = (n, hash = {}) => {
  if (n in hash) return hash[n];
  if (n <= 2) return 1;
  hash[n] = fibOptimized(n - 1, hash) + fibOptimized(n - 2, hash);
  return hash[n];
};

console.log(fib(60));
console.log(fibOptimized(12));

