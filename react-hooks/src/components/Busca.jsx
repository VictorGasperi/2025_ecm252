// rafce
import React, { useEffect, useState } from "react";
import axios from "axios";
import striptags from "striptags";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

export const Busca = () => {
  const [termoDeBusca, setTermoDeBusca] = useState("");
  const [resultados, setResultados] = useState();

  useEffect(() => {
    const buscar = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          format: "json",
          origin: "*",
          srsearch: termoDeBusca,
        },
      });
      setResultados(data?.query?.search);
      console.log(data);
    };
    const timeOutID = setTimeout(() => {
      if (termoDeBusca) buscar();
    }, 500);
    return () => {
        clearTimeout(timeOutID) // limpa o timeout caso a digitacao ocorra em < 500ms
    }
  }, [termoDeBusca]);

    // useEffect(() => {
    //     console.log('Efeito colateral')
    //     return () => {
    //         console.log('Posso limpar algo deixado para trás...')
    //     }
    // })

  return (
    <div>
      <IconField iconPosition="left">
        <InputIcon className="pi pi-search" />
        <InputText
          placeholder="Buscar..."
          onChange={(event) => setTermoDeBusca(event.target.value)}
          value={termoDeBusca}
        />
      </IconField>
      {resultados?.map((resultado) => {
        return (
          <div
            key={resultado.pageid}
            className="my-2 border border-1 border-400"
          >
            <div className="mt-2 border-bottom text-center">
              <span>{resultado.title}</span>
              <span>
                <Button
                  icon="pi pi-send"
                  className="ml-3 p-button-rounded p-button-secondary"
                  onClick={() => {
                    window.open(
                      `https://en.wikipedia.org?curid=${resultado.pageid}`
                    );
                  }}
                />
              </span>
            </div>
            <div className="p-4 text-center">
              {/* Isso torna o usuário vulnerável a ataques XSS de backends maliciosos */}
              <span
                dangerouslySetInnerHTML={{ __html: resultado.snippet }}
              ></span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
