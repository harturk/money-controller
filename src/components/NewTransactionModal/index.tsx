import Modal from "react-modal";
import { Container, RadioBox, TransactionTypeContainer } from "./styles";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { FormEvent, useState } from "react";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

{/* A propriedade isOpen recebe como estado inicial fechado ou "false" */}
export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  function handleCreateNewTransaction(event: FormEvent) {
    // preventDefault impede que a página seja recarregada após cadastrar uma transação ("submitar")
    event.preventDefault();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>
        <input 
          placeholder="Título" 
          value={title}
          onChange={event => setTitle(event.target.value)}
          />
        <input 
          type="number" 
          placeholder="Valor" 
          value={value}
          /*event.target.value sempre retornará uma string, mesmo se o tipo for number
          logo, precisará de conversão {event => setValue(+event.target.value)} */
          onChange={event => setValue(Number(event.target.value))} 
          />
        
        <TransactionTypeContainer>
            <RadioBox
            type="button"
            isActive={type === 'deposit'}
            activeColor="green"
            onClick={() => { setType('deposit'); }}>
                <img src={incomeImg} alt="Entrada" />
                <span>Entrada</span>
            </RadioBox>
            <RadioBox 
            type="button"
            isActive={type === 'withdraw'}
            activeColor="red"
            onClick={() => { setType('withdraw'); }}>
                <img src={outcomeImg} alt="Saída" />
                <span>Saída</span>
            </RadioBox>
        </TransactionTypeContainer>

        <input 
          placeholder="Categoria" 
          value={category}
          onChange={event => setCategory(event.target.value)}/>
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
