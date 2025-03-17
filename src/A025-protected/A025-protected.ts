//Em TypeScript, protected é um modificador de acesso utilizado em classes para restringir a visibilidade de propriedades e métodos. 
//Ele funciona de forma semelhante ao private, mas com uma diferença importante. 
//Propriedades ou métodos podem ser acessado dentro da própria classe e também em classes que herdam dela (subclasses).

class Animal {
    protected nome: string;
  
    constructor(nome: string) {
      this.nome = nome;
    }
  
    protected emitirSom(): void {
      console.log("Som genérico");
    }
  }
  
  class Cachorro extends Animal {
    constructor(nome: string) {
      super(nome);
    }
  
    latir(): void {
      console.log(`${this.nome} está latindo!`); // Pode acessar `nome` pois é protected
      this.emitirSom(); // Pode chamar `emitirSom` pois é protected
    }
  }
  
  const dog = new Cachorro("Rex");
  dog.latir(); // Rex está latindo!
  
  // Erro: nome e emitirSom são protegidos e não podem ser acessados fora da classe ou subclasses
  // console.log(dog.nome);
  // dog.emitirSom();
  