const prompt = require('prompt-sync')();
console.log('##################################### ');
console.log('#                                   #');
console.log('#      BEM-VINDO AO JOGO            #');
console.log('#       Jogo de Dados               #');
console.log('#                                   #');
console.log('#####################################');


var r = +prompt('Digite o número de Rodadas do jogo: ');

var j= +prompt('Digite o número de jogadores: ');
console.log();

var lista =[];
var lista1=[];
var grandeVencedor=[];
for(let i=0;i<j; i++){
   lista1[i]=prompt("Digite o nome do Jogador: ");
}

for(let i =1; i<=r; i++){
  console.log(`\nRODADA ${i}`);
  console.log('\nDados dos jogadores nessa Rodada:')
  var lista =[];
 for(let i=0; i<j; i++){
   var dadosJogadores = {
     Nome: lista1[i],
     Numero: Math.floor(6* Math.random() + 1)}
      lista.push(dadosJogadores)
} 

   lista.sort(function(y,x){
  return x.Numero -y.Numero
});
 console.log(lista);
grandeVencedor.push(lista[0].Nome);

console.log("Vencedor da Rodada: ")
console.log(lista[0].Nome);

console.log("\nClique ENTER para próxima Rodada");
prompt();
}
var c=0;
var c1=0;
var maior;
for ( let i = 0 ; i <grandeVencedor.length; i++){
   for ( let j = 0; j < grandeVencedor.length;j++){  
   if(grandeVencedor[i] === grandeVencedor[j] ) {
    c++;
   }
 
    }
  if(c>c1){
   c1=c; 
   maior=grandeVencedor[i];

  }
   c=0 ; 
}

 console.log(`Fim do Jogo\nO grande vencedor é o ${maior}, pois ganhou ${c1} Rodadas`);
