import { rl } from './util/readlineInterface.js';
import { fibonacciChallenge } from './01-fibonacci.js';
import { repeatedCharacterChallenge } from './02-find-repeated-characters.js';
import { sumQuestion } from './03-sum.js';
import { nextElementQuestion } from './04-next-element.js';
import { switchersAndLampsQuestion } from './05-switchers-and-lamps.js';

const clearScreen = () => console.clear();

const main = async () => {
    clearScreen();
    console.log('Escolha qual desafio você gostaria de executar:');
    console.log('Digite 1 para o desafio Fibonacci:');
    console.log('Digite 2 para o desafio da letra repetida:');
    console.log('Digite 3 para o desafio de soma:');
    console.log('Digite 4 para saber o resultado das sequências numéricas:');
    console.log('Digite 5 para saber a resposta da questão das 3 lampadas:');
    console.log('Digite 6 para encerrar:');

    const choice = await rl.question('Digite o número baseado nas opções acima: ');

    switch (choice) {
        case '1':
            await fibonacciChallenge();
            break;
        case '2':
            await repeatedCharacterChallenge();
            break;
        case '3':
            sumQuestion();
            break;
        case '4':
            nextElementQuestion();
            break;
        case '5':
            switchersAndLampsQuestion();
            break;
        case '6':
            rl.close();
            return;
        default:
            console.log('Opção inválida. Tente novamente');
    }

    await rl.question('Pressione ENTER para voltar ao menu e escolher outra opção...');
    clearScreen();
    await main();
};

main();