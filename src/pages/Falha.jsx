import React from "react";
import { Link } from "react-router-dom";

export function Falha() {
  return (
    <main style={{ maxWidth: "500px", margin: "50px auto", textAlign: "center", fontFamily: "sans-serif" }}>
      <h1 style={{ color: "#c62828" }}>tentativa de golpe</h1>
      <p>A transação foi recusada pelos nossos sistemas de segurança.</p>
      <Link to="/pagamento" style={{ display: "inline-block", marginTop: "20px", padding: "10px 20px", background: "#c62828", color: "#fff", textDecoration: "none", borderRadius: "4px" }}>Tentar Novamente</Link>
    </main>
  );
}
