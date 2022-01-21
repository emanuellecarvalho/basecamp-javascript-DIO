/*
Entrada
A entrada tem dois inteiros positivos: N e L, 
que são, respectivamente, o número de lados e 
o comprimento de cada lado de um polígono regular (3 ≤ N ≤ 1000000 and 1 ≤ L ≤ 4000).

Saída
A saída é o perímetro P do polígono regular em uma única linha.

Exemplo de Entrada	->> Exemplo de Saída
3 1 ->> 3
9 8 ->> 72
1000000 1000 ->> 1000000000
*/

let lines = gets().split("\n");
let line = lines.shift().split(' ');

let N = parseInt(line[0]);
let L = parseInt(line[1]);

const P = (N, L) => {
  return N * L;
};

print(P(N, L));