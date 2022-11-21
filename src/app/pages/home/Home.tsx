import Style from "./Home.module.scss";

export const Home: React.FC = () => {
  return (
    <>
      <div className={Style.container}>
        <h1>Busque informações de seu CEP 🔎</h1>
        <input type="text" />
        <button>Buscar</button>
      </div>
    </>
  );
};