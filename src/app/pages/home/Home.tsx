import Style from "./Home.module.scss";

export const Home: React.FC = () => {
  return (
    <>
      <div className={Style.container}>
        <h1>Busque informações de seu CEP 🔎</h1>
        <input type="text" />
        <button>Buscar</button>
      </div>

      <div className={Style.container_infos_cep}>
        <div>
          <h2>Estado: </h2>
          <span>SP</span>
        </div>

        <div>
          <h2>Cidade: </h2>
          <span>Itapevi</span>
        </div>

        <div>
          <h2>Endereço: </h2>
          <span>xxxxx xxxxxxx xxxxx xxx</span>
        </div>

        <div>
          <h2>Rua: </h2>
          <span>Maria José</span>
        </div>

        <div>
          <h2>Código postal: </h2>
          <span>456</span>
        </div>
      </div>
    </>
  );
};