//Type Predicate é uma forma de retorno de função que permite ao typeScript reduzir o tipo de uma variável dentro de uma condicional.

function isString(value: unknown): value is string { 
    return typeof value === "string";
}
//No exemplo acima se a função retornar true, então value pode ser tratado como string no código. 