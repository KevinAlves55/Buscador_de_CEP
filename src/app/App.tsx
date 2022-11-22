import { AppRoutes } from "./routes";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./styles/Global.scss";

export const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
      <ToastContainer autoClose={2000} />
    </BrowserRouter>
  );
};