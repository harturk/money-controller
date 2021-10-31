import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";

/* Por questão de acessibilidade, a modal deve ser setada para o root
senão sua div ficará em volta de todo body */
Modal.setAppElement("#root");

/* <h1 className="title">Hello World</h1> 

.title {
    font-size: 64px;
    color: #8257E6;
};

*/
/*const Title = styled.h1`
  color: #8257e6;
  font-size: 64px;
`; */

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }
  return (
    <>
      {/* Valor de onOpenNewTransactionModal será a função que quero executar
      quando o usuário clicar naquele botão */}
      <Header onOpenNewTransactionModal={handleOpenTransactionModal} />
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseTransactionModal}
      />

      <GlobalStyle />
    </>
  );
}
