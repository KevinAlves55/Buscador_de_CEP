import { useState } from "react";
import axios from "axios";

import { toast } from "react-toastify";
import { PatternFormat } from "react-number-format";

import { InfoCep } from "./components/InfoCep";
import Style from "./Home.module.scss";

interface IDadosCep {
  cep: string,
  logradouro: string,
  complemento: string,
  bairro: string,
  localidade: string,
  uf: string,
  ibge: string,
  gia: string,
  ddd: string,
  siafi: string
}

export const Home: React.FC = () => {
  const [mostrarInformacoes, setMostrarInformacoes] = useState(false);
  const [cep, setCep] = useState("");
  const [dadosCep, setDadosCep] = useState<IDadosCep>({} as IDadosCep);

  const buscarDadosDoCep = async (cep: string) => {
    if (cep.length === 8) {
      axios(`https://viacep.com.br/ws/${cep}/json/`).then(result => {
        if (!result.data.erro) {
          setDadosCep(result.data);
          setMostrarInformacoes(true);
        } else {
          toast.error("CEP não encontrado");
          setMostrarInformacoes(false);
        }
      });
    } else {
      toast.error("CEP inválido");
      setMostrarInformacoes(false);
    }
  };

  return (
    <>
      <div className={Style.container}>
        <h1>Busque informações de seu CEP 🔎</h1>
        <PatternFormat
          format="#####-###"
          mask="_"
          valueIsNumericString
          className={Style.input}
          placeholder="Digite seu CEP..."
          type="text"
          onValueChange={e => setCep(e.value)}
          autoFocus
        />
        <button onClick={() => buscarDadosDoCep(cep)}>Buscar</button>
      </div>

      {(mostrarInformacoes && (
        <div className={Style.container_infos_cep}>
          <InfoCep
            text="Cep: "
            value={dadosCep.cep === "" ? "Informação não encontrada" : dadosCep.cep}
          />
          <InfoCep
            text="Estado: "
            value={dadosCep.uf === "" ? "Informação não encontrada" : dadosCep.uf}
          />
          <InfoCep
            text="Cidade: "
            value={dadosCep.localidade === "" ? "Informação não encontrada" : dadosCep.localidade}
          />
          <InfoCep
            text="Endereço: "
            value={dadosCep.logradouro === "" ? "Informação não encontrada" : dadosCep.logradouro}
          />
          <InfoCep
            text="Rua: "
            value={dadosCep.bairro === "" ? "Informação não encontrada" : dadosCep.bairro}
          />
          <InfoCep
            text="Código postal: "
            value={dadosCep.gia === "" ? "Informação não encontrada" : dadosCep.gia}
          />
          <InfoCep
            text="DDD: "
            value={dadosCep.ddd === "" ? "Informação não encontrada" : dadosCep.ddd}
          />
        </div>
      ))}
    </>
  );
};