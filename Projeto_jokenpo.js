const prompt = require('prompt-sync')();
console.log('##################################### ');
console.log('#                                   #');
console.log('#      BEM-VINDO AO JOGO            #');
console.log('#            JOKENPO                #');
console.log('# O famoso PEDRA, PAPEL ou TESOURA  # ')
console.log('#                                   #');
console.log('#####################################\n ');
console.log('Opções Válidas: "Pedra", "Papel" e "Tesoura"\n')

var sair;
var novamente=1;
for(let i=0 ;i<novamente;i++){
var n = +prompt('Digite o número de Rodadas do jogo: ');


var lista =["PEDRA","PAPEL","TESOURA","PAPEL","PEDRA","TESOURA","PEDRA","PAPEL","TESOURA"];
var contu=0;
var contc=0;
var rodada=0;

 console.log('    \n      ### Placar ###');
console.log(`Computador ${contc} x ${contu} Usuario `);

for(let i =1; i<=n; i++){
  rodada++;
  console.log('\n ');
  console.log(`RODADA ${rodada}`);
  let opu = prompt('Escolha sua opção (Pedra, Papel ou Tesoura)');
  console.log('\n ');
  opu =opu.toUpperCase();
  var opcomputador = lista[Math.floor(Math.random() * lista.length)];

  console.log(`Opção do Usuario = ${opu}`);
  console.log(`Opção do Computador = ${opcomputador}`);
  if(opu!="PEDRA" && opu!="PAPEL" && opu!="TESOURA"){
    console.log('\nOpa! Opção ou palavra Inválida');
    n++;
    rodada--;
  }
   if(opu==="PEDRA"&& opcomputador==="PEDRA"){
    console.log('    \n      ### Placar ###');
    console.log(`Computador ${contc} x ${contu} Usuario `);
 

  }else if(opu==="PEDRA"&& opcomputador==="PAPEL"){
    contc++;
    console.log('     \n     ### Placar ###');
    console.log(`Computador ${contc} x ${contu} Usuario `);

  }else if(opu==="PEDRA"&& opcomputador==="TESOURA" ){
    contu++;
    console.log('    \n      ### Placar ###');
    console.log(`Computador ${contc} x ${contu} Usuario `);

  }else if(opu==="PAPEL"&& opcomputador==="PAPEL"){
    console.log('    \n      ### Placar ###');
    console.log(`Computador ${contc} x ${contu} Usuario `);

  }else if(opu==="PAPEL"&& opcomputador==="PEDRA"){
    contu++;
    console.log('    \n      ### Placar ###');
    console.log(`Computador ${contc} x ${contu} Usuario `);    

  }else if(opu==="PAPEL"&& opcomputador==="TESOURA"){
    contc++;
    console.log('    \n      ### Placar ###');
    console.log(`Computador ${contc} x ${contu} Usuario `);

  }else if(opu==="TESOURA"&& opcomputador==="PEDRA"){
    contc++;
    console.log('     \n     ### Placar ###');
    console.log(`Computador ${contc} x ${contu} Usuario `);

  }else if(opu==="TESOURA"&& opcomputador==="PAPEL"){
    contu++;
    console.log('   \n        ### Placar ###');
    console.log(`Computador ${contc} x ${contu} Usuario `); 

  }else if(opu==="TESOURA"&& opcomputador==="TESOURA"){
    console.log('   \n       ### Placar ###');
    console.log(`Computador ${contc} x ${contu} Usuario `);
  }
}

console.log('\n ');
console.log('Fim do Jogo!')
if(contc>contu){
  console.log('Vencedor: Computador');
}else if(contc===contu){
  console.log('Vencedor: Opa! foi um empate.')
}else{
   console.log('Vencedor: Você, parabéns!');
}
sair=prompt('\nDeseja continuar jogando: Digite "Sim" ou "Enter para Sair"');

sair=sair.toUpperCase();

if(sair!="SIM"){
  console.log('Obrigado por usar nosso App!')
  novamente=0;
}else{
  novamente++;
console.clear();
console.log('\n##################################### ');
console.log('##################################### \n');
console.log('           N O V O   J O G O            \n');  
}
} 
