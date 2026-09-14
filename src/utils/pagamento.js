export function verificarTentativaDeGolpe(numeroCartao) {
  
  const apenasDigitos = String(numeroCartao).replace(/[\s-]/g, "");
  
  if (apenasDigitos.length !== 16) return false;
  
  const primeiroDigito = apenasDigitos[0];
  return apenasDigitos.split("").every(digito => digito === primeiroDigito);
}
