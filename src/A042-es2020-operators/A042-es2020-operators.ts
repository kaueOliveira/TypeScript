//Encadeamento opcional.
type Documento_1 = {
    titulo: string;
    texto: string;
    data?: Date;
};

const documento_1: Documento_1 = {
    titulo: 'Ordem de Despejo',
    texto: 'Pague o Aluguel',
};

//console.log(documento.data.toDateString()); Erro, "data" não existe, "data" é  undefined.
console.log(documento_1.data?.toDateString()); // O método só é chamado se "date" for definido. 

//Coalescência nula.
type Documento_2 = {
    titulo: string;
    texto: string;
    data?: Date;
};

const documento_2: Documento_2 = {
    titulo: 'Ordem de Despejo',
    texto: 'Pague o Aluguel',
};

console.log(documento_2.data?.toDateString() ?? 'Não existe "data"'); //Se "date" for "undefined" ou "null" a mensagem aparecerá. 