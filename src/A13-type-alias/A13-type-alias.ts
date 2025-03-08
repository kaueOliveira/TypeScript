type Idade = number;
type Pessoa = {
    nome: string;
    idade: Idade;
    salario: number;
    corPreferida?: string;
};

type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type CorPreferida = CorRGB | CorCMYK;

export const pessoa: Pessoa = {
    idade: 30,
    nome: 'Luiz',
    salario: 200_00, //200000
};

function definirCor(pessoa: Pessoa, cor:CorPreferida):Pessoa {
    return {...pessoa, corPreferida: cor};
}

console.log(definirCor(pessoa, 'Preto'))
console.log(pessoa)
