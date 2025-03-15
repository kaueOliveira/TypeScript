export class Pessoa {
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


export class Aluno extends Pessoa {
    getNomeCompleto(): string { // Posso subscrever o método.
        return 'Isso vem do aluno' + this.nome + ' ' + this.sobrenome;
      }
}

export class Cliente extends Pessoa { // Posso subscrever o método.
    getNomeCompleto(): string {
        return 'Isso vem do cliente' + this.nome + ' ' + this.sobrenome;
      }
}

const aluno = new Aluno('Luiz', 'Miranda', 18, '123.456.789-10');
const cliente = new Cliente('Mario', 'Fontana', 36, '123.456.789-10');

console.log(aluno, cliente)