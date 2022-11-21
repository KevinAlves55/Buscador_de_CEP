import { AppRoutes } from "./routes";
import { BrowserRouter } from "react-router-dom";
import "./styles/Global.scss";

export const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};