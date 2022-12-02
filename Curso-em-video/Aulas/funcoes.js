/*
function parimpar(number) {
    if (number % 2 == 0) {
        return 'Par!';
    } else {
        return 'Ímpar!';
    }
}


let res = parimpar(5)
console.log(res)

// OU

console.log(parimpar(5))
*/

// OUTRO EXEMPLO DE FUNÇÃO

/*
function soma(n1 = 0, n2 = 0) {
  return n1 + n2
}

console.log(soma (7))
*/

// OUTRA SINTAXE

/*
let v = function(x){
  return x**2
}
console.log(v(5))
*/

// FATORIAL DE UM NÚMERO

/*
function fatorial(n){
  let fat = 1
  for(let contador = n; contador > 1; contador--){
    fat *= c
  }
  return fat
}

console.log(fatorial(5))
*/

// FATORIAL RECURSIVO

function fatorial(n){
  if (n == 1){
    return 1
  }else {
    return n * fatorial(n-1)
  }
}

console.log(fatorial(5))