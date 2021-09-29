const prompt = require('prompt-sync')();
class Pessoa{
  constructor(){
   this.hora = 7;
   this.estudou = false;
  }
  
   avancartempo(tempo){
       this.hora+=tempo
   }
   mostrarhora(){
        console.log(`Agora são: ${this.hora} horas.`);
    }
  estudar(){
      console.log("Boa, vc estudou pra Prova ")
      this.estudou =true;
    }
  

}
// class Tempo extends Pessoa{
//      constructor(){
//       super()
//      }
// }

function informacao(dia,disciplina){
  console.log('                                   ');
 console.log('     Você está numa Semana de provas       ');
 console.log(`     E hoje é ${dia}, precisa se preparar para prova de ${disciplina}\n     `);
 console.log(`são ${pessoa.hora} horas, lembrando que vc não estudou e ainda está cheio de dúvidas da materia, sua prova será as 14h\n`);
}
 let pessoa = new Pessoa(7);
 //let tempo =  new Tempo();
 
 dias=["Segunda feira","teça feira","quarta feira","quinta feira","Sexta feira"];
 disciplinas=["Cálculo","Portugues","Física","Química","Biologia"]
var nulo=0;
var reprovacao=0;
 for( let i=0; i<dias.length; i++){

   console.log(`\n${i+1}° DIA`);
 informacao(dias[i],disciplinas[i]);
   var j=0;
   while(j==0){
    console.log('           Menu de Ações:      ')
    console.log(' 1 - Estudar')
    console.log(' 2 - Assister um filme');
    console.log(' 3 - Jogar FreeFire')
    console.log(' 4 - Dormir')
    console.log(' 5 - Pegar Onibus')
    console.log(' 6 - Fazer Prova')
    console.log(' 0 - Sair')
 
    let opcao = +prompt("Digite sua escolha: ")
    3
     if(pessoa.hora>=24){
        //pessoa.mostrarhora()
          j=1;
          pessoa.hora=7;
      }else{
       if (opcao == 1) {
        pessoa.estudar();
        pessoa.avancartempo(4);
        pessoa.mostrarhora();
    } else if (opcao == 2) {
       
        pessoa.avancartempo(4)
        pessoa.mostrarhora()
    } else if (opcao == 3) {
        pessoa.avancartempo(4)
        pessoa.mostrarhora()
    } else if (opcao == 4) {
      pessoa.avancartempo(2)
      pessoa.mostrarhora()
    } else if (opcao == 5) {
      pessoa.avancartempo(2)
      pessoa.mostrarhora()
       
    } else if (opcao == 6) {
      if(pessoa.hora<13){
        pessoa.mostrarhora()
        console.log("Ainda é cedo para prova começar")
      }else{
        if(pessoa.estudou==false && pessoa.hora==13){
          console.log("Vc fez a prova, porém Você teve nota Baixa pois não estudou,em consequencia disso, vc reprovou na disciplina!");
          j=1;
         
          reprovacao++;
          pessoa.hora=7;
        }else if(pessoa.hora==13){
          console.log("Parabens, vc se deu bem na prova e foi aprovado na Disciplina");
           j=1;
          
           pessoa.hora=7;
        }else{
          console.log("Vc atrasou e não fez a prova,em consequencia disso, vc reprovou na disciplina!");
           j=1;
           reprovacao++;
           pessoa.hora=7;
        }
      }
       
    }else if (opcao == 0) {
      
       i=6;
       nulo=1
       j=1;
    } else {
        console.log("Opção inválida!")
    }
 }
   }
}
if(nulo==1){
  
}else if(reprovacao>0){
console.log(`Vc teve ${reprovacao} Reprovação, Assista menos Filme e Joga Menos FreeFire no semestre que Vem!`);
}else{
  console.log(`Parabéns vc Aprovou em ${5-reprovacao}`);
}

 
