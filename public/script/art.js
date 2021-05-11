

ordenar();
imprime();

function ordenar() {
  var ordem = parseInt(document.getElementById("ordenarFilmes").value);

  if (ordem == 3) {
    arraySort(novoArrayMovies, 1);
  }

  arraySort(novoArrayMovies, ordem);
  imprime();
}

function imprime() {
  var montaDiv, anoImpresso, filtro;
  var ordem = parseInt(document.getElementById("ordenarFilmes").value);

  var div = document.querySelector(".container-total"); //Mapeia o HTML em busca de um elemento com a classe '.container-total'
  div.innerHTML = "";

  filtro = ordem == 3 ? "Cronologia: " : "Lançamento: ";

  for (var x = 0; x < novoArrayMovies.length; x++) {
    let tagH2 = document.createElement("h2");
    let tagA = document.createElement("a");
    let tagImage = document.createElement("img");
    let tagDivFilme = document.createElement("div"); //Cria um elemento '<div>'

    tagH2.innerHTML =
      novoArrayMovies[x].nome +
      "<br>" +
      filtro +
      parseInt(
        ordem == 3
          ? novoArrayMovies[x].anoCronologico
          : novoArrayMovies[x].anoLancamento
      );
    tagA.href = novoArrayMovies[x].linkPagina;
    tagA.target = "_blank";
    tagImage.src = novoArrayMovies[x].linkImagem;
    tagImage.alt = novoArrayMovies[x].nome;
    tagDivFilme.classList.add("container-movies"); //Adiciono uma classe ao elemento
    tagA.appendChild(tagImage);
    tagDivFilme.appendChild(tagH2);
    tagDivFilme.appendChild(tagA);
    div.appendChild(tagDivFilme); // Adiciono a div filme dentro da div principal
  }
}

function filme(nomeFilme, anoLanc, imagem, anoCron, linkPag) {
  var filme = {
    nome: nomeFilme,
    anoLancamento: anoLanc,
    linkImagem: imagem,
    anoCronologico: anoCron,
    linkPagina: linkPag
  };

  return filme;
}

function arraySort(vet, x) {
  vet.sort(function compare(a, b) {
    switch (x) {
      case 0:
        return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0;
        break;
      case 1:
        return a.anoLancamento < b.anoLancamento
          ? -1
          : a.anoLancamento > b.anoLancamento
          ? 1
          : 0;
        break;
      default:
        return a.anoCronologico < b.anoCronologico
          ? -1
          : a.anoCronologico > b.anoCronologico
          ? 1
          : 0;
    }
  });

  return vet;
}

function removeModal() {
  document.querySelector(".container-aluraflix-finalizado").remove();
}
