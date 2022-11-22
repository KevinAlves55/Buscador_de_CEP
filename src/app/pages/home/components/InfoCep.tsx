interface IInfoCep {
  text: string;
  value: string | number;
}

export const InfoCep: React.FC<IInfoCep> = ({ text, value }) => {
  return (
    <div>
      <h3>{text}</h3>
      <span>{value}</span>
    </div>
  );
};