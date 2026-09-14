import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { verificarTentativaDeGolpe } from "../utils/pagamento";

export function usePagamento() {
  const [estaProcessando, setEstaProcessando] = useState(false);
  const navigate = useNavigate();

  const executarSimulacaoCompra = async (dadosFormulario) => {
    setEstaProcessando(true);
    
    // Simula a espera de 2 segundos exigida
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    // Força a limpeza de qualquer espaço ou hífen antes de checar o golpe
    const numeroLimpo = dadosFormulario.numeroCartao.replace(/[\s-]/g, "");
    const eGolpe = verificarTentativaDeGolpe(numeroLimpo);
    
    setEstaProcessando(false);

    if (eGolpe) {
      navigate("/falha");
    } else {
      navigate("/sucesso");
    }
  };

  return { estaProcessando, executarSimulacaoCompra };
}
