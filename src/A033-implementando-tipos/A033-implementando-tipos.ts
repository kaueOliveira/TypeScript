//Antes
export abstract class TipoPessoa_1 {
    protected abstract nome: string;
    protected abstract sobrenome: string;
    protected abstract nomeCompleto(): string;
}

export class Pessoa_1 extends TipoPessoa_1 {
    constructor(public nome: string, public sobrenome: string) {
        super();
    }

    nomeCompleto(): string {
        return this.nome + ' ' + this.sobrenome;
    }
}

const pessoa_1 = new Pessoa_1('Luiz', 'Miranda');
console.log(pessoa_1.nomeCompleto());


//Depois
type TipoPessoa_2 = {
    nome: string;
    sobrenome: string;
    nomeCompleto(): string;
};

export class Pessoa_2 implements TipoPessoa_2 {
    constructor(public nome: string, public sobrenome: string) {}

    nomeCompleto(): string {
        return this.nome + ' ' + this.sobrenome;
    }
}

const pessoa_2 = new Pessoa_2('Luiz', 'Miranda');
console.log(pessoa_2.nomeCompleto()); 


//Implementando vários tipos.
type TipoNome = {
    nome: string;
};

type TipoSobrenome = {
    sobrenome: string;
};

type TipoNomeCompleto = {
    nomeCompleto: () => string; //nomeCompleto(): string;
};

export class Pessoa_3 implements TipoNome, TipoSobrenome, TipoNomeCompleto {
    constructor(public nome: string, public sobrenome: string) {}

    nomeCompleto(): string {
        return this.nome + ' ' + this.sobrenome;
    }
}

const pessoa_3 = new Pessoa_3('Luiz', 'Miranda');
console.log(pessoa_3.nomeCompleto());