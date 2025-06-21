const imagens = ["dark1.png", "dark2.png", "dark3.png"];
let indiceAtual = 0;

function atualizarImagem() {
  const imagem = document.getElementById("slideativo");
  imagem.src = imagens[indiceAtual];
}

function proximo() {
  indiceAtual = (indiceAtual + 1) % imagens.length;
  atualizarImagem();
}

function anterior() {
  indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
  atualizarImagem();
}




