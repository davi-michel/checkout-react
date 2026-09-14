import React from "react";

export function ItemCarrinho({ produto }) {
  const subtotal = produto.precoUnitario * produto.quantidade;
  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid #eee" }}>
      <div>
        <p style={{ margin: 0, fontWeight: "bold" }}>{produto.nome}</p>
        <small>{produto.quantidade}x R$ {produto.precoUnitario.toFixed(2)}</small>
      </div>
      <div>
        <p style={{ margin: 0 }}>R$ {subtotal.toFixed(2)}</p>
      </div>
    </div>
  );
}
