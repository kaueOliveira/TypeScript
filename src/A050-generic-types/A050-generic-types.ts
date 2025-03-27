//Record
const objeto_1: Record<string, string> = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    //idade: 30 -> Erro! 
};

//Required
type PessoaProtocol = {
    nome?: string;
    sobrenome?: string;
};

type PessoaRequired = Required<PessoaProtocol>; 

const objeto_2: PessoaRequired = {
    nome: 'Felipe',
    sobrenome: 'Melo',
};

//Partial
type PessoaPartial = Partial<PessoaRequired>;

//Pick
type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>;

//Extract e Exclude
type AbC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type TipoExclude = Exclude<AbC, CDE>; //Tipos que estão no primeiro que não estão no segundo.
type TipoExtract = Extract<AbC, CDE>; //Tipos que estão no primeiro e no segundo. 
  