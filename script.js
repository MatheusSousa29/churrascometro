let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

const calcular = () => {
  console.log("Calculando...")
  
  let adultos = inputAdultos.value;
  let criancas = inputCriancas.value;
  let duracao = inputDuracao.value;

  
  let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
  let qdtTotalCerveja = cervejaPP(duracao) * adultos;
  let qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);
  
  resultado.innerHTML = `<p><b>${qdtTotalCarne / 1000} Kg de Carne</b></p>`
  resultado.innerHTML += `<p><b>${Math.ceil(qdtTotalCerveja / 355)} Latas de cerveja</b></p>`
  resultado.innerHTML += `<p><b>${Math.ceil(qdtTotalBebidas / 2000)} Pet's 2 Litros de Refrigerante</b></p>`
 
}

const carnePP = (duracao) => {
    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}

const cervejaPP = (duracao) => {
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}

const bebidasPP = (duracao) => {
    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}


