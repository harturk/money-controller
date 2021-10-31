import React from "react";
import ReactDOM from "react-dom";
import { createServer } from "miragejs";
import { App } from "./App";

// Todas chamadas feitas para "api", serão direcionadas para o miragejs
createServer({
  routes() {
    this.namespace = "api";

    // Quando houver uma requisição de tipo get, será devolvido um objeto
    // com os parâmetros descritos abaixo
    this.get("/transactions", () => {
      return {
        id: 1,
        title: "Transaction 1",
        amount: 400,
        type: "deposit",
        category: "Food",
        createdAt: new Date(),
      };
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
