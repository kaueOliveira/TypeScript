export class Pessoa { //Super
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}


export class Aluno extends Pessoa { //Sub
  constructor (
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string, //Criando um atributo próprio de aluno.
    //OBS os modificadores (public e private são retirados dos atributos que já estão na Super)
  ) {
    super(nome, sobrenome, idade, cpf);
  }

  getNomeCompleto(): string { 
    console.log('Fazendo Algo Antes');
    const result = super.getNomeCompleto();
    return result + 'Heyyyyy!';
  }
}

const aluno = new Aluno('Luiz', 'Miranda', 18, '123.456.789-10', 'B1');

console.log(aluno)