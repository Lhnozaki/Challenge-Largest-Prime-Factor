exports.largestPrimeFactor = function(n) {
  let primeNumber = 0;
  // do your work here

  if (n % 2 === 0) {
    n = n / 2;
    primeNumber = n;
  } else {
    for (i = 3; i <= Math.sqrt(n); i++) {
      while (n % i === 0) {
        n = n / i;
        primeNumber = n;
      }
    }
  }
  return primeNumber;
};
