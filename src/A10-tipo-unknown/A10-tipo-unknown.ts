let x: any;

x = 10; 
x = '10';
const y = 800;

console.log(x + y) // 10800

let x_2: unknown;

x_2 = 10; 
x_2 = '10';
const y_2 = 800;

//console.log(x_2 + y) -> Erro precisa checar o tipo antes
if (typeof x_2 === 'number') console.log(x_2 + y_2) //810

// Unknown é um tipo any mais seguro