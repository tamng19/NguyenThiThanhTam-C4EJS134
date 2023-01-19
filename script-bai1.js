function findPrimeSum() {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  let sum = 0;
  for (var i = num1; i <= num2; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  document.getElementById("result").innerHTML = "The sum of prime numbers between " + num1 + " and " + num2 + " is " + sum;
}

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (var i = 2; i < num/2+1; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  console.log("Number of prime numbers: " + num);
  return true;
}
