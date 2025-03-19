export class Escritor {
    private _ferramenta: Ferramenta | null = null;

    constructor(private _nome: string) {}

    get nome(): string { // Dá acesso ao nome do escritor.
        return this._nome;
    }

    set ferramenta(ferramenta: Ferramenta | null) {
        this._ferramenta = ferramenta;
    }

    get ferramenta(): Ferramenta | null { 
        return this._ferramenta;
    }

    escrever(): void {
        if (this.ferramenta === null) {
            console.log('Não posso escrever sem ferramenta...');
            return;
        }
        this.ferramenta.escrever() //Se o escritor tiver uma ferramenta, chamamos o método escrever() da ferramenta.
    }
}

export abstract class Ferramenta { // serve como um modelo para outras ferramentas.
    constructor(private _nome: string) {}
    abstract escrever(): void;

    get nome(): string {
        return this._nome
    }
}

export class Caneta extends Ferramenta {
    escrever(): void {
        console.log(`${this.nome} está escrevendo...`);
    }
}

export class MaquinaEscrever extends Ferramenta {
    escrever(): void {
        console.log(`${this.nome} está digitando...`);
    }
}

const escritor = new Escritor('Luiz');
const caneta = new Caneta('Bic');
const maquinaEscrever = new MaquinaEscrever('IBM');

escritor.ferramenta = caneta;
escritor.escrever();

// Associação simples: Ocorre quando uma classe contém uma referência a outra classe como um atributo. 
// Isso cria um relacionamento entre as classes sem que uma dependa diretamente da implementação da outra.

//No caso acima A associação acontece entre as classes Escritor e Ferramenta. 
//O Escritor possui um atributo privado _ferramenta, que pode armazenar uma instância de qualquer classe derivada de Ferramenta (Caneta ou MaquinaEscrever).