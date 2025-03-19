export class CarrinhoDeCompras {
    private readonly produtos: Produto[] = [];

    inserirProdutos(...produtos: Produto[]): void {
        for (const produto of produtos) {
            this.produtos.push(produto);
        }
    }

    quantidadeProdutos(): number {
        return this.produtos.length;
    }

    valorTotal(): number {
        return this.produtos.reduce((soma, produto) => soma + produto.preco, 0); // Reduce é usado para reduzir o array a um único valor, acumulando um resultado final.
        // soma: O valor acumulado da iteração anterior, produto:  elemento atual do array sendo processado, 0 valor inicial.
    }
}

export class Produto {
    constructor(public nome: string, public preco: number) {}
}

const produto1 = new Produto('camiseta', 50);
const produto2 = new Produto('caneca', 15);
const produto3 = new Produto('caneta', 2);

const carrinhoDeCompras = new CarrinhoDeCompras();
carrinhoDeCompras.inserirProdutos(produto1, produto2, produto3);
console.log(carrinhoDeCompras.valorTotal());
console.log(carrinhoDeCompras.quantidadeProdutos());

//A agregação é um tipo de relacionamento em que uma classe contém instâncias de outra classe como parte de sua estrutura.
//Mas essas instâncias podem existir independentemente da classe que as contém.
//Em outras palavras, a agregação representa uma relação mas sem um vínculo de dependência forte.