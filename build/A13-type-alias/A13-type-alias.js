"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pessoa = void 0;
exports.pessoa = {
    idade: 30,
    nome: 'Luiz',
    salario: 200_00,
};
function definirCor(pessoa, cor) {
    return { ...pessoa, corPreferida: cor };
}
console.log(definirCor(exports.pessoa, 'Preto'));
console.log(exports.pessoa);
