import React from "react";

export function ResumoCompra({ total }) {
  return (
    <div style={{ padding: "15px", background: "#f9f9f9", borderRadius: "8px", marginTop: "15px" }}>
      <h3 style={{ margin: 0 }}>Resumo do Pedido</h3>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
        <strong>Total da Compra:</strong>
        <strong>R$ {total.toFixed(2)}</strong>
      </div>
    </div>
  );
}
