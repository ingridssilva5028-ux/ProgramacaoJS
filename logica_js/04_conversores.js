// Aula 04: Converter variáveis 
let prompt = require ("prompt-sync")()
 /*
let numero1 = prompt ("Digite um número: ")
let numero2 = prompt (" Digite outro número: ")
let soma = numero1 + numero2 
console.log ("O resultado é " +soma) 
*/

/*
 let numero1 = prompt("Digite um número: ")
 numero1 = parseInt( numero1)

 let numero2 = parseInt( prompt(" Digite outro número: "))

 let soma = numer1 + numero2 
 console.log("O resultado é :" +soma ) 
*/
 // ------------- 
 //Atividade 1
 let ano_nascimento = number(prompt("Digite o ano que você nasceu:")) 
 let ano_atual = new date (). getfullyear(); 
 let idade = ano_atual
 console.log (" O ano que nasci" + ano_nascimento + " e a minha idade atual " + ano_atual )

// Atividade 2 
let nota1 = parseFloat(prompt ("Digite a primeira nota:"))
let nota2 = parseFloat(prompt ("Digite a segunda nota:")) 
let nota3 = parseFloat(prompt ("Digite a terceira nota:"))
let media = (nota1 + nota2 +nota3) /3 

// Atividade 3 
let produto = prompt("digite o nome do produto ")
let preco = prompt("Digite o preco de " +produto)
preco = parseFloat(preco)
let quantidade = (prompt) ("Digite a quantidade do produto")
quantidade = parseFloat(quantidade) 