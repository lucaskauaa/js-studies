function sum (a, b) {
    return a + b;
}

console.log(sum(5, 10));

function write() {
    console.log('Hello, World!');
}

write();

function writeName (name) {
    console.log(`Olá, ${name}!`);
}

writeName('Lucas');

const numbers = [1, 2, 3, 4, 5];

function sumNumbers (arr) {
    let sum = 0;
    for (let i of arr) {
        sum += i;
    }
    return sum;
}

const result = sumNumbers(numbers);

console.log(`Resultado: ${result }`);


function address (street, number, borough, ...complements) {
    console.log(street);
    console.log(number);
    console.log(borough);
    for(let i of complements) {
        console.log(i);
    }
}

address('Itumbiara', 33, 'Gravatá', 'Camaçari', 'BA', 'Brasil', 'América do Sul', 'Planeta Terra');


(function showName (name) {
    console.log(name);
}('Lucas'));

(function (name) {
    console.log(name);
}('Lucas'));


const minus = function (a, b) {
    return a - b;
}

console.log(minus(10, 5));


const mult = (a, b) => {
    return a * b;
}

console.log(mult(5, 10));

const addNumbers = (a, b, c, ...otherNumbers) => {
    let sum = a + b + c;
    for (let i of otherNumbers) {
        sum += i;
    }
    return sum;
}

const resultNumbers = addNumbers(5, 10, 29, 98, 101, 2, 14);

console.log(resultNumbers);


const sum02 = (a, b, c=2, d=3) => {
    return a + b + c + d;
}

console.log(sum02(5, 10));


const sum03 = (a, b) => {
    return a + b;
}

const mult02 = (a, b) => {
    return a * b;
}

console.log(mult02(sum03(5, 10) * 3, mult02(2, sum03(4 , 4))));


const calculate = (a, b, cb) => {
    return cb(a, b);
}

const sum04 = (a, b) => {
    return a + b;
}

const mult03 = (a, b) => {
    return a * b;
}

console.log(calculate(5, 10, mult03));