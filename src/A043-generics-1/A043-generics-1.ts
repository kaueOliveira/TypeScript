const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrayFiltradoOriginal = array.filter((value) => value < 5);
console.log(arrayFiltradoOriginal);


// Criando um filter manualmente
type FilterCallback = (
    value: unknown,
    index?: number,
    array?: unknown[],
) => boolean;

export function meuFilter_1(array: unknown[], callbackfn: FilterCallback,): unknown[] {
    const novoArray = [];

    for (let i = 0; i < array.length; i++) {
        if (callbackfn(array[i])) {
            novoArray.push(array[i]);
        }
    }

    return novoArray;
}

const arrayFiltrado = meuFilter_1(array, (value) => { //A "callbackfn" está aqui. 
    if(typeof value === 'number') return value < 5;
    return false;
})

console.log(arrayFiltrado)

// Criando um filter manualmente usando generic
type FilterCallback_2<U> = (value: U, index?: number, array?: U[]) => boolean;

export function meuFilter_2<T>(array: T[], callbackfn_2: FilterCallback_2<T>): T[] {
    const novoArray = [];

    for (let i = 0; i < array.length; i++) {
        if (callbackfn_2(array[i])) {
            novoArray.push(array[i]);
        }
    }

    return novoArray;
}

const arrayFiltrado_2 = meuFilter_2(array, (value) => value < 5); //A "callbackfn_2" está aqui. 

console.log(arrayFiltrado_2)
