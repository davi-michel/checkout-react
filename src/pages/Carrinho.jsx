import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { produtosIniciais } from "../data/produtos";
import { ItemCarrinho } from "../components/ItemCarrinho";
import { ResumoCompra } from "../components/ResumoCompra";

export function Carrinho() {
  const [produtos] = useState(produtosIniciais);
  const navigate = useNavigate();
  const totalCompra = produtos.reduce((acc, prod) => acc + (prod.precoUnitario * prod.quantidade), 0);

  return (
    <main style={{ maxWidth: "600px", margin: "20px auto", padding: "20px", fontFamily: "sans-serif" }}>
      <h1>🛒 Seu Carrinho</h1>
      <section aria-label="Lista de produtos no carrinho">
        {produtos.map((produto) => (
          <ItemCarrinho key={produto.id} produto={produto} />
        ))}
      </section>
      <ResumoCompra total={totalCompra} />
      <button 
        onClick={() => navigate("/pagamento", { state: { total: totalCompra } })}
        style={{ width: "100%", padding: "12px", background: "#2e7d32", color: "#fff", border: "none", borderRadius: "4px", fontSize: "16px", marginTop: "20px", cursor: "pointer" }}
      >
        Finalizar Compra
      </button>
    </main>
  );
}
