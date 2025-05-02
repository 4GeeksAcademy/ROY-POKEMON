import { useEffect } from "react"
import { useParams } from "react-router-dom"
import apiServices from "../services/Api"
import useGlobalReducer from "../hooks/useGlobalReducer"



export const DetailsDragon = () => {


  const { store, dispatch } = useGlobalReducer()




  const { id } = useParams()

  useEffect(() => {
    apiServices.getunDragon(id).then(data => dispatch({ type: 'recarga_UnDragon', payload: data }))
  }, [])

  return (
    <div className="fondo d-flex justify-content-center">
      <div className="card  Dcard border border-white m-5"  >
        <img className="Dcard-img-top m-5 " src={store.dragonBall.image} alt={store.dragonBall.name} />

        <div className="card-footer  bg-dark text-body-secondary">
          <h3 className="card-title text-white">{store.dragonBall.name}</h3>
          <span className="text-warning">{store.dragonBall.race}-{store.dragonBall.gender}</span>
          <h5 className="text-white">Base Ki</h5>
          <p className="text-warning">{store.dragonBall.ki}</p>
          <h5 className="text-white">Total Ki</h5>
          <p className="text-warning">{store.dragonBall.maxKi}</p>
          <h5 className="text-white">Affiliation</h5>
          <p className="text-warning">{store.dragonBall.affiliation}</p>
          

        </div>


      </div>

    </div>

  );
}; 