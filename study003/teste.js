const fullName = ['Lucas', 'Kauã', 'Neves', 'de', 'Almeida', 'da', 'Costa'];

console.log(fullName.length);

const name01 = fullName.toString();

console.log(name01);

const name02 = fullName.join(' ');

console.log(name02);

fullName.pop();

console.log(fullName);

fullName.push('Costa');

console.log(fullName);

fullName.shift();

console.log(fullName);

fullName.unshift('Lucas');

console.log(fullName);


const name03 = fullName.slice(2, fullName.length);

console.log(name03);

fullName.splice(0, 2, 'Levi');

console.log(fullName);


const fname = ['Lucas', 'Kauã'];

const lname = ['Neves', 'de', 'Almeida', 'da', 'Costa'];

const name = fname.concat(lname);

console.log(name);

const n1 = [1, 2, 3, 4, 5];

const n2 = [6, 7, 8, 9, 10];

const n3 = [...n1, ...n2];

console.log(n3);

const n4 = [...n3, 11, 12, 13, 14, 15];

console.log(n4);


fullName.sort();

console.log(fullName);

fullName.reverse();

console.log(fullName);


console.log(fullName.indexOf('Kauã'));

console.log(fullName.indexOf('Levi'));

console.log(fullName.lastIndexOf('Costa'));

console.log(fullName.lastIndexOf(5));;

console.log(fullName.includes('Lucas'));

console.log(fullName.includes(10));