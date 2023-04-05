/*
# Exercício 01

Parte 1

Bora praticar e rever tudo o que foi ensinado na aula? **💜**
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Parte 2

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.
*/

alert("Favor informe 2 Números")
let n1 = prompt("Inserir o primeiro número")
let n2 = prompt("Inserir o segundo número")

let check = n1 === n2 ? "são Iguais!" : "são Diferentes!"

n1 = Number(n1)
n2 = Number(n2)

const sum = (n1 + n2)

let parImpar = sum % 2 === 0 ? "é Par!" : "é Impar!"

const sub = (n1 - n2)
const mult = (n1 * n2)
const div = (n1 / n2)
const restDiv = (n1 % n2)

alert(`Os dois números ${check}`)
alert(`A soma dos dois números ${sum}`)
alert(`A soma dos dois números ${parImpar}`)
alert(`A subtração dos dois números é ${sub}`)
alert(`A multiplicação dos dois números é ${mult}`)
alert(`A divisão dos dois números é ${div}`)
alert(`O resto da divisão dos dois números é ${restoDiv}`)

/*
if (sum % 2 === 0) {
  alert("O número é Par!")
}else {
  alert("O Número é Impar!")
}

if (n1 == n2) {
  alert("Os Números são Iguais!")
}else {
  alert("Os Números são Diferentes!")
}
*/