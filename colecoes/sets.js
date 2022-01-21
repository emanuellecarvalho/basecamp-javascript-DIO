const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr) {
    const mySet = new Set(arr);

    // utilizando argumento Rest -> ...
    return [...mySet];
}

// retorna os valores em outro Array
console.log(valoresUnicos(meuArray));