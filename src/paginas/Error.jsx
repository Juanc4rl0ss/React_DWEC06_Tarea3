import { Link  } from "react-router-dom"


function Error({children}){
    return(
        <div className="error-container ">
                <h1 className="section-title">{children}</h1>
                <Link to="/" className="btn btn-primary btn-details">Volver al Inicio</Link>
        </div>
    )
}
export default Error;