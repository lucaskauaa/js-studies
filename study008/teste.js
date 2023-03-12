const user = {
    firstName: 'Lucas',
    secondName: 'Kauã',
    age: 19,
    country: 'Brasil'
};

console.log(user.firstName);

console.log(user['secondName']);

const test = 'age';

console.log(user[test]);


for(let i in user) {
    console.log(user[i]);
}


user.state = 'Bahia';

user['year'] = 2023;

console.log(user['state']);

console.log(user.year);


delete user.secondName;

console.log(user);


user.firstName = 'Levi';

console.log(user.firstName);

user.firstName = 'Lucas';

console.log(user.firstName);


const x = user;

console.log(x);

console.log(user.age);

x.age = 20;

console.log(user.age);


const values = {
    str: 'Strings',
    nmbr: 123,
    arr: ['Volvo', 'Honda', 'VolksWagen'],
    func: function (a,b) {
        return a + b;
    },
    obj: {
        firstName: 'Lucas',
        age: 19,
        country: 'Brasil'
    },
    tr: true,
    fls: false,
    nan: NaN,
    und: undefined,
    inf: Infinity,
    nul: null
}

for(let i in values) {
    console.log(values[i]);
};


const test02 = {
    showName: function (name) {
        return `Olá, ${name}!`;
    },
    country: 'Brasil',
    state: 'Bahia'
};

console.log(test02.showName('Lucas'));

const operation = {
    sum(a, b) {
        return a + b;
    },
    numbers: 123,
    year: 2023
};

console.log(operation.sum(5, 10));


const color = 'Branco';

const car = {
    model: 'Golf',
    color: color,
    year: 2023
};

console.log(car.color);

const car02 = {
    model: 'Civic',
    color,
    year: 2020
};

console.log(car02.color); 


const person = {
    fname: 'Lucas',
    age: 19
};

const extraInfo = {
    country: 'Brasil',
    year: 2023
};

const newUser = Object.assign({}, person, extraInfo);

console.log(newUser);


const user02 = {
    fname: 'Lucas',
    age: 19
};

const moreInfo = {
    country: 'Brasil',
    state: 'Bahia'
};

const userInfo = {
    ...user02,
    ...moreInfo,
    color: 'Pardo',
    motherName: 'Lilian',
    fatherName: 'Luciano'
};

console.log(userInfo);


const varName01 = 'name';

const varName02 = 'age';

const user03 = {
    [varName01]: 'Lucas',
    [varName02]: 19
};

console.log(user03);


const test03 = {
    cars: [
        {
            brand: '-VolksWagen',
            models: ['Golf', 'T-Cross']
        },
        {
            brand: '-Chevrolet',
            models: ['Astra', 'Onix']
        },
        {
            brand: '-Fiat',
            models: ['Uno', 'Punto']
        }
    ]
}

for(let i in test03.cars) {
    console.log(test03.cars[i].brand);
    for(let c of test03.cars[i].models) {
        console.log(c)
    }
}


const user04 = {
    fname: 'Lucas',
    age: 19,
    country: 'Brasil',
    state: 'Bahia'
};

const userKeys = Object.keys(user04);

for(let i of userKeys) {
    console.log(i);
}

const userValues = Object.values(user04);

for(let i of userValues) {
    console.log(i);
}