let inputAdultos = document.querySelector("#adultos");
let inputcriancas = document.querySelector("#criancas");
let inputduracao = document.querySelector("#duracao");

let inputresultado = document.querySelector("#resultado");

calcular = () => {
    let adultos = inputAdultos.value;
    let criancas = inputcriancas.value;
    let duracao = inputduracao.value;
    let carne = carnePorPessoa(duracao);

    let qtdTotalCarne = carne * adultos + (carne / 2 * criancas);
    let qtdTotalCerveja = cervejaPorPessoa(duracao) * adultos;
    let qtdTotalbebidas = bebidasPorPessoa(duracao) * adultos + (bebidasPorPessoa(duracao) / 2 * criancas);

    resultado.innerHTML = `<p>${qtdTotalCarne / 1000}kg de carne</p>`;
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 355)} latas de cerveja</p>`;
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalbebidas / 2000)} Pet's 2l de bebida</p>`;

}

carnePorPessoa = () => {
    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}

cervejaPorPessoa = () => {
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}

bebidasPorPessoa = () => {
    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}