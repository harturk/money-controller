import { useEffect } from "react";
import { api } from "../../../services/api";
import { Container } from "./styles";

// Utilizando axios, não há necessidade de conversão para json
//       .then((response) => response.json())
export function TransactionsTable() {
  useEffect(() => {
    api.get("transactions")
      .then(response => console.log(response.data));
  }, []);
  return ( 
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de Website</td>
            <td className="deposit">R$ 12000,00</td>
            <td>Desenvolvimento</td>
            <td>30/10/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$ 1200,00</td>
            <td>Casa</td>
            <td>13/10/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento de Website</td>
            <td className="deposit">R$ 12000,00</td>
            <td>Desenvolvimento</td>
            <td>30/10/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
