//Aula 05 - Condições 
let prompt = require ("prompt-sync")();

console.log ("Bem-vindo ao Detran! ")
let idade = prompt("digite a sua idade:") 

// Coparadores 
// > Maior 
// < Menor 
// == igual 
// >= Maior ou Igual 
// <= Menor ou Igual 
// != Diferente 
if(idade >= 18){
    console.log("você já tem idade para tirar a CNH")
}  else{
    console.log("Você ainda não pode tirar CNH, volte depois... " )
} 
