const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNumbers = numbers.filter((value, index, arr) => {
    return value % 2 === 0;
});

console.log(newNumbers);


const fullName = ['Lucas', 'Kauã', 'Neves', 'de', 'Almeida', 'da', 'Costa'];

const filterName = fullName.filter((name) => name.length >= 3);

console.log(filterName);


const numbers02 = [5, 64, 12, 18, 37, 1, 44, 90, 7, 10];

const adultAge = numbers02.filter(age => age >= 18);

const youngAge = numbers02.filter(age => age < 18);

console.log(adultAge);

console.log(youngAge);


const numbers03 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const testNumbers = numbers03.filter(n => n % 2 === 0).map(n => n * 2);

console.log(testNumbers);