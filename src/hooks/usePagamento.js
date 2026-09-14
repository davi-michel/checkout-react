import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { verificarTentativaDeGolpe } from "../utils/pagamento";

export function usePagamento() {
  const [estaProcessando, setEstaProcessando] = useState(false);
  const navigate = useNavigate();

  const executarSimulacaoCompra = async (dadosFormulario) => {
    setEstaProcessando(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const eGolpe = verificarTentativaDeGolpe(dadosFormulario.numeroCartao);
    setEstaProcessando(false);

    if (eGolpe) {
      navigate("/falha");
    } else {
      navigate("/sucesso");
    }
  };

  return { estaProcessando, executarSimulacaoCompra };
}
