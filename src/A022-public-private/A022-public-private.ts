//Em TypeScript, public e private são modificadores de acesso usados para controlar a visibilidade de propriedades e métodos dentro de uma classe.

//Public permite que a propriedade ou método seja acessado de qualquer lugar.
class Pessoa {
    public nome: string;
  
    constructor(nome: string) {
      this.nome = nome;
    }
  
    public dizerOla() {
      console.log(`Olá, meu nome é ${this.nome}`);
    }
  }
  
  export const pessoa = new Pessoa("João");
  console.log(pessoa.nome); // ✅ Acesso permitido
  pessoa.dizerOla();        // ✅ Acesso permitido
  
  //Private restringe o acesso a propriedades e métodos para dentro da própria classe. Não pode ser acessado fora da classe, nem por subclasses.

  class ContaBancaria {
    private saldo: number;
  
    constructor(saldoInicial: number) {
      this.saldo = saldoInicial;
    }
  
    public depositar(valor: number) {
      this.saldo += valor;
    }
  
    public verSaldo() {
      console.log(`Saldo: R$${this.saldo}`);
    }
  }
  
  const conta = new ContaBancaria(100);
  conta.depositar(50);
  conta.verSaldo(); // ✅ Funciona, pois o método é público

  //console.log(conta.saldo); ❌ Erro: 'saldo' é privado

