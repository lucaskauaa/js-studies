let i = 1;

while (i <= 10) {
    console.log(i);
    i++;
}

let c = 1;

while (c <= 10) {
    console.log(c + 10);
    c++;
}

let x = 10;

while (x > 0) {
    console.log(x);
    x--;
}


let y = 0;

do {
    console.log(y);
    y++;
} while (y <= 10 && y >= 1)


for (let i = 0; i <= 10; i++) {
    console.log(i);
}

for (let i = 100; i > 0; i--) {
    console.log(i);
}


for(let i = 0; i <= 10; i++) {
    if(i === 5) {
        console.log(i);
        break
    }
    console.log(i);
}

for (let i = 10; i > 0; i--) {
    if (i === 5) {
        console.log(i);
        break;
    }
    console.log(i);
}


for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}

for (let i = 10; i > 0; i--) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}

let a = 0;

while (a < 10) {
    if(a % 2 === 0) {
        a++
        continue;
    }
    console.log(a);
    a++;
}


let b = 0;

let test = true;

while (test) {
    console.log(`${b}: Executando`);
    if(b === 7) {
        console.log('Fim da execução');
        test = false;
    }
    b++;
}

let d = 0;

while (d <= 10) {
    if(d === 7) {
        console.log(`${d}: Fim da execução`);
        break;
    }
    console.log(`${d}: Executando`);
    d++;
}


const fullName = ['Lucas', 'Kauã', 'Neves', 'de', 'Almeida', 'da', 'Costa'];

for (let i = 0; i < fullName.length; i++) {
    console.log(fullName[i]);
}

for (let i = fullName.length - 1; i >= 0; i--) {
    console.log(fullName[i]);
}

for (let i of fullName) {
    console.log(i);
}

for (let i of fullName) {
    if(i.length <= 2) {
        continue;
    }
    console.log(i);
}

for (let i of fullName.reverse()) {
    console.log(i);
}


const user = {
    fName: 'Lucas',
    sName: 'Kauã',
    age: 19,
    country: 'Brasil',
    state: 'BA'
};

for (let i in user) {
    console.log(user[i]);
}

for (let i in user) {
    if (i === 'age') {
        continue;
    }
    console.log(user[i]);
}


let e = 1;

let f;

while (e <= 5) {
    f = 1;
    while(f <= 3) {
        console.log(e, f)
        f++;
    }
    e++;
}

for (let i = 1; i <= 5; i++) {
    for (let c = 1; c <= 5; c++) {
        console.log(i, c);
    }
}

for (let i = 0; i <= 100; i+= 2) {
    console.log(i)
}

for (let i = 0; i <= 100; i+= 5) {
    console.log(i);
}

for (let i = 1; i <= 10000; i*= 2) {
    console.log(i);
}

for (let i = 100; i > 0; i-= 2) {
    console.log(i);
}

for (let i = 100; i > 0; i-= 5) {
    console.log(i);
}

for (let i = 1000; i >= 1; i/= 5) {
    console.log(i);
}