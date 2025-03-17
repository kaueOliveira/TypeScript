export class Pessoa {
    static idadePadrao = 0;
    static cpfPadrao = '000.000.000-00';

    constructor(
        public nome: string,
        public sobrenome: string,
        public idade: number,
        public cpf: string,
    ) {}

    static falaOi(): void {
        console.log('Oi');
    }

    static criaPessoa(nome: string, sobrenome: string): Pessoa { //Factory Method - GoF
        //return new Pessoa(nome, sobrenome, 0, '000.000.000-00');
        return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
    }

    metodoNormal(): void { //Exemplo e Método Normal.
        //console.log(this.idadePadrao, this.cpfPadrao) -> N funciona
        console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao)
    }
} 

const pessoa_1 = new Pessoa('Luiz', 'Miranda', 30, '123.456.789-10' );
//pessoa_1.falaOi() -> n Funciona
Pessoa.falaOi();

const pessoa_2 = Pessoa.criaPessoa('Kauê', 'Oliveira');
console.log(pessoa_2);

//Atributos e métodos estáticos pertencem a própria classe em vez de as instâncias da classe.
//Isso significa que eles podem ser acessados diretamente a partir da classe, sem precisar criar um objeto dela.