const urlParams = new URLSearchParams(window.location.search);
const nomeImagem = urlParams.get('img'); // Ex: ?img=gato

const img = document.getElementById('imagem');
const msg = document.getElementById('msg');

// Caminho base onde estão suas imagens
const caminhoBase = 'imagens/';

if (nomeImagem) {
  const caminhoImagem = `${caminhoBase}${nomeImagem}.png`;

  // Testa carregamento da imagem
  img.src = caminhoImagem;
  img.onerror = () => {
    msg.textContent = 'Imagem não encontrada.';
    img.style.display = 'none';
  };
  img.onload = () => {
    msg.textContent = `Imagem carregada: ${nomeImagem}`;
  };
} else {
  msg.textContent = 'Parâmetro ?img= não fornecido.';
  img.style.display = 'none';
}
