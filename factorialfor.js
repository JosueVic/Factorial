function Factorial(numero){
    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
        resultado *=i
    }
    return resultado
}
console.log(Factorial(5))



function factor(num){
    let result = 1;
    let i = 1;
    while (i <= num){
        result *= i;
        i++;
    }
    return result
}
console.log(factor(10))


function factorial(num) {
  var result = 1;
  var i = 1;
  while (true) {
    result *= i;
    i++;
    if (i > num) {
      break;
    }
  }
  return result;
}
console.log(factorial(5))
