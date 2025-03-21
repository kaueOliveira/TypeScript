// Declaration Merging
interface Pessoa {
    nome: string;
}

interface Pessoa {
   readonly sobrenome: string;
}

interface Pessoa {
    readonly enderecos: readonly string[];
}

interface Pessoa {
   readonly idade?: number; // O "?" torna a propriedade opcional. 
}

export const pessoa: Pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    enderecos: ['AV. Brasil'],
    idade: 30,
}

console.log(pessoa);