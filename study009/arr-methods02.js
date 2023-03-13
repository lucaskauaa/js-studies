const numbers = [1, 2, 3, 4, 5];

const newNumbers = numbers.map((value, index, arr) => {
    return value * 2;;
});

console.log(newNumbers);


const numbers02 = [2, 4, 6, 8, 10];

const newNumbers02 =  numbers02.map(value => {
    return value * 2;
});

console.log(newNumbers02);


const numbers03 = [5, 10, 15, 20, 25];

const newNumbers03 = numbers03.map(value => value * 3);

console.log(newNumbers03);


const fullName = ['Lucas', 'Kauã', 'Neves', 'de', 'Almeida', 'da', 'Costa'];

const minuscName = fullName.map(name => name.toLowerCase());

console.log(minuscName);