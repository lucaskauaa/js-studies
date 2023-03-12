const user = {
    fname: 'Lucas',
    sname: 'Kauã',
    age: 19,
    fullName() {
        return `${this.fname} ${this.sname}`;
    }
}

console.log(user.fullName());

const car = {
    addProp(propName, value) {
        this[propName] = value;
        console.log(car);
    },
    delProp(prop) {
        delete this[prop];
        console.log(car);
    },
    brand: 'VolksWagen',
    model: 'Golf',
}

console.log(car);

car.addProp('color', 'Branco');

car.addProp('year', '2022');

car.delProp('model');

car.addProp('engine', 'Combustão');


const user02 = {
    fname: 'Lucas',
    age: 19,
    language: 'Portugês',
    set lang(l) {
        this.language = l;
    },
    get lang() {
        return this.language;
    }
}

console.log(user02.lang);

user02.lang = 'English';

console.log(user02.lang);

user02.lang = 'Espanhol';

console.log(user02.lang);


const car02 = {
    brand: 'Honda',
    model: 'Civic',
    year: 2020,
    set showYear(y) {
        this.year = y;
    },
    get showYear() {
        return `${this.brand} ${this.model} ${this.year}`;
    }
};

console.log(car02.showYear);

car02.showYear = 2010;

console.log(car02.showYear);


const user03 = {
    fname: 'Lucas',
    sname: 'Kauã',
    age: 19,
    country: 'Brasil',
    state: 'Bahia'
};

const {fname, age, country} = user03;

console.log(fname, age, country);

const user04 = {
    fname: 'Lucas',
    sname: 'Kauã',
    age: 19,
    country: 'Brasil',
    state: 'Bahia'
};

const {fname: name, age: ageValue, country: nacionality} = user04;

console.log(name, ageValue, nacionality);


const user05 = {
    person: {
        fname: 'Lucas',
        age: 19,
        address: {
            country: 'Brasil',
            state: 'Bahia'
        },
    },
    family: {
        motherName: 'Lilian',
        fatherName: 'Luciano'
    }
};

const {person: {fname: name02, address: {country: nacionality02}}, family: {motherName}} = user05;

console.log(name02, nacionality02, motherName);


const person = {
    fname: 'Lucas',
    sname: 'Kauã',
    skinColor: 'Pardo'
};

const {fname: name03, sname, skinColor = 'Branco'} = person;

console.log(name03, sname, skinColor);


const user06 = {
    fname: 'Lucas',
    sname: 'Kauã',
    age: 19
};

const showID = ({fname, age, country = 'Brasil'}) => `Nome: ${fname}, Idade: ${age}, Pais: ${country}`;

console.log(showID(user06));


const car03 = {
    brand: 'Chevrolet',
    model: 'Astra',
    year: 2013
}

const displayCar = ({brand, model, color = 'Branco'}) => (
    `Marca: ${brand}, Modelo: ${model}, Cor: ${color}`
)

console.log(displayCar(car03));


const car04 = {
    brand: 'Hyundai',
    model: 'i30',
    year: 2012,
    color: 'Prata'
};

console.log(displayCar(car04));


const user07 = {
    fname: 'Lucas',
    age: 19,
    country: 'Brasil'
};

for(let i in user07) {
    if(user07.hasOwnProperty(i)) {
        console.log(user07[i]);
    }
}