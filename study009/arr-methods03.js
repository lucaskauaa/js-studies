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


const yetAnotherArray = [2, 3, 4, 5, 4, 12, 19, 7, 2, 5];

const uniqueArray = yetAnotherArray.filter((value, index, arr) => {
    return arr.indexOf(value) === index;
});

console.log(uniqueArray);


const people = [
    { id: 11, name: 'Adamastor', age: 23, group: 'editor' }, 
    { id: 47, name: 'Joana', age: 28, group: 'user' }, 
    { id: 85, name: 'Mauricio', age: 34, group: 'editor' }, 
    { id: 97, name: 'Lalau', age: 74, group: 'admin' }
];

const filteredPeople = people.filter((value) => {
    return value.name.includes('au');
});

console.log(filteredPeople);