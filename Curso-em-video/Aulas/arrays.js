let valores = [8, 5, 2, 4, 7, 1, 3, 9]
valores.sort()

console.log(valores)
console.log(`O vetor tem ${valores.length} posições`)
console.log(`O primeiro valor do vetor é ${valores[0]}`)
let pos = valores.indexOf(4)
if(pos == -1){
  console.log('O valor não foi encontrado!')
}else{
  console.log(`O valor está na posição ${pos}`)
}


/*
for(let pos in valores) {
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

*/

/*
for(let pos = 0; pos < valores.length; pos++){
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/