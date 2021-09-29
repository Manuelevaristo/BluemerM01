const prompt = require('prompt-sync')();
function interrogatorio(p1,p2,p3,p4,p5){
  let contador=0;
  let contador2=5

  if(p1=="S"){
    contador++;
  }else{
    contador2--;
  }
  
  if(p2=="S"){
    contador++;
  }else{
    contador2--;
  }

  if(p3=="S"){
    contador++;
  }else{
    contador2--;
  }

  if(p4=="S"){
    contador++;
  }else{
    contador2--;
  }

  if(p5=="S"){
    contador++;
  }else{
    contador2--;
  }
if(contador==2){
  console.log('SUSPEITA');
}else if(contador>=3 && contador<=4){
   console.log('CÚMPLICE');
}else if(contador==5){
   console.log('ASSASSINO');
}else{
   console.log('INOCENTE')
}
}

console.log('### PROJETO DETETIVE ###');
console.log('Responda "S" para sim ou "N" para Não')

let pergunta1= prompt('Telefonou para a vítima?');

let pergunta2 = prompt('Esteve no local do crime?');
let pergunta3 = prompt('Mora perto da vítima?');
let pergunta4 = prompt('Devia para a vítima?');
let pergunta5 = prompt('Já trabalhou com a vítima?');
pergunta1=pergunta1.toUpperCase();
pergunta2=pergunta2.toUpperCase();
pergunta3=pergunta3.toUpperCase();
pergunta4=pergunta4.toUpperCase();
pergunta5=pergunta5.toUpperCase();

interrogatorio(pergunta1,pergunta2,pergunta3,pergunta4, pergunta5);