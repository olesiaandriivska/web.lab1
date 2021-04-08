//4. Знайти елемент із найбільшою частотою повторень
let masiv = [2,2,5,6,3,5,7,1,2,2,1,2];


let max = 0;
function maximum (arr) {

    let resultProc = {};
    arr.forEach(value => resultProc[value] = resultProc[value] + 1 || 1);
    for (let i in resultProc)
        if
        (resultProc[i] > max){
         max = resultProc[i];
         console.log(resultProc[i]);
}

    console.log(resultProc);

}

maximum(masiv);
