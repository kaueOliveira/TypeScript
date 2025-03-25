// Overload de funções permite definir múltiplas assinaturas para uma mesma função, permitindo diferentes tipos e quantidades de argumentos.
// Assinatura de função define a estrutura da função, especificando os parâmetros e o tipo de retorno, sem incluir a implementação.

type Adder = {
    (x: number): number;
    (x: number, y: number): number;
    (...arg: number[]): number;
};

const adder: Adder = (x: number, y?: number, ...args: number[]) => {
    if (args.length > 0) return args.reduce((s, v) => s + v, 0) + x + (y || 0);
    return x + (y || 0);
};


// Declarando explicitamente.
console.log(adder(1));
console.log(adder(1, 2));
console.log(adder(1, 2, 3));

function adder_2(x: number): number;
function adder_2(x: number, y: number): number;
function adder_2(...args: number[]): number;

function adder_2(x: number, y?: number, ...args: number[]): number {
    return x + (y || 0) + args.reduce((sum, val) => sum + val, 0);
}