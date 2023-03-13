const user = ['Lucas', 'Kauã', 19, 'Bahia', 'Brasil'];

const fname = user[0];

const sname = user[1];

const age = user[2];

const state = user[3];

const country = user[4];

console.log(fname, sname, age, state, country);


const [name, , age02, , country02] = user;

console.log(name, age02, country02);

const [n1, , , n2, , , n3] = [10, 20, 30, 40, 50, 60, 70];

console.log(n1, n2, n3);

const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];

const [num01, , num02, , , ...others] = numbers;

console.log(num01, num02, others);


const cars = ['Golf', '911', 'Mustang', 'Supra', 'Astra', 'i30',]

const [volksWagen, , , ,chevrolet, hyundai] = cars;

console.log(volksWagen, chevrolet, hyundai);


const numbers02 = [1, 2, 3];

const [first, second, third] = numbers02;

console.log((first + second) * third);


const numbers03 = [1, 2, 3];

const [first02, , third02] = numbers03;

console.log(first02 + third02);


const numbers04 = [1, 2];

const [a, b, c = 3] = numbers04;

console.log(a, b, c);

const numbers05 = [1, 2];

const [x, y, z = x + y] = numbers05;

console.log(x, y ,z);