// 1. Crie um array de notas (a última deve ser baixa)
const notas = [8, 7, 9, 2];

// 2. Remova a última nota
notas.pop();

// 3. Adicione a nota 10
notas.push(10);

// 4. Calcule a média
let soma = 0;

for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}

let media = soma / notas.length;

console.log("Notas:", notas);
console.log("Média:", media);