/*
VÁRIAVEIS

* Podem começar com letra, $ ou _
* Não podem começar com números
* É possível usar letras ou números
* É possível usar acentos e símbolos
* Não podem conter espaços
* Não podem ser palavras reservadas
*/

/*
DATA TYPES

Number
    Infinity
    NaN
String
Boolean
Null
Undefined
Object
    Array
Function
*/

// window.alert("Minha primeira mensagem")
// window.confirm("Está gostando do JS?")
// window.prompt("Qual é o seu nome ?")

/* var nome = window.prompt("Qual o seu nome ?")
window.alert("É um grande prazer em te conhecer, " + nome + "!")
*/

/*
var n1 = Number(window.prompt("Digite o primeiro número: "))// String
var n2 = Number(window.prompt("Digite o segundo número: "))// String
var soma = n1 + n2

window.alert('A soma dos valores é: ' + String(soma)) // Concatenação
ou
window.alert(`A soma entre ${n1} e ${n2} é igual a ${soma}`)
(number + number) para adição
(string + string) para concatenação
*/

/*
Converter de número para string
String(n)
n.toString()
*/

// Formatando Strings

/*
var s = 'JavaScript'

'Eu estou aprendendo s'         // Não faz interpolação
'Eu estou aprendendo' + s       // Usa concatenação
`Eu estou aprendendo ${s}`      // Usa template string


var s = 'JavaScript'

s.length                        // Quantos cracteres a string tem
s.toUpperCase()                 // Tudo para 'MAIÚSCULAS
s.toLowerCase()                 // Tudo para 'minúsculas'
*/

// AULA 6

/*
var nome = window.prompt('Qual é o seu nome ?')

document.write(`Olá, ${nome}! Seu nome tem ${nome.length} letras.<br/>`)
document.write(`Seu nome em maiúsculas é ${nome.toLocaleUpperCase()}<br/>`)
document.write(`Seu nome em minústulos é ${nome.toLocaleLowerCase()}`)
*/

// AULA 7

/*
OPERDORES ARITMÉTICOS

+   SOMAR
-   DIMINUIR
*   MULTIPLICAR
/   DIVIDIR
%   RESTO DE UMA DIVISÃO
**  POTÊNCIAÇÃO

SIMPLIFICANDO OPERAÇÕES

Ex:
var n = 3

n = n + 4       pode ser também         n += 4
isso se aplica a qualquer outro operador

INCREMENTO DE OPERAÇÕES

Exemplos:
var n = 5

n = n + 1       pode ser também         n ++
Isso se aplica também a qualquer outro operador
*/

/*
OPERADORES RELACIONAIS

>   MAIOR
<   MENOR
>=  MAIOR IGUAL
<=  MENOR IGUAL
==  IGUAL
!=  DIFERENTE
=== IDENTICO


Exemplos:

preço >= 200.50                     O preço é maior ou igual a 200.50 ?
idade < 18                          A idade é menor do que 18 ?
curso == 'JavaScript'               O curso é JavaScript ?
n1 != n2                            O primeiro número é diferente do segundo ?
*/

/*
OPERADORES LÓGICOS

!   NEGAÇÃO     1°
&&  CONJUNÇÃO   2°
||  DISJUNÇÃO   3°

Exemplos:

idade >= 15 && idade <= 17          A idade está entre 15 e 17 ?
estado == 'RJ' || estado == 'SP'    O estado é RJ ou SP ?
salário > 1500 && sexo != 'M'       O salário é acima de 1500 e não é homem ?
*/

/*
OPERADORES TERNÁRIOS

?
:

teste ? true : false

Exemplo:

var media = 5.5

media >= 7 ? "Aprovado" : "Reprovado"
*/

/*
Aula 9      INTRODUÇÃO AO DOM(Document Object Module)

Por Marca       getElementsByTagName()
Por ID          getElementsById()
Por Nome        getElementsByName()
Por Classe      getElementsByClassName()
Por Seletor     querySelector()     ou      querySelectorAll()
*/

/*
Aula 11     Condições

if == true
else == false
*/

/*
Aula 12 Condição Múltipla

switch (expressão){
    case valor 1:
        CÓDIGOS AQUI
        break

    case valor 2:
        CÓDIGOS AQUI
        break

    case valor 3:
        CÓDIGOS AQUI
        break

    defalt:
        CÓDIGOS AQUI
        breacondicoes_aula12-1k
}
*/

/*
Aula 13 Laços de repetição

while(condição){
    TESTE DA CONDIÇÃO
}

OUTRA FORMA DE LAÇO

do{
    console.log(`Passo ${c}`)
    c++
}(while c <= 6)

OUTRA FORMA DE LAÇO

var c = 1
while(c < = 10){

    c++
}

É A MESMA COISA QUE

for (var c = 1; c <= 10; c++){

}

for(Inicialização; Teste Lógico; Incremento)

*/

/*
Aula 15 Arrays

let num = [5, 8, 4]     ---> Exemplo de array(Coleção)
num[3] = 6              ---> Adicionando novo array manualmente
num.push(7)             ---> Adicionando novo array automático
num.length              ---> Mostra o tamanho do array
num.sort()              ---> Coloca os elementos em ordem crescente
num.indexOf(8)          ---> Pesquisa o valor indicado e informa a posição (TRUE)
num.indexOf(3)          ---> Pesquisa o valor indicado e informa -1 (FALSE)

Laço de repetição para arrays

for(let pos in num){
    console.log(num[pos])
}

Para cada posição(pos) dentro(in) da variável composta(num) mostre (num[pos])
*/

/*
Aula 16 Funções

Toda função tem os seguintes fatores
- Uma Chamada
- Um Conjunto de Parâmetros
- Uma Ação
- Um Retorno


Funções são ações executadas assim que são chamadas ou em decorrência de algum evento.

Uma função pode receber parâmetros e retornar um resultado.
*/