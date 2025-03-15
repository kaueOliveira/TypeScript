export function funcao(this: Date, nome: string, age: number): void {
    console.log(this);
    console.log(nome, age);
}

//funcao('Luiz', 30) -> n funciona.
funcao.call(new Date(), 'Luiz', 30);
funcao.apply(new Date(), ['Luiz', 30]);


//O call() e o apply() são métodos do JavaScript usados para invocar funções e especificar o valor de this explicitamente. 
//Ambos fazem praticamente a mesma coisa, mas diferem na maneira como os argumentos são passados.