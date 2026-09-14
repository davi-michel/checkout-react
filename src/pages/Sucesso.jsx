import React from "react";
import { Link } from "react-router-dom";

export function Sucesso() {
  return (
    <main style={{ maxWidth: "500px", margin: "50px auto", textAlign: "center", fontFamily: "sans-serif" }}>
      <h1 style={{ color: "#2e7d32" }}>🎉 Compra Aprovada com Sucesso!</h1>
      <p>Seu pedido foi processado e logo será enviado.</p>
      <Link to="/" style={{ display: "inline-block", marginTop: "20px", padding: "10px 20px", background: "#2e7d32", color: "#fff", textDecoration: "none", borderRadius: "4px" }}>Voltar ao Carrinho</Link>
    </main>
  );
}
