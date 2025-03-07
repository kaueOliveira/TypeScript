"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pessoa = void 0;
function semRetorno(...args) {
    console.log(args.join(' '));
}
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    exibirNome() {
        console.log(this.nome + ' ' + this.sobrenome);
    }
};
exports.pessoa = pessoa;
semRetorno('Luiz', 'Otávio');
pessoa.exibirNome();
