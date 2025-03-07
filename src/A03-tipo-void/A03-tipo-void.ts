function semRetorno(...args: string[]):void {
    console.log(args.join(' '));
}

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',

    exibirNome(): void {
        console.log(this.nome + ' ' + this.sobrenome);
    }
}

semRetorno('Luiz', 'Otávio');
pessoa.exibirNome();

export { pessoa };

//Em TypeScript, o tipo void é usado para indicar que uma função não retorna um valor útil. Ele é comumente utilizado em funções que executam uma ação, mas não precisam retornar nada.