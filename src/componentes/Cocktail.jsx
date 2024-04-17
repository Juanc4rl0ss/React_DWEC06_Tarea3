import { Link } from "react-router-dom"

function Cocktail({nombre,imagen, categoria,informacion,vaso,instrucciones,ingredientes}){
    return(
        <section className="section cocktail-section">
        <Link to="/" className="btn btn-primary">back home</Link>
        <h1 className="section-title">{nombre}</h1>
        <div className="drink">
          <img src={imagen} alt={nombre} className="drink-detail"/>
          <div className="drink-info">
            <p><span className="drink-data">name :</span> {nombre}</p>
            <p><span className="drink-data">category :</span> {categoria}</p>
            <p><span className="drink-data">info :</span> {informacion}</p>
            <p><span className="drink-data">glass :</span> {vaso}</p>
            <p><span className="drink-data">instructions :</span> {instrucciones}</p>
            <p><span className="drink-data">ingredients :</span>
              {ingredientes.map((ingrediente, index) => (
                <span key={index}> {ingrediente}</span>
              ))}
            </p>
          </div>
        </div>
      </section>
    )
}
export default Cocktail