//O Structural Type System no Typescript significa que o sistema de tipos é baseado na forma (estrutura) dos objetos, e nao em suas identidades ou nomes. 
// Isso significa que, se dois objetos têm a mesma estrutura, eles são considerados do mesmo tipo, mesmo que não tenham relação explícita entre si. 

type Pessoa = { nome: string; idade: number };

let usuario = { nome: "João", idade: 25 };

export let pessoa: Pessoa = usuario; // ✅ Funciona porque as estruturas são compatíveis

type Carro = { marca: string; ano: number };
type Moto = { marca: string; cilindradas: number };

let veiculo: Carro = { marca: "Honda", ano: 2022 };
let motocicleta: Moto = { marca: "Yamaha", cilindradas: 250 };

//veiculo = motocicleta; // ❌ Erro: propriedades não são compatíveis


//Ex-2

type VerifyUser = (user: User, setValue: User) => boolean;
type User = { username: string; password: string };

const VerifyUser: VerifyUser = (user, sentValue) => {
    return (
        user.username === sentValue.username && user.password === sentValue.password
    );
};

const bdUser = { username: 'Kauê', password: '123456' }
const sentUser = { username: 'Kauê', password: '123456' }
const loggedIn = VerifyUser(bdUser, sentUser);

console.log(loggedIn)