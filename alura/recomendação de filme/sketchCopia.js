let campoOrcamento;
let campoPraia;
let campoCidadeGrande;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de lugares para conhecer");
  createSpan("Quanto você pode gastar R$");
  campoOrcamento = createInput("1000");
  campoPraia = createCheckbox("Gosta de Praia?");
  campoCidadeGrande = createCheckbox("Gosta de cidades grandes?");
}

function draw() {
  background("white");
  let orcamento = parseFloat(campoOrcamento.value());
  let gostaDePraia = campoPraia.checked();
  let gostaDeCidadesGrandes = campoCidadeGrande.checked();
  let recomendacao = geraRecomendacao(orcamento, gostaDePraia, gostaDeCidadesGrandes);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(orcamento, gostaDePraia, gostaDeCidadesGrandes) {
  if (orcamento >= 1000) {
    if (gostaDePraia) {
      return "Rio de Janeiro - ótimo para quem gosta de praias e cidade grande.";
    } else if (gostaDeCidadesGrandes) {
      return "São Paulo - ideal para quem gosta do agito das grandes cidades.";
    } else {
      return "Gramado - perfeito para quem busca um lugar tranquilo e charmoso.";
    }
  } else if (orcamento >= 500) {
    if (gostaDePraia) {
      return "Búzios - excelente para quem quer praias lindas com orçamento moderado.";
    } else if (gostaDeCidadesGrandes) {
      return "Curitiba - uma grande cidade com muitos parques e um custo de vida razoável.";
    } else {
      return "Ouro Preto - cidade histórica com muita cultura e beleza.";
    }
  } else {
    if (gostaDePraia) {
      return "Maragogi - conhecida como o Caribe brasileiro, com preços mais acessíveis.";
    } else if (gostaDeCidadesGrandes) {
      return "Belo Horizonte - cidade grande com muita cultura e opções de lazer econômicas.";
    } else {
      return "Petrópolis - cidade com clima de montanha e muita história.";
    }
  }
}