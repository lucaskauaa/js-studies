const sum = (a, b) => a + b;

console.log(sum(5, 10));

const minus = (a, b) => (
    a - b
)

console.log(minus(10, 5));


const person = () => (
    {
        fname: 'Lucas',
        age: 19,
        country: 'Brasil'
    }
)

const user = person();

console.log(user);


const sum10 = n => n + 10;

console.log(sum10(5));

const mult3 = a => a * 3;

console.log(mult3(21));

const showName = name => `Nome: ${name}`;

console.log(showName('Lucas Kauã'));