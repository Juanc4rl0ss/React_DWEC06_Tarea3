import ReactDOM from 'react-dom/client'
import App from './App';
import Navbar from './componentes/Navbar';

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar></Navbar>
    <App></App>
  </BrowserRouter>
);