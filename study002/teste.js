let n1 = 153;

n1 = n1.toString();

console.log(n1);

let n2 = 9.55;

n2 = n2.toFixed(1);

console.log(n2);

let n3 = 4.333;

n3 = n3.toPrecision(2);

console.log(n3);


let num01 = '50';

console.log(Number(num01) + 5);

let num02 = '7.3';

console.log(Number(num02) + 3);

let num03 = '10.5';

console.log(parseInt(num02) + 8);

let num04 = '10';

console.log(parseInt(num03) + 5);

let num05 = '5.88';

console.log(parseFloat(num05) + 5);

console.log(Number((parseFloat(num05) + 5).toFixed(2)));

let num06 = '11';

console.log(parseFloat(num06) + 9);


let a = 5; 

a += 5;

console.log(a);

let b = 12;

b -= 10;

console.log(b);

let c = 7;

c *=11;

console.log(c);

let d = 81;

d /= 9;

console.log(d);

let e = 4;

e **= 2;

console.log(e);

let f = 12;

f %= 5;

console.log(f);


let x = 5;

console.log(x++);

console.log(++x);

console.log(x--);

console.log(--x);


console.log(5 + 'string');

console.log(5 - 'string');

console.log(12 * 'teste');

console.log(30 / 'texto');

const numbers = [5, 10, 15, 20];

console.log(3 * numbers);

const sum = (a, b) => a + b;

console.log(50 * sum);

const user = {
    fname: 'Lucas',
    age: 19
};

console.log(7 - user);

console.log('teste' + user);

console.log('teste' - user);

console.log(5 + undefined);

console.log(5 + null);

console.log(5 - null);

console.log(3 + NaN);

console.log('teste' + NaN);

console.log('teste' - NaN);


console.log(5 / 0);

console.log(20 * Infinity);

console.log(NaN + Infinity);

console.log('teste' + Infinity);

console.log('teste' / Infinity);

console.log('teste' / 0);