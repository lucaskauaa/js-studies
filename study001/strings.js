console.log('Hello, World!');

var name = 'Lucas Kauã';

console.log(name);


var test = 'Teste de String';

console.log(test);


var fullName = 'Lucas Kauã Neves de Almeida da Costa';

console.log(fullName.length);


console.log(fullName.slice(0, 16));

console.log(fullName.substring(6, 16));

console.log(fullName.substr(6, 16));


console.log(fullName.replace('Kauã', 'Levi'));

fullName = fullName.replace('Lucas Kauã', 'Levi');

console.log(fullName);

fullName = fullName.replace('Levi', 'Lucas Kauã');


console.log(fullName.toUpperCase());

console.log(fullName.toLowerCase());


var fname01 = fullName.split();

console.log(fname01);

var fname02 = fullName.split(' ');

console.log(fname02);

var fname03 = fullName.split('');

console.log(fname03);


var name01 = 'Lucas';

var name02 = 'Kauã';

var name03 = 'Neves';

var name04 = 'de'

var name05 = 'Almeida'

var name0x = name01.concat(' ', name02, ' ', name03, ' ', name04, ' ', name05, ' da ', 'Costa');

console.log(name0x);


var trimName = '   Lucas Kauã   ';

console.log(trimName.trim());

console.log(trimName.trimStart());

console.log(trimName.trimEnd());


var pName = 'Lucas Kauã';

console.log(pName.padStart(16, 'Nome: '));

console.log(pName.padStart(pName.length + 6, 'Nome: '));

console.log(pName.padStart(pName.length + 'Nome: '.length, 'Nome: '));

var city = 'Salvador';

console.log(city.padEnd(city.length + 3, '-BA'));

console.log(city.padEnd(city.length + '-BA'.length, '-BA'));


console.log(fullName.charAt(0));

console.log(fullName.charAt(6));

console.log(fullName.charCodeAt(0));

console.log(fullName.charCodeAt(6));


console.log(fullName.indexOf('Lucas'));

console.log(fullName.indexOf('Kauã'));

console.log(fullName.indexOf('Costa'));

console.log(fullName.indexOf('a'));

console.log(fullName.indexOf('a', 10));

console.log(fullName.indexOf('Levi'));

console.log(fullName.lastIndexOf('a'));

console.log(fullName.lastIndexOf('e', 15));

console.log(fullName.includes('Lucas'));

console.log(fullName.includes('Levi'));

console.log(fullName.includes('a'));

console.log(fullName.startsWith('Lucas'));

console.log(fullName.startsWith('Kauã'));

console.log(fullName.startsWith('L'));

console.log(fullName.startsWith('Luc'));

console.log(fullName.startsWith('a'));

console.log(fullName.endsWith('Costa'));

console.log(fullName.endsWith('a'));

console.log(fullName.endsWith('sta'));

console.log(fullName.endsWith('s'));


var fname = 'Lucas';

var motherSName = "Lilian";

var fathersName = `Luciano`;

var family = `${fname}, ${motherSName}, ${fathersName}, Levi`;

console.log(family);

console.log(`Nome: ${fname}, quantidade de caracteres: ${fname.length}`);

var sname = 'Kauã';

console.log(`Nome: ${fname.concat(' ', sname)}`);

console.log(`He's often called "Jhonny"`);

var n1 = 5;

var n2 = 10;

var result = `Resultado: ${(n1 + n2) * 3}`;

console.log(result);