import { Link } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"
import { useParams } from "react-router-dom"
import { useEffect } from "react"

export const Card = ({ name, url }) => {

  const { store, dispatch } = useGlobalReducer()


  let aux = url.split('/')
  let id = aux[6]

  useEffect(() => {
    console.log(store.favoritos);
  }, [store.favoritos]);


  const addfavorito = (item) => {

    const macheo = store.favoritos.some(fav => fav.name === item.name);
    if (macheo) {
      dispatch({ type: "eliminarFavorito", payload: item.name });
    } else {

      dispatch({ type: "addFav", payload: item });

    }

  };





  return (


    <div className="card d-flex align-items-center m-3 bg-dark" >
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} className="card-img-top Tarjetaimg " alt={name} />
      <div className="card-body">
        <h5 className="card-title text-white">{name}</h5>
        <Link to={"/details/" + id}>
          <button className="btn btn-outline-secondary m-3">Detalles</button>
        </Link>

        <button type="button" onClick={() => { addfavorito({ name }) }} className="btn btn-outline-danger">{'♥'}</button>

      </div>
    </div>

  )
}