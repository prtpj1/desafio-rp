import { rl } from './util/readlineInterface.js';

const isFibonacci = (number) => {
    let currentFiboNumber = 0;
    let nextFiboNumber = 1;

    while (currentFiboNumber <= number) {
        if (currentFiboNumber === number) return `Sim, o número ${number} pertence à sequência de Fibonacci`;

        [currentFiboNumber, nextFiboNumber] = [nextFiboNumber, currentFiboNumber + nextFiboNumber];
    }
    return `Infelizmente o número ${number} não pertence à sequência de Fibonacci.`;
};

export const fibonacciChallenge = async () => {
    const inputNumber = await rl.question('Digite um número para saber se ele pertence ou não à sequência de Fibonacci: ');
    const number = parseInt(inputNumber);

    isNaN(number)
        ? console.log('Por favor, digite um número válido!')
        : console.log(isFibonacci(number));
};
