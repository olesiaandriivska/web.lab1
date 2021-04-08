//1. Реалізувати розбиття стрічки на слова у масив. Допустим є написання функцій.
const str = 'Я навчаюсь на прикладній математиці.';
function breaking(string) {
    let word = string.split(' ');
    console.log(word);
}

breaking(str);
