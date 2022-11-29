import copy from "copy-to-clipboard";
import { BsClipboard } from "react-icons/bs";

import Styles from "./InfoCep.module.scss";
import { toast } from "react-toastify";

interface IInfoCep {
  text: string;
  value: string | number;
}

export const InfoCep: React.FC<IInfoCep> = ({ text, value }) => {
  const copiarParaAreaDeTransferencia = () => {
    copy(String(value));
    toast.success("Dado copiado para a área de transferência");
  };

  return (
    <div>
      <h3>{text}</h3>
      <span>{value}</span>
      <BsClipboard
        className={Styles.clipboard}
        title="Copiar texto"
        onClick={copiarParaAreaDeTransferencia}
      />
    </div>
  );
};