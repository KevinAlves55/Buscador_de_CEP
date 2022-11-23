import { useEffect, useState } from "react";
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
  const [status, setStatus] = useState(false);
  const [cep, setCep] = useState("");
  const [dadosCep, setDadosCep] = useState<IDadosCep>({} as IDadosCep);

  const buscarDados = async (cep: string) => {
    if (cep === "") {
      toast.error("CEP vazio");
    } else {
      axios(`https://viacep.com.br/ws/${cep}/json/`).then(result => {
        if (!result.data.erro) {
          setDadosCep(result.data);
          setStatus(true);
        } else {
          toast.error("CEP não encontrado")
        }
      });
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
          onChange={e => setCep(e.target.value)}
        />
        <button onClick={() => buscarDados(cep)}>Buscar</button>
      </div>

      {(status && (
        <div className={Style.container_infos_cep}>
          <InfoCep text="Cep: " value={dadosCep.cep ?? "Informação não encontrada"} />
          <InfoCep text="Estado: " value={dadosCep.uf ?? "Informação não encontrada"} />
          <InfoCep text="Cidade: " value={dadosCep.localidade ?? "Informação não encontrada"} />
          <InfoCep text="Endereço: " value={dadosCep.logradouro ?? "Informação não encontrada"} />
          <InfoCep text="Rua: " value={dadosCep.bairro ?? "Informação não encontrada"} />
          <InfoCep text="Código postal: " value={dadosCep.gia ?? "Informação não encontrada"} />
          <InfoCep text="DDD: " value={dadosCep.ddd ?? "Informação não encontrada"} />
        </div>
      ))}
    </>
  );
};