const user = {
    fname: 'Lucas',
    sname: 'Kauã'
};

const user02 = {
    fname: 'Levi',
    sname: 'Neves'
};

function fullName() {
    console.log(`${this.fname} ${this.sname}`);
}

fullName.call(user);

fullName.call(user02);

console.log('')

const person = {
    fname: 'Lucas',
    sname: 'Kauã',
    fullName() {
        console.log(`${this.fname} ${this.sname}`);
    }
};

const person02 = {
    fname: 'Levi',
    sname: 'Neves'
};

person.fullName();

person.fullName.call(person02);

console.log('');

const user03 = {
    fname: 'Lucas',
    sname: 'Kauã'
};

const user04 = {
    fname: 'Levi',
    sname: 'Neves'
};

function displayUser(country, state) {
    console.log(`Nome completo: ${this.fname} ${this.sname}`);
    console.log(`Nacionalidade: ${state}, ${country}`);
}

displayUser.call(user03, 'Brasil', 'Bahia');

console.log('');

displayUser.call(user04, 'Brasil', 'Bahia');


const person03 = {
    fname: 'Lucas',
    age: 19
};

const person04 = {
    fname: 'Levi',
    age: 11
};

function showPerson(country, state) {
    console.log(this.fname);
    console.log(this.age);
    console.log(country, state);
}

showPerson.apply(person03, ['Brasil', 'Bahia']);

showPerson.apply(person04, ['Brasil', 'Bahia']);


const user05 = {
    fname: 'Lucas',
    age: 19
};

const user06 = {
    fname: 'Levi',
    age: 11
};

function showUser(country, state) {
    console.log(this.fname);
    console.log(this.age);
    console.log(country, state);
}

const displayPerson = showUser.bind(user05, 'Brasil', 'Bahia');

displayPerson();