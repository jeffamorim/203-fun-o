// Laços e funções

// let i = 0; //Contador
// let filmes = ["Harry Potter","Wall-e","Bee-Movie","Atlantis"];

// console.log(filmes[1]);
// console.log(filmes[2]);
// console.log(filmes[3]);
// console.log(filmes[4]);

//Utilizando While

// while(i<4){
//     console.log(filmes[i]);
//     i++;
// }

//Utilizando for com lenght

// for(i=0; i<filmes.length; i++){
//     console.log(filmes[i]);
// }

// FOR IN - Percorre o Índice
// FOR OF - Percorre Conteúdo

// console.log("--For of--");
// for(let item of filmes){ // Retorna os filmes
//     console.log(item);
// }

//  console.log("--For in--");
//  for(let item in filmes){ // Retorna os indices
//      console.log(item);
//  }

//Função

// function soma(a,b) {
//     return a+b;
// }
// console.log(soma(2,3));
// alert("Resultado da soma: "+soma(a,b));

// Com prompt e alert //
// let a = parseFloat(prompt("Digite sua nota:"));
// let b = parseFloat(prompt("Digite sua nota:"));

// function calcMedia(a,b){
//     let total = (a+b)/2;
//     return total;
// }

// alert (calcMedia(a,b));

//Com console //
// function calcMedia(a,b){
//     return ((a+b)/2).toFixed(1);
// }

// let a=5, b=5;
// console.log(calcMedia(a,b));

//Arrow function
// calcMedia = (n1,n2,n3) =>{
//     return ((n1+n2+n3)/3).toFixed(1);
// }
// Mesma funcção sem ser Arrow.

// function calcMedia(n1,n2,n3){
//     return ((n1,n2,n3)/3).toFixed(1);
// }



// forin percorre os indices
// forof o conteudo


let filmes = [
    {titulo:"Star Wars", classificacao: 14},
    {titulo:"Shrek", classificacao: 5},
    {titulo:"Ninja assassino", classificacao: 18}
]

let idade = prompt("Qual sua idade ?");

for (let i in filmes){
    if(idade>=filmes[i].classificacao){
        console.log(filmes[i].titulo);
    }
}