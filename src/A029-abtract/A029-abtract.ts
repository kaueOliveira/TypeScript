export abstract class Personagem { //*ex-1
  protected abstract emoji: string; //*ex-3

  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number
  ) {}

  atacar(personagem: Personagem): void {
    this.bordao( )
    personagem.perderVida(this.ataque); //Esse this é quem está atacando.
  }

  perderVida(forcaAtaque: number): void {
      this.vida -= forcaAtaque; //Esse this é quem está defendendo.
      console.log(`${this.emoji} - ${this.nome} agora tem ${this.vida} de vida...`)
  }

  abstract bordao(): void; //*ex-2
}

export class Guerreira extends Personagem {
    protected emoji = '\U{1F9DD}'

    bordao(): void{
        console.log(this.emoji + 'Guerreira ao Ataque!');
    }
}
export class Monstro extends Personagem {
    protected emoji = '\U{1F9DF}'

    bordao(): void{
        console.log(this.emoji + 'Monstro ao Ataque!');
    }
}

const guerreira = new Guerreira('Guerreira', 100, 1000);
const monstro = new Guerreira('Monstro', 85, 1000);

guerreira.atacar(monstro);
monstro.atacar(guerreira);

//Classes, Métodos e Atributos abstratos são usados para definir estruturas que servem como base para outras classe.

//Classe abstrata: Não pode ser instanciada. É usada como base para outras classes. -> ex-1
//Método abstrato: Obrigatório ser implementado nas subclasses. -> ex-2
//Atributo abstrato: Não existe diretamente, mas podemos simular isso ao exigir que subclasses forneçam um valor para determinados atributos. -> ex-3