export function gerarProtocolo() {
  return 'DN-' + Date.now().toString(36).toUpperCase().slice(-6);
}
