export const sumQuestion = () => {
    let INDICE = 12;
    let SOMA = 0;
    let K = 1;

    while (K <= INDICE) {
        K += 1;
        SOMA = SOMA + K;
    }
    console.log(`O valor da variável SOMA é: ${SOMA}`);
    
};