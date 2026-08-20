// Aula 06: Práticas com condições 
let prompt = require ("prompt-sync")()

let preco_sao_paulo = 125.00
let preco_Araraquara = 68.90
let preco_seguro = 42.50 

let total = 0

console.log("Escolha o seu destino: " )
console.log("1 - São paulo por R$ 125 " +preco_sao_paulo) 
console.log("2 - Araraquara por R$ 68 " +preco_Araraquara)
let resposta = prompt("Digite uma opção:" ) 

if(resposta == "1"){
  total = preco_sao_paulo
} else{
total = preco_Araraquara 
}

let seguro = prompt("Deseja adicionar um seguro por mais R$ " + preco_seguro+ ":?")
if( seguro == "SIM"){
 total = total + preco_seguro   
}

let cupom = prompt("Digite o seu cupom de desconto:" )
if( cupom == "Conradito10" ){
    console.log("Cupom de 10% aplicado!" ) 
    let desconto = total * 0.10
     total = total - desconto 
} else { 
    console.log("Este cupom não existe ...")
}

let email = prompt("Você gostaria de receber promoções no seu E-mail?")
if( email == "SIM"){
    console.log("Obrigado por se registrar, você receberá novos e-mails em breve.") 
} else {
    console.log("Ok, você não receberá emails") 
} 
console.log("\nO total da viagem é de: R$ "+total) 

console.log("Formas de pagamentos:")
console.log("1 - Cartão de crédito (acréscimo de 5%)")
console.log("2 - PIX (Desconto de 5%)")
resposta = prompt("Escolha uma opção:")

if( resposta == "1"){
    total = total * 1.05
 //let desconto = total * 0.05
 //  total = total + desconto 
} else{
    total = total * 0.95 
    //let desconto = total * 0.05
     //total = total - desconto 
}


console.log(" Obrigado, e volte sempre!" ) 