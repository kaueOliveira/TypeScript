type Veiculo = {
    marca: string; // Se esse tipo mudar!
    ano: number; // Se esse tipo mudar!
};

type Car = {
    brand: Veiculo['marca']; // Esse também muda! 
    year: Veiculo['ano']; // Esse também muda!
    name: string;
}

const carro: Car = {
    brand: 'Ford',
    year: 2025, 
    name: 'Nome',
};

console.log(carro);