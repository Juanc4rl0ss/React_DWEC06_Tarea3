import { Route, Routes} from "react-router-dom"
import Home from "./paginas/Home";
import About from "./paginas/About";
import Coctail from "./paginas/Coctail"
import Error from "./paginas/Error";
function App() {

  return (
    
        <Routes>

            <Route path="/" element={ <Home /> } />
            <Route path="/Home" element={ <Home /> } />
            <Route path="/About" element={ <About /> } />
            <Route path="/Error" element={ <Error /> } />
            <Route path="/cocktail/:id" element={<Coctail />} />
            <Route path="*" element={<Error children={"Oups!,lo sentimos pero la página que busca no está disponible"} />}  />

        </Routes>

  );
}

export default App;