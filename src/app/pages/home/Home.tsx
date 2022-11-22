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
  const [cep, setCep] = useState("");
  const [dadosCep, setDadosCep] = useState<IDadosCep>({} as IDadosCep);

  const buscarDados = async (cep: string) => {
    if (cep === "") {
      toast.error("CEP vazio");
    } else {
      axios(`https://viacep.com.br/ws/${cep}/json/`).then(result => {
        if (!result.data.erro) {
          setDadosCep(result.data);
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

      <div className={Style.container_infos_cep}>
        <InfoCep text="Cep: " value={dadosCep.cep ?? "Aguardando CEP..."} />
        <InfoCep text="Estado: " value={dadosCep.uf ?? "Aguardando CEP..."} />
        <InfoCep text="Cidade: " value={dadosCep.localidade ?? "Aguardando CEP..."} />
        <InfoCep text="Endereço: " value={dadosCep.logradouro ?? "Aguardando CEP..."} />
        <InfoCep text="Rua: " value={dadosCep.bairro ?? "Aguardando CEP..."} />
        <InfoCep text="Código postal: " value={dadosCep.gia ?? "Aguardando CEP..."} />
        <InfoCep text="DDD: " value={dadosCep.ddd ?? "Aguardando CEP..."} />
      </div>
    </>
  );
};