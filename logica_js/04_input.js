
// Aula 04: INPUT 
let prompt = require ("prompt-sync")()
/*
let nome = prompt("Olá digite o seu nome: ") 
console.log("Seja bem-Vindo (a)" +nome )
*/


let nome_1 = prompt("Olá, digite o seu nome: ") 
let sobrenome = prompt("Digite seu sobrenome: ")
let idade = prompt("Digite sua idade: ")
let nome_completo = nome + "" + sobrenome 
console.log("Seja bem-Vindo (a)" +nome_completo +" você tem " +idade+ "anos XD") 

console.log("\n\n")

let produto_1 = prompt("Digite o nome do produto: ")
let preco_1 = prompt("Digite o  preço de " +produto_1+ "R$")
let produto_2 = prompt ("Digite o nome de outro produto: ")
let preco_2 = prompt("Digite o preço de " +produto_2+ "R$") 
console.log( " ------- Relatório --------")
console.log(" Tênis - R$ 89.90")
console.log(" Bota - R$ 120.00") 
