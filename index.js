let listaDePecas = ["Roda", "Chave", "Porca", "Chapa", "Prego", "Painel", "Tampa", "Vela", "Motor"];
let quantidadeDePecas = listaDePecas.length;
let novaPeca = "Alicate";
if(quantidadeDePecas <10 && novaPeca.length >3) {
  listaDePecas.push(novaPeca);
  console.log(listaDePecas); 
}else{
  console.log("Nao existe capacidade suficiente para novos cadastros ou numero de carateres insuficiente");
}