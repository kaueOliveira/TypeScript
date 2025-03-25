//Generics em interfaces. 
interface PessoaProtocolo_1<T = string, U = number> {
    nome: T;
    sobrenome: T;
    idade: U;
}; 

const aluno_1: PessoaProtocolo_1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
};

//ou

interface PessoaProtocolo_2<T, U> {
    nome: T;
    sobrenome: T;
    idade: U;
}; 

const aluno_2: PessoaProtocolo_2<string, number> = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
};

//Generics em types
type PessoaProtocolo_3<T = string, U = number> = {
    nome: T;
    sobrenome: T;
    idade: U;
};

const aluno_3: PessoaProtocolo_3 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
};

//ou

type PessoaProtocolo_4<T, U> = {
    nome: T;
    sobrenome: T;
    idade: U;
}; 

const aluno_4: PessoaProtocolo_4<string, number> = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
};
