const user = ['Lucas', 'Kauã', 19, 'Bahia', 'Brasil'];

const fname = user[0];

const sname = user[1];

const age = user[2];

const state = user[3];

const country = user[4];

console.log(fname, sname, age, state, country);


const [name, , age, , country] = user;

console.log(name, age, country);

const [n1, , , n2, , , n3] = [10, 20, 30, 40, 50, 60, 70];

console.log(n1, n2, n3);

const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];

const [num01, , num02, , , ...others] = numbers;

console.log(num01, num02, others);


const cars = ['Golf', '911', 'Mustang', 'Supra', 'Astra', 'i30',]

const [volksWagen, , , ,chevrolet, hyundai] = cars;

console.log(volksWagen, chevrolet, hyundai);


const numbers = [1, 2, 3];

const [first, second, third] = numbers;

console.log((first + second) * third);


const numbers = [1, 2, 3];

const [first, , third] = numbers;

console.log(first + third);


const numbers = [1, 2];

const [a, b, c = 3] = numbers;

console.log(a, b, c);

const numbers = [1, 2];

const [a, b, c = a + b] = numbers;

console.log(a, b ,c);