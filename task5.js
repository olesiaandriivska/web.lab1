//5. Написати функцію, яка поверне кількість днів для заданого місяця та року.

function data(month,year){
    let newData;
    if (month===2 && year%4===0)
        newData=29;

    if (month===2 && year%4!==0)
        newData=28;

    month===4 || month===6 ||month===9 ||month===11 ? newData=30: newData=31;
    return newData;
}
console.log("Кількість днів:", data(11, 2000));

