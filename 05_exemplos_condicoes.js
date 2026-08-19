// Aula 05: Exemplos de condições 
let prompt = require ("prompt-sync")();

let usuario = prompt("Digite o seu usuário:" )
if( usuario == "Conrado"){
   console.log("Acesso concedido!")
} else {
    console.log("Acesso negado....")
}