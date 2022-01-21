/* função que multiplica por 2 cada item do array utilizando
o método map sem o this, que geralmente é o mais comum no mercado */

function mapSemThis(arr){
    return arr.map(function(item){
        return item * 2;
    });
}

const nums = [2, 4, 6, 8, 10];

console.log(mapSemThis(nums));