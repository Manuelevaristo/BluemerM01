const prompt = require('prompt-sync')();

function autorizaVoto(idade) {
  if(idade<16){
   return "Negado";
  }else if(idade>=16 && idade<=17){
   return "Opcional";
  }else if(idade>=18 && idade<=70){
   return "Obrigatorio";
  }else if(idade>70){
   return "Opcional";
  }

}
function votacao(autorizacao, voto){
  if(autorizacao==="Opcional" || autorizacao==="Obrigatorio"){

    return voto;
  }else if(autorizacao==="Negado"){
    console.log("Infelizmente, Você não pode votar, sua idade não permite!");
    voto=0;
    return voto;
  }
}


function exibirResultados(candidato1,candidato2,candidato3,nulo,embranco){
  console.log('Numero de Votos para cada candidato:');
  console.log(`\nCandidato1 = ${candidato1} votos\nCandidato2 = ${candidato2} votos\nCandidato3 = ${candidato3} votos`);
  console.log(`Votos Nulos = ${nulo}\nVotos em Branco = ${emBranco}`);

  var vencedor=lista[0];


 for(let i=0; i<lista.length; i++){
   if(lista[i]==vencedor && i!=0){
   
     var p=0;
   
  }
  }
    
  for(let i=0; i<lista.length; i++){
   if(lista[i]>vencedor){
     vencedor=lista[i];
     var p=i+1;
     }else if(vencedor==lista[0] && lista[0]!=lista[1] && lista[0]!=lista[2]){
       //vencedor=lista[0];
       p=1;
     }  
  }

  if(p==0){
     console.log("Opa!, Houve algum empate entre candidatos, então não temos Vencedor");
  }else{
  console.log(`O vencedor é o candidato ${p} com ${vencedor} votos `);}
}
function informacao(){
 console.log('##################################### ');
 console.log('#                                   #');
 console.log('#      BEM-VINDO A NOSSA URNA       #');
 console.log('#            DE VOTAÇÃO             #');
 console.log('#                                   #');
 console.log('#####################################\n ');
 console.log("Menu de Opcões de VOTO: ");
 console.log(" 1 = Candidato 1\n 2 = Candidato 2\n 3 = Candidato 3\n 4 = Voto Nulo\n 5 = Voto em Branco");}

var candidato1=0;
var candidato2=0;
var candidato3=0;
var nulo=0;
var emBranco=0;
var status="S"
//informacao();
while(status=="S"){
  informacao();
  let c;
var anoDeNascimento =+prompt("\nQual é o seu ano de nascimento: ");
var idadee=2021-anoDeNascimento;
var votar;
autorizaVoto(idadee);

if(votacao(autorizaVoto(idadee),votar)==0){
  status=prompt('\nQuer continuar a votação? escolha "S"para continuar ou qualquer teclar para sair: ');
  status=status.toUpperCase();
if(status=="S"){
  console.clear();
}
  
var lista=[candidato1,candidato2,candidato3];

}else{
if(autorizaVoto(idadee)==="Opcional" || autorizaVoto(idadee)==="Obrigatorio"){
  votar=+prompt("Digite a sua opção de voto: ");
}


var votos=votacao(autorizaVoto(idadee),votar);


if(votos==1){

  candidato1++;
  console.log("+1 voto para o Candidato1");
}else if(votos==2){

  candidato2++;
  console.log("+1 voto para o Candidato2");
}else if(votos==3){

  candidato3++;
  console.log("+1 voto para o Candidato3");
}else if(votos==4){

  nulo++;
 console.log("+1 voto Nulo");
}else if(votos==5){

  emBranco++;
  console.log("+1 Voto Em Branco");
}
var lista=[candidato1,candidato2,candidato3];
console.log(votos);
//console.log(lista);
status=prompt('\nQuer continuar a votação? escolha "S"para continuar ou qualquer teclar para sair: ');
status=status.toUpperCase();
if(status=="S"){
  console.clear();
}
  
}

}
if(lista[0]==0 && lista[1]==0 && lista[2]==0){
    console.log("Não houve votação");
}else{

  console.log("\nVotacão Encerrada!\n");
  exibirResultados(candidato1,candidato2,candidato3,nulo,emBranco)
}