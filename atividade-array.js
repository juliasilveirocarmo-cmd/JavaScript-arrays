const notas = [8, 7, 9, 5]; // 5 é a nota errada

notas.pop(); // remove a última nota

notas.push(10); // adiciona a nota correta

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
    }

    let media = soma / notas.length;

    console.log(media);