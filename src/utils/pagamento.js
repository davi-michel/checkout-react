export function verificarTentativaDeGolpe(numeroCartao) {
  const apenasDigitos = numeroCartao.replace(/[\s-]/g, "");
  if (apenasDigitos.length !== 16) return false;
  return apenasDigitos.split("").every(digito => digito === apenasDigitos);
}
