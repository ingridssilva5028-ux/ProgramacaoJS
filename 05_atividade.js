// Atividade proposta 
let prompt = require ("prompt-sync")() // importar 

console.log("------ CADASTRO DE PREÇO - CONRADITO DOGUEZITO -------")
let produto1 = parseFloat(prompt("Digite o preço do Pão: R$"))
let produto2 =  parseFloat(prompt("Digite o preço do Salsicha: "))
let produto3 =  parseFloat(prompt("Digite o preço do Purê de batata: "))
let produto4 =  parseFloat(prompt("Digite o preço do Queijo: "))
let produto5 =  parseFloat(prompt("Digite o preço do Bacon: ")) 


let porcentagem = parseFloat(prompt("Digite a porcentagem de lucro do produto:"))
let porcentagem_visual = porcentagem 
porcentagem = porcentagem / 100

let total_1 = produto1 * porcentagem
let total_2 = produto2 * porcentagem
let total_3 = produto3 * porcentagem
let total_4 = produto4 * porcentagem
let total_5 = produto5 * porcentagem


let produto1_final = produto1 + total_1
console.log("Valor final do ingrediente: R$" + produto1_final)

let produto2_final = produto2 + total_2
console.log("Valor final do ingrediente: R$" + produto2_final)

let produto3_final = produto3 + total_3
console.log("Valor final do ingrediente: R$" + produto3_final)

let produto4_final = produto4 + total_4
console.log("Valor final do ingrediente: R$" + produto4_final)

let produto5_final = produto5 + total_5
console.log("Valor final do ingrediente: R$" + produto5_final)

// --------------------------------------------------------------------------

console.log("\n------- CARDÁPIO CONRADITO DOGUEZITO --------\n")
console.log("------ CACHORRO-QUENTE COM PURÊ ------")
console.log("Ingredientes:")
console.log("Pão")
console.log("1 purê de batata")
console.log("1 bacon")
console.log("1 salsicha")

let preco_custo_1 = produto1 + produto2 + produto3 + produto5
console.log("\nPreço de custo: R$" + preco_custo_1)

let preco_venda_1 = (produto1_final + produto2_final + produto3_final + produto5_final)
console.log("Preço de venda: R$" + preco_venda_1)






console.log("Porcentagem de lucro: " + porcentagem_visual)


// let preco_custo1 = parseFloat(prompt("Preço de custo:" ))
// let preco_venda1 = parseFloat(prompt("Preço de venda:" ))

// console.log("------ CACHORRO-QUENTE CREMOSO -------")
// console.log("Ingredientes:" )
// let uten1 = parseFloat(prompt("Pão "))
// let uten2 = parseFloat(prompt("2 salsichas "))
// let uten3 = parseFloat(prompt("1 queijo "))
// let preco_custo2 = parseFloat(prompt("Preço de custo:" ))
// let preco_venda2 = parseFloat(prompt("Preço de venda:" ))

// console.log("------ CACHORRO-QUENTE ESPECIAL -----")
// console.log("Ingredientes:" )
// let log1 = parseFloat(prompt("Pão "))
// let log2 = parseFloat(prompt("1 salsicha "))
// let log3 = parseFloat(prompt("1 purê de batata  "))
// let log4 = parseFloat(prompt("1 queijo"))
// let log5 = parseFloat(prompt("1 bacon")) 
// let preco_custo3 = parseFloat(prompt("Preço de custo:" ))
// let preco_venda3 = parseFloat(prompt("Preço de venda:" ))

// console.log("------ COMBO --------") 
// let con1 = parseFloat(prompt("1 CACHORRO-QUENTE COM PURÊ "))
// let con2 = parseFloat(prompt("1 CACHORRO - QUENTE CREMOSO "))
// let con3 = parseFloat(prompt("1 CACHORRO - QUENTE ESPECIAL "))
// let preco_custo4 = parseFloat(prompt("Preço de custo:" ))
// let preco_venda4 = parseFloat(prompt("Preço de venda:" )) 

// let valor1 = parseFloat(prompt(""))
// let valor2 = parseFloat(prompt("")) 
// let valor3 = parseFloat(prompt("")) 
// let valor4 = parseFloat(prompt("")) 