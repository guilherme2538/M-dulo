// Importando as funções dos módulos
import { somar } from './somar.mjs';
import { multiplicar } from './multiplicar.mjs';
import { subtracao } from './subtração.mjs';
import { divisao } from './divisão.mjs';
import { potenciacao } from './potenciação.mjs';

// Utilizando as funções importadas 
const numero1 = 5;
const numero2 = 3;

const resultadoSoma = somar(numero1, numero2);
const resultadoSubtracao = subtracao(numero1, numero2);
const resultadoMultiplicacao = multiplicar(numero1, numero2);
const resultadoDivisao = divisao(numero1, numero2).toFixed(2);
const resultadoPotenciacao = potenciacao(numero1, numero2);

console.log(`${numero1} + ${numero2} = ${resultadoSoma}`);
console.log(`${numero1} - ${numero2} = ${resultadoSubtracao}`);
console.log(`${numero1} * ${numero2} = ${resultadoMultiplicacao}`);
console.log(`${numero1} / ${numero2} = ${resultadoDivisao}`);
console.log(`${numero1} ^ ${numero2} = ${resultadoPotenciacao}`);

