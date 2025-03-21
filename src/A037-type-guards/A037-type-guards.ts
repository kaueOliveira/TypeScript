//Type Guard e uma técnica que permite refinar o tipo de uma variável em tempo de execução.
//É útil quando eu quiser garantir que estou lidando com um tipo especifico antes antes de acessar suas prop. ou mét.  

//Ele pode ser implementado de várias formas.

//Usando typeof.
export function process(value: string | number): void {
    if (typeof value === "string") { //*
        console.log(value.toUpperCase());
    } else {
        console.log(value.toFixed(2));
    }
}

//Usando instanceof.
class Animal {
    makeSound() {
      console.log("Some sound...");
    }
  }
  
  class Dog extends Animal {
    bark() {
      console.log("Woof!");
    }
  }
  
  function checkAnimal(animal: Animal) {
    if (animal instanceof Dog) { //*
      animal.bark(); // TypeScript sabe que `animal` é um `Dog`
    } else {
      animal.makeSound();
    }
  }
  
//Usando in.
type Car = { wheels: 4; brand: string };
type Bike = { wheels: 2; brand: string };

function isCar(vehicle: Car | Bike): vehicle is Car {
  return vehicle.wheels === 4;
}

function checkVehicle(vehicle: Car | Bike) {
  if (isCar(vehicle)) { // Aqui, isCar atua como um Type Guard, pois ele confirma se vehicle é do tipo Car.
    console.log(`É um carro da marca ${vehicle.brand}`);
  } else {
    console.log(`É uma moto da marca ${vehicle.brand}`);
  }
}
