// Maneira antiga de Usar Getters e Setters.

export class Pessoa {
    constructor(
        private nome: string,
        private sobrenome: string,
        private idade: number,
        private cpf: string,
    ) {}

    setCpf(valor: string): void {
        this.cpf = valor;
    }

    getCpf(): string {
        return this.cpf.replace(/\D/g, '');
    }
} 

const pessoa = new Pessoa('Luiz', 'Miranda', 30, '123.456.789-10' );
pessoa.setCpf('123.456.798-99');
console.log(pessoa.getCpf());

// Maneira que o ts Usa.

export class Pessoa_2 {
    constructor(
        private nome: string,
        private sobrenome: string,
        private idade: number,
        private _cpf: string,
    ) {}

    set cpf(valor: string) {
        this._cpf = valor;
    }

    get cpf(): string {
        return this._cpf.replace(/\D/g, '');
    }
} 

const pessoa_2 = new Pessoa_2('Luiz', 'Miranda', 30, '123.456.789-10' );
pessoa_2.cpf = '123.456.798-99';
console.log(pessoa_2.cpf);