const age = 19;

if (age >= 18) {
    console.log('Maior de Idade!');
} else {
    console.log('Menor de idade!');
}

if (age < 12) {
    console.log('Criança');
} else if (age < 18) {
    console.log('Adolescente');
} else if (age < 30) {
    console.log('Jovem adulto');
} else if (age < 60) {
    console.log('Adulto');
} else {
    console.log('Idoso');
}


age >= 18 ? console.log('Maior de idade!') : console.log('Menor de idade!');

const country = 'Brasil';

country === 'Brasil' ? console.log('Brasileiro') : console.log('Estrangeiro');

const nacionality = country === 'Brasil' ? 'Brasileiro' : 'Estrengeiro';

console.log(nacionality);


const color = 'Laranja';

switch (color) {
    case 'Preto':
        console.log('Cor: Preto');
        break;
    case 'Vermelho':
        console.log('Cor: Vermelho');
        break;
    case 'Azul':
        console.log('Cor: Azivis');
        break;
    case 'Amarelo':
        console.log('Cor: Amarelo');
        break;
    default: 
        console.log('Cor não detectada');
        break;
}


switch (color) {
    case 'Vermelho':
    case 'Amarelo':
    case 'Laranja': 
        console.log('Cor QUENTE detectada!');
        break;
    case 'Azul':
    case 'Roxo':
    case 'Cinza':
        console.log('Cor FRIA detecatada!');
        break;
    default: 
        console.log('Cor não detectada!');
        break;
}



const operator = '*';

const checkOperator = (operator) => {
    switch (operator) {
        case '-':
            return minus = (a, b) => a - b;
        case '*':
            return mult = (a, b) => a * b;
        case '/':
            return div = (a, b) => a / b;
    }   
}

const calc = operator === '+' ? sum = (a, b) => a + b : checkOperator(operator);

console.log(calc(5, 10));