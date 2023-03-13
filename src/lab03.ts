let raio: number = 0;
let altura: number = 0;

let volume: number = Math.PI * raio ** 2 * altura;
let litros: number = volume / 1000;

console.log(`O cilindro tem um volume de ${volume.toFixed(2)} cm³, o que equivale a ${litros.toFixed(2)} litros.`);