/* eslint-disable */

//Tipos básicos (aqui ocorre inferência de tipos)
let nome: string = "Luiz";
let idade: number = 30;
let adulto: boolean = true; //True ou false
let simbolo: symbol = Symbol("qualquer-symbol");
let big: bigint = 10n;

//Arrays
let arraysDeNumeros_1: Array<number> = [1, 2, 3];
let arraysDeNumeros_2: number[] = [1, 2, 3];

let arraysDeStrings_1: Array<string> = ["a", "b", "c"];
let arraysDeStrings_2: string[] = ["a", "b", "c"];

//Objetos
let pessoa: { nome: string; idade: number; adulto?: boolean } = {//adulto é opcional nesse exemplo. -> "?"
  nome: "Luiz",
  idade: 30,
};

//Funções
function soma_1(x: number, y: number): number { //primeiros "number" = tipagem dos parâmetros, segundo "number" = tipagem da função
  return x + y;
}
/*OU*/
const soma_2: (x: number, y: number) => number = (x, y) => x + y;
