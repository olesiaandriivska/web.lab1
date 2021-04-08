//3. Написати функцію, яка порахує факторіал натурального числа
function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}

console.log(factorial(4));
