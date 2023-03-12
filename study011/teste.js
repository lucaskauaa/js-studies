function ConstructorUser (fname, sname, age, country) {
    this.fname = fname,
    this.sname = sname,
    this.age = age,
    this.country = country
}

const user01 = new ConstructorUser('Lucas', 'Kauã', 19, 'Brasil');

console.log(user01);

const user02 = new ConstructorUser('Levi', 'Neves', 11, 'Brasil');

console.log(user02);


function Cars(brand, model, year, color) {
    this.brand = brand,
    this.model = model,
    this.year = year,
    this.color = color
}

const car01 = new Cars('Chevrolet', 'Astra', 2013, 'Preto');

console.log(car01);

const car02 = new Cars('Hyundai', 'i30', 2013, 'Prata');

console.log(car02);

const car03 = new Cars('Mitsubish', 'Lancer', 2010, 'Branco');

console.log(car03);

const car04 = new Cars('VolksWagen', 'Golf GTI', 2022, 'Branco');

console.log(car04);

const car05 = new Cars('Honda', 'Civic', 2021, 'Cinza');

console.log(car05);