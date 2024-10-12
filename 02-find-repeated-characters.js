import { rl } from './util/readlineInterface.js';

const isRepeatedCharacter = (character, word) => {
    const lowerCaseWord = word.toLowerCase();
    const lowerCaseChar = character.toLowerCase();
    let count = 0;

    for (const char of lowerCaseWord) {
        if (char === lowerCaseChar) count += 1;
    }

    return count > 0
        ? `A letra \"${character}\" aparece ${count} vez(es) na palavra \"${word}\"`
        : `A letra \"${character}\" não aparece nenhuma vez na palavra \"${word}\"`;
};

export const repeatedCharacterChallenge = async () => {
    const word = await rl.question('Digite uma palavra: ');
    const char = await rl.question('Digite uma letra:');

    console.log(isRepeatedCharacter(char, word));
};
