// 4. Verificar se o usuário é menor de idade

var idade = parseInt(prompt('Qual a sua idade ?'));
if (!idade.isNaN) mensagem = 'O número informado não é válido!';
else if (idade < 18) mensagem = 'Você ainda é menor de idade!';
else mensagem = 'Se não estiver mentindo é maior de idade!';
