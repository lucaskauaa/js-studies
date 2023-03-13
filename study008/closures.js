const name = 'Lucas';

function showName () {
    const name = 'Kauã';
    return function () {
        return name;
    }
}

const displayName = showName();

console.log(displayName());



let c = 10;

function counter() {
    let c = 0;
    return function () {
        c++;
        return c;
    }
}

const add = counter();

console.log(add());


const fname = 'Levi';

function test() {
    const fname = 'Lucas';
    return function () {
        const fname = 'Kauã';
        console.log(fname);
    }
}

const showFname = test();

showFname();


function lib () {
    function add10 (n) {
        return n + 10;
    }

    return {
        add5() {
            return add10(5);
        },
        add7() {
            return add10(7);
        }
    }
}

const library = lib();

console.log(library.add5());

console.log(library.add7());



const x = 0;

function foo() {
    const x = 10;
    return function () {
        return x;
    }
}

const bar = foo();

function baz() {
    let x = 20;
    return bar();
}

console.log(baz());