let primeiroNumero, segundoNumero, resposta = false;

do{
  primeiroNumero = Number(prompt('Digite o primeiro número'));
  segundoNumero = Number(prompt('Digite o segundo número'));

  let soma = primeiroNumero + segundoNumero;
  let subtracao = primeiroNumero - segundoNumero;
  let multiplicacao = primeiroNumero * segundoNumero;
  let divisao = segundoNumero === 0 ? 0 : primeiroNumero / segundoNumero;
  let restoDivisao = segundoNumero === 0 ? 0 : primeiroNumero % segundoNumero;
  let ehPar = soma % 2 === 0;
  let saoIguais = primeiroNumero === segundoNumero;

  alert(`A soma dos dois números é: ${soma}. \nA subtração dos dois números é: ${subtracao}. \nA multiplicação dos dois números é: ${multiplicacao}. \nA divisão dos dois números é: ${divisao.toFixed(2)}. \nO resto da divisão dos dois números é: ${restoDivisao}.
  \nA soma dos dois números ${ehPar ? 'é par' : 'não é par'} e os dois números ${saoIguais ? 'são iguais.' : 'não são iguais.'}`);

  resposta = confirm('Deseja continuar?');
} while(resposta);