// Faça um Programa que peça uma data no formato dd/mm/aaaa e determine se a mesma é uma data válida.

let data = new Date()
let dia, mes, ano
dia = Number(prompt('Digite o dia'))

if(!(dia >= 1 && dia <= 31)){
  alert('Digite um valor entre 1 e 31');
}else{
  mes = Number(prompt('Digite o mês'));
  if(!(mes >= 01 && mes <= 12)){
    alert('Digite um valor entre 1 e 12');
  }else{
    ano = Number(prompt('Digite o ano'));
    if(ano > data.getFullYear()){
      alert(`Digite um valor até ${data.getFullYear()}`);
    }
  }
}