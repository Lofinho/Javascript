// 3. Receber 3 números e informar qual é o maior e o menor

var n1 = prompt('Digite o primeiro número');
var n2 = prompt('Digite o segundo número');
var n3 = prompt('Digite o terceiro número');
if (n1 > n2 && n1 > n3) mensagem = 'O primeiro número informado é o maior';
else if (n2 > n1 && n2 > n3) mensagem = 'O segundo número informado é o maior';
else if (n3 > n1 && n3 > n2) mensagem = 'O terceiro número informado é maior';
else mensagem = 'Os números são iguais ou nada foi informado';
alert(mensagem);
