//Os tipos não serão inferidos ao instanciar uma classe ou chamar uma função se os valores forem enviados depois.

export class Pilha<T> {
    private contador = 0; //O contador sempre aponta para a próxima posição livre.
    private elementos: { [k: number]: T } = {}; //Index Signature.
    // "elementos" é um objeto onde as chaves (k) são números e os valores (T) podem ser de qualquer tipo genérico.

    push(elemento: T): void {
        this.elementos[this.contador] = elemento;
        this.contador++;
    }

    pop(): T | void {
        if (this.estaVazia()) return undefined;

        this.contador--;
        const elemento = this.elementos[this.contador]; //Obtém o último elemento. 
        delete this.elementos[this.contador]; //Remove o elemento
        return elemento; //Retorna o elemento removido
    }

    estaVazia(): boolean {
        return this.contador === 0;
    }

    tamanho(): number {
        return this.contador;
    } 

    mostrarPilha(): void {
        for (const chave in this.elementos) {
            console.log(this.elementos[chave]);
        }
    }
} 

const pilha_1 = new Pilha (); //Não consegue inferir o tipo.
pilha_1.push(1);
pilha_1.push('2');

const pilha_2 = new Pilha<number | string> (); //O tipo é inferido aqui.
pilha_2.push(1);
pilha_2.push('2');