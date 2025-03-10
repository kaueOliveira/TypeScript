"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pessoa = void 0;
let usuario = { nome: "João", idade: 25 };
exports.pessoa = usuario;
let veiculo = { marca: "Honda", ano: 2022 };
let motocicleta = { marca: "Yamaha", cilindradas: 250 };
const VerifyUser = (user, sentValue) => {
    return (user.username === sentValue.username && user.password === sentValue.password);
};
const bdUser = { username: 'Kauê', password: '123456' };
const sentUser = { username: 'Kauê', password: '123456' };
const loggedIn = VerifyUser(bdUser, sentUser);
console.log(loggedIn);
