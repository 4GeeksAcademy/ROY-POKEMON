import { Link } from "react-router-dom"


export const Card =({name, url })=>{



let aux = url.split('/')
let id = aux[6]



    const addfavorito=()=>{
console.log('click on fav')

    }

    return(
<div className="col-sm-6 col-md-4 col-lg-3">
        <div className="card d-flex align-items-center" >
  <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} className="card-img-top Tarjetaimg " alt={name}/>
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <Link to={"/details/"+ id}>
        <button className="btn btn-outline-secondary m-3">Detalles</button>
      </Link>
    
    <button type="button" onClick={addfavorito} className="btn btn-outline-danger">{'♥'}</button>
    </div>
  </div>
</div>
    )
}