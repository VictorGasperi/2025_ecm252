import React, { useState } from "react";
import { Card } from "primereact/card";
import "./Accordion.css";

const Accordion = ({ itens }) => {
  const [indiceAtivo, setIndiceAtivo] = useState(null);

  const itemClicado = (indice) => {
    setIndiceAtivo(indice);
  };

  const expressaoJSX = itens.map((item, indice) => {
    const classExibirIcone = indice === indiceAtivo ? "down" : "right";
    const classExibirConteudo = indice === indiceAtivo ? "" : "hidden";
    return (
      <Card id="accordion" key={indice} className="border-1 border-400">
        <div className="cursor-pointer" onClick={() => itemClicado(indice)}>
          <i className={`pi pi-angle-${classExibirIcone}`}></i>
          <h5 className="ml-3 inline">{item.titulo}</h5>
        </div>
        <p className={`${classExibirConteudo}`}>{item.conteudo}</p>
      </Card>
    );
  });

  return (
    <div>
      {/* {  
                itens &&
                itens.map( (item, key) => (
                    <div key={key}>
                        <h4>{item.titulo}</h4>
                        <p>{item.conteudo}</p>
                    </div>
                })
                )*/}

      <p>{indiceAtivo}</p>
      {itens && expressaoJSX}
    </div>
  );
};

export default Accordion;
