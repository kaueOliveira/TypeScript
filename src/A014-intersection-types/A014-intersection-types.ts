type TemNome = { nome: string }; 
type TemSobrenome = { sobrenome: string};
type TemIdade = { idade: number };
type Pessoa = TemNome | TemSobrenome | TemIdade;

export const pessoa: Pessoa = { //N é obrigatório usar os 3 atributos.
  nome: 'Luiz',  
};

console.log(pessoa);

type Pessoa_2 = TemNome & TemSobrenome & TemIdade; // AND

export const pessoa_2: Pessoa_2 = { //É obrigatório usar os 3 atributos.
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,  
};

console.log(pessoa_2);

//OBS

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'A' | 'D';

type Intersecao = AB & AC & AD; //A