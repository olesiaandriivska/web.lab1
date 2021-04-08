//6. Написати реалізацію швидкого сортування масиву
function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }

    let pivot = array[0];

    let left = [];
    let right = [];

    for (let i = 1; i < array.length; i++) {
        array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
    }

    return quickSort(left).concat(pivot, quickSort(right));
}

let unsorted = [23, 45, 16, 37, 3, 99, 22];
let sorted = quickSort(unsorted);

console.log('Sorted array', sorted);
