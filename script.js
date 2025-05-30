const urlParams = new URLSearchParams(window.location.search);
const nomeImagem = urlParams.get('img'); // Ex: ?img=gato

const img = document.getElementById('imagem');
const msg = document.getElementById('msg');

const caminhoBase = 'imagens/';
const extensoes = ['png', 'jpg', 'jpeg', 'webp', 'gif'];

if (nomeImagem) {
  let carregada = false;

  for (let ext of extensoes) {
    const caminhoImagem = `${caminhoBase}${nomeImagem}.${ext}`;

    const teste = new Image();
    teste.src = caminhoImagem;

    teste.onload = () => {
      if (!carregada) {
        carregada = true;
        img.src = caminhoImagem;
        msg.textContent = `Imagem carregada: ${nomeImagem}.${ext}`;
        img.style.display = 'block';
      }
    };

    teste.onerror = () => {
      // Se todas falharem, mostra mensagem final
      if (!carregada && ext === extensoes[extensoes.length - 1]) {
        msg.textContent = 'Imagem não encontrada.';
        img.style.display = 'none';
      }
    };
  }
} else {
  msg.textContent = 'Parâmetro ?img= não fornecido.';
  img.style.display = 'none';
}
