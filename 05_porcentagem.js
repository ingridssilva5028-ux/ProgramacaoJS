// Aula 05: porcentagem 
let prompt = require ("prompt-sync")() // importar 


let valor = parseFloat (prompt("Digite o valor: ") )
let desconto =parseFloat (prompt ("Escolha o desconto: ") ) 
desconto = desconto /100 
let total = valor * desconto 
let valor_com_desconto = valor - total 

console.log ( valor_com_desconto)  

