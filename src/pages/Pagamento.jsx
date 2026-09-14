import React from "react";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { usePagamento } from "../hooks/usePagamento";

const schemaPagamento = zod.object({
  titular: zod.string().min(1, "O nome do titular é obrigatório"),
  numeroCartao: zod.string()
    .transform(val => val.replace(/[\s-]/g, ""))
    .refine(val => val.length === 16, { message: "O cartão deve conter exatamente 16 dígitos" }),
  validade: zod.string()
    .min(5, "Formato inválido (MM/AA)")
    .refine(val => {
      const parts = val.split("/");
      if (parts.length !== 2) return false;
      const mes = parseInt(parts[0], 10);
      return mes >= 1 && mes <= 12;
    }, { message: "Mês deve ser entre 01 e 12" }),
  cvv: zod.string()
    .transform(val => val.trim())
    .refine(val => val.length === 3, { message: "O CVV deve conter 3 dígitos" })
});

export function Pagamento() {
  const location = useLocation();
  const { estaProcessando, executarSimulacaoCompra } = usePagamento();
  const total = location.state?.total || 0;
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schemaPagamento) });

  return (
    <main style={{ maxWidth: "500px", margin: "20px auto", padding: "20px", fontFamily: "sans-serif" }}>
      <h1>💳 Pagamento</h1>
      <p>Valor a pagar: <strong>R$ {total.toFixed(2)}</strong></p>
      <form onSubmit={handleSubmit(executarSimulacaoCompra)} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <div>
          <label htmlFor="titular" style={{ display: "block", marginBottom: "5px" }}>Nome do Titular:</label>
          <input id="titular" type="text" {...register("titular")} style={{ width: "100%", padding: "8px" }} />
          {errors.titular && <span style={{ color: "red", fontSize: "14px" }}>{errors.titular.message}</span>}
        </div>
        <div>
          <label htmlFor="numeroCartao" style={{ display: "block", marginBottom: "5px" }}>Número do Cartão:</label>
          <input id="numeroCartao" type="text" placeholder="0000 0000 0000 0000" {...register("numeroCartao")} style={{ width: "100%", padding: "8px" }} />
          {errors.numeroCartao && <span style={{ color: "red", fontSize: "14px" }}>{errors.numeroCartao.message}</span>}
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <div style={{ flex: 1 }}>
            <label htmlFor="validade" style={{ display: "block", marginBottom: "5px" }}>Validade (MM/AA):</label>
            <input id="validade" type="text" placeholder="MM/AA" {...register("validade")} style={{ width: "100%", padding: "8px" }} />
            {errors.validade && <span style={{ color: "red", fontSize: "14px" }}>{errors.validade.message}</span>}
          </div>
          <div style={{ flex: 1 }}>
            <label htmlFor="cvv" style={{ display: "block", marginBottom: "5px" }}>CVV:</label>
            <input id="cvv" type="text" placeholder="123" {...register("cvv")} style={{ width: "100%", padding: "8px" }} />
            {errors.cvv && <span style={{ color: "red", fontSize: "14px" }}>{errors.cvv.message}</span>}
          </div>
        </div>
        <button type="submit" disabled={estaProcessando} style={{ width: "100%", padding: "12px", background: estaProcessando ? "#aaa" : "#0056b3", color: "#fff", border: "none", borderRadius: "4px", fontSize: "16px", cursor: estaProcessando ? "not-allowed" : "pointer" }}>
          {estaProcessando ? "Processando compra..." : "Confirmar Pagamento"}
        </button>
      </form>
    </main>
  );
}
