const calculadora = require("../models/calculadora.js");

test("um mais um", () => {
    const resultado = calculadora.somar(1, 1);
    expect(resultado).toBe(2);
})