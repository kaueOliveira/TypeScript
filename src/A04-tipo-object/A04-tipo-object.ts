const objetoA = {
    chaveA: 'Valor A',
    chaveB: 'Valor B',
};

objetoA.chaveA = 'Outro Valor';
//objetoA.chaveC = 'Nova Chave'; -> N Funciona

const objetoB: {
    chaveA:string;
    chaveB:string;
    chaveC?:string;
    [key: string]: unknown; // index signature
} = {
    chaveA: 'Valor A',
    chaveB: 'Valor B',
};

objetoB.chaveA = 'Outro Valor';
objetoB.chaveC = 'Nova Chave'; 
objetoB.chaveD = 'Nova Chave'; 

//readonly ->