//Antes
type CoresObj_2 = {
    vermelho: string;
    verde: string;
    azul: string;
};

const coresObj_2 = {
    vermelho: 'red',
    verde: 'green',
    azul: 'blue',
    roxo: 'purple'
};

function traduzirCor_2(cor: 'vermelho' | 'verde' | 'azul', cores: CoresObj_2) {
    return cores[cor];
}

console.log(traduzirCor_2('vermelho', coresObj_2));
console.log(traduzirCor_2('verde', coresObj_2));
console.log(traduzirCor_2('azul', coresObj_2));

//Depois 
type CoresObj_1 = typeof coresObj_1;
type CoresChaves_1 = keyof CoresObj_1;

const coresObj_1 = {
    vermelho: 'red',
    verde: 'green',
    azul: 'blue',
    roxo: 'purple'
};

function traduzirCor_1(cor: CoresChaves_1, cores: CoresObj_1) {
    return cores[cor];
}

console.log(traduzirCor_1('vermelho', coresObj_2));
console.log(traduzirCor_1('verde', coresObj_2));
console.log(traduzirCor_1('azul', coresObj_2));