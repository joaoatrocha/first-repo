import {calculaPercentagemRapazes, calculaPercentagemRaparigas} from './lab01'

console.log("Hello!")

let rapazes: number = 10
let raparigas: number = 20
let percentagemDeRapazes: number = 0.0;
let percentagemDeRaparigas: number = 0.0;
percentagemDeRapazes = calculaPercentagemRapazes(rapazes, raparigas);
percentagemDeRaparigas = calculaPercentagemRaparigas(rapazes, raparigas);

console.log("percentagem de rapazes =  "+ calculaPercentagemRapazes);
console.log("percentagem de raparigas ="+ calculaPercentagemRaparigas);