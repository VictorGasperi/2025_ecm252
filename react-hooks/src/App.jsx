import React from "react";
import Accordion from "./components/Accordion";
import { Busca } from "./components/Busca";

const itens = [
  {
    titulo: "Java",
    conteudo: "Linguagem compilada e interpretada.",
  },
  {
    titulo: "Python",
    conteudo: "Linguagem interpretada e dinâmicamente tipada.",
  },
  {
    titulo: "Javascript",
    conteudo:
      "Interpretada. Executada do lado do cliente e do lado do servidor também.",
  },
];

const App = () => {
  const expressaoJSX = <Busca />
  return (
    <div>
      {expressaoJSX}
    </div>
  );
};

export default App;
