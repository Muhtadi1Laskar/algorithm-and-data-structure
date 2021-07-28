const factIteration = (n) => {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
};

const factRecursion = (n) => {
  if (n <= 1) return 1;
  return n * factRecursion(n - 1);
};

console.log(factIteration(1000));
console.log(factRecursion(1000));
