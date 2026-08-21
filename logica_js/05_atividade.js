// Atividade proposta 
let prompt = require ("prompt-sync")() // importar 

console.log("------ CADASTRO DE PREÇO - CONRADITO DOGUEZITO -------")
let pao = parseFloat(prompt("Digite o preço de Pão: R$"))
let salsicha =  parseFloat(prompt("Digite o preço de Salsicha: R$"))
let pure_batata =  parseFloat(prompt("Digite o preço de Purê de batata: R$"))
let queijo =  parseFloat(prompt("Digite o preço de Queijo: R$"))
let bacon =  parseFloat(prompt("Digite o preço de Bacon: R$")) 
console.log("")

let porcentagem = parseFloat(prompt("Digite a porcentagem de lucro do produto: "))
console.log("")

let porcentagem_visual = porcentagem 
porcentagem = porcentagem / 100

let total_1 = pao * porcentagem
let total_2 = salsicha * porcentagem
let total_3 = pure_batata * porcentagem
let total_4 = queijo * porcentagem
let total_5 = bacon * porcentagem


let pao_lucro = pao + total_1
console.log("Valor final de pão: R$" + pao_lucro)

let salsicha_lucro = salsicha + total_2
console.log("Valor final de salsicha: R$" + salsicha_lucro)

let pure_batata_lucro = pure_batata + total_3
console.log("Valor final de purê de batata: R$" + pure_batata_lucro)

let queijo_lucro = queijo + total_4
console.log("Valor final de queijo: R$" + queijo_lucro)

let bacon_lucro = bacon + total_5
console.log("Valor final de bacon: R$" + bacon_lucro)

console.log("--------------------------------------------------------------------------")

console.log("\n------- CARDÁPIO CONRADITO DOGUEZITO --------\n")
console.log("------ CACHORRO-QUENTE COM PURÊ ------")
console.log("Ingredientes:")
console.log("Pão")
console.log("1 purê de batata")
console.log("1 bacon")
console.log("1 salsicha")

let preco_custo_1 = pao + pure_batata + bacon + salsicha  
console.log("\nPreço de custo: R$" + preco_custo_1)

let preco_venda_1 = (pao_lucro + salsicha_lucro + pure_batata_lucro + bacon_lucro)
console.log("Preço de venda: R$" + preco_venda_1)




console.log("\n\n------ CACHORRO-QUENTE CREMOSO -------")
console.log("Ingredientes:" )
console.log("Pão")
console.log("2 salsichas")
console.log("1 queijo")

let preco_custo_2 = pao + (salsicha * 2) + queijo 
console.log("\nPreço de custo: R$" + preco_custo_2)

let preco_venda_2 = (pao_lucro + (salsicha_lucro * 2) + queijo_lucro ) 
console.log("Preço de venda: R$" + preco_venda_2)


console.log("\n\n------ CACHORRO-QUENTE ESPECIAL -----")
console.log("Ingredientes:" )
console.log("Pão")
console.log("1 salsicha")
console.log("1 purê de batata")
console.log("1 queijo")
console.log("1 bacon")

let preco_custo_3 = pao + salsicha + pure_batata + queijo + bacon
console.log("\nPreço de custo: R$" + preco_custo_3)

let preco_venda_3 = (pao_lucro + salsicha_lucro + pure_batata_lucro + queijo_lucro + bacon_lucro)
console.log("Preço de venda: R$" + preco_venda_3)


 
console.log("\n\n------ COMBO --------") 
console.log("1 CACHORRO-QUENTE COM PURÊ")
console.log("1 CACHORRO - QUENTE CREMOSO")
console.log("1 CACHORRO - QUENTE ESPECIAL")

let preco_custo_combo = preco_custo_1 + preco_custo_2 + preco_custo_3;
console.log("\nPreço de custo do combo: R$" + preco_custo_combo) 

let preco_venda_combo = preco_custo_combo + ( preco_custo_combo * porcentagem)
console.log("Preço de venda do combo R$" + preco_venda_combo  ) 
 
console.log("\nPorcentagem de lucro: " + porcentagem_visual + "%.")

