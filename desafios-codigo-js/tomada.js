/*
Entrada
A entrada consiste de uma linha com quatro números inteiros T1, T2, T3, T4, 
indicando o número de tomadas de cada uma das quatro réguas (2 ≤ Ti ≤ 6).

Saída
Seu programa deve produzir uma única linha contendo um único número inteiro, 
indicando o número máximo de aparelhos que podem ser conectados à energia num mesmo instante.

Exemplo de Entrada	>> Exemplo de Saída
2 4 3 2 >> 8
6 6 6 6 >> 21
2 2 2 2 >> 5
*/

let lines = gets().split('\n');

let line = lines.shift().split(' ');

let T1 = parseInt(line[0]);
let T2 = parseInt(line[1]);
let T3 = parseInt(line[2]);
let T4 = parseInt(line[3]);

let somaAparelhosTotal = T1 + T2 + T3 + T4 - 3;

print(somaAparelhosTotal);