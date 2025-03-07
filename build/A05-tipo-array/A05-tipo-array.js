"use strict";
function multiplicaArgs(...args) {
    return args.reduce((ac, valor) => ac * valor, 1);
}
const result = multiplicaArgs(1, 2, 3);
function concatenaString(...args) {
    return args.reduce((ac, valor) => ac + valor);
}
const concat = concatenaString('a', 'b', 'c');
function toUpperCase(...args) {
    return args.map((valor) => valor.toUpperCase());
}
const upper = toUpperCase('a', 'b', 'c');
