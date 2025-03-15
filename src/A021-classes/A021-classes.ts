export class Empresa {
    public readonly nome: string; //public não necessário (redundante).
    private readonly colaboradores: Colaborador[] = [];
    protected readonly cnpj: string;

    constructor(nome: string, cnpj: string) {
        this.nome = nome;
        this.cnpj = cnpj;
    }

    adicionaColaborador(colaborador: Colaborador): void { //Método que add colaboradores a propriedade. 
        this.colaboradores.push(colaborador);
    }
}

export class Colaborador {
    constructor(
        public readonly nome: string, //Aqui o public é obrigatório.
        public readonly sobrenome: string) {

    }
}

const empresa_1 = new Empresa('Udemy', '11.111.111/0001-11');
//empresa_1.nome = 'Facebook' -> Não pode mudar por ser ReadOnly.

const colaborador_1 = new Colaborador ('Luiz', 'Otávio');
const colaborador_2 = new Colaborador ('Mario', 'Miranda');

empresa_1.adicionaColaborador(colaborador_1); //Adicionando colaborador através do método.
empresa_1.adicionaColaborador(colaborador_2);

console.log(empresa_1);
  