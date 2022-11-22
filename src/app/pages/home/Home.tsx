import { PatternFormat } from "react-number-format";
import { InfoCep } from "./components/InfoCep";
import Style from "./Home.module.scss";

export const Home: React.FC = () => {
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
        />
        <button>Buscar</button>
      </div>

      <div className={Style.container_infos_cep}>
        <InfoCep text="CEP: " value="06665-022" />
      </div>
    </>
  );
};