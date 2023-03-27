const fname = 'Lucas';

const arrName = Array.from(fname);

console.log(arrName);



const letters = ['a', 'b', 'c', 'd'];

const test = letters.keys();

for(let i of test) {
    console.log(i);
}



const letters02 = ['a', 'b', 'c', 'd'];

const test02 = letters02.values();

for(let i of test02) {
    console.log(i);
}



const fruits = ['Maça', 'Uva', 'Banana', 'Laranja'];

const newFruits = fruits.entries();

for(let i of newFruits) {
    console.log(i);
}



const numbers = [1, 2, 3, 4, 5, 6];

const newNumbers = numbers.copyWithin(3, 0, 3);

console.log(newNumbers);


const fruits02 = ['Maçã', 'Uva', 'Banana', 'Laranja', 'Morango', 'Melão'];

const newfruits02 = fruits02.copyWithin(4, 1, 3);

console.log(newfruits02);


const fullName = ['Lucas', 'Kauã', 'Neves', 'de', 'Almeida', 'da', 'Costa'];

const newName = fullName.copyWithin(4, 0, 3);

console.log(newName);



const numbers02 = [1, 2, 3, 4, 5, 6];

numbers02.fill(0, 3, 7);

console.log(numbers02);


const numbers03 = [1, 2, 3, 4, 5, 6];

numbers03.fill(1);

console.log(numbers03);


const fruits03 = ['Maçã', 'Uva', 'Banana', 'Laranja'];

fruits03.fill('Morango', 2, 4);

console.log(fruits03);



const arrNumbers = [[1, 2], [3, 4], [5, 6]];

const concatNumbers = arrNumbers.flat();

console.log(concatNumbers);


const arrNumbers02 = [1, 2, [3, [4, 5, 6], 7], 8];

const concatNumbers02 = arrNumbers02.flat();

console.log(concatNumbers02);


const arrFruits = ['Maçã', ['Uva', 'Banana'], 'Laranja', ['Morango', 'Melão']];

const concatFruits = arrFruits.flat();

console.log(concatFruits);



const numbers04 = [1, 2, 3, 4, 5];

const newNumbers04 = numbers04.flatMap(value => {
     return [value * 2, value * 3];
});

console.log(newNumbers04);