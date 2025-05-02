import { useEffect } from "react"
import { useParams } from "react-router-dom"
import apiServices from "../services/Api"
import useGlobalReducer from "../hooks/useGlobalReducer"



export const Details = () => {


  const { store, dispatch } = useGlobalReducer()

 


  const { id } = useParams()

  useEffect(() => {
    apiServices.getPoke(id).then(data => dispatch({ type: 'recarga_UnpokemonApi', payload: data }))
  }, [])

  return (
    <div className="text-center mt-5 d-flex align-items-center flex-column">
      


      <div className="col-sm-8 col-md-6 col-lg-10  ">
        <div className=" card d-flex align-items-center bg-dark border border-0" >
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} className="card-img-top w-25" alt={store.pokemon?.name} />
          <div className="card-body">
            <h3 className="card-title">{store.pokemon?.name}</h3>
            <ul className="card-text text-white"><h5>Habilidades : </h5>

              <li> {store.pokemon?.abilities[0].ability.name}</li>
              <li>{store.pokemon?.abilities[1].ability.name}</li>

            </ul>
            <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">Informacion avanzada</button>

            <div className="offcanvas offcanvas-bottom bg-info-subtle" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasBottomLabel"></h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body small">


                <p className="gap-1">

                  <button className="btn btn-light" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Detalles Pokemon</button>

                </p>
                <div className="row d-flex justify-content-between">

                  <div className="col-sm-4 col-md-4 col-lg-4  ">
                    <div className="collapse multi-collapse" id="multiCollapseExample2">
                      <div className="card card-body">
                        <ul className="list-group list-group-flush">
                          <div className="btn-group dropend">
                            <button type="button" className="btn btn-light dropdown-toggle Size" data-bs-toggle="dropdown" aria-expanded="false">
                              Movimientos
                            </button>
                            <ul className="dropdown-menu">
                              <li>  {store.pokemon?.moves[0].move.name}: <span className="text-danger"> Se aprende al nivel </span>,{store.pokemon?.moves[0].version_group_details[0].level_learned_at}   </li>
                              <li>  {store.pokemon?.moves[1].move.name}: <span className="text-danger"> Se aprende al nivel  </span>, {store.pokemon?.moves[1].version_group_details[0].level_learned_at}  </li>
                              <li>  {store.pokemon?.moves[10].move.name}: <span className="text-danger"> Se aprende al nivel  </span>, {store.pokemon?.moves[10].version_group_details[0].level_learned_at}  </li>
                              <li>  {store.pokemon?.moves[8].move.name}: <span className="text-danger"> Se aprende al nivel  </span>, {store.pokemon?.moves[8].version_group_details[0].level_learned_at}  </li>

                            </ul>

                          </div>

                          <div className="btn-group dropend">
                            <button type="button" className="btn btn-light dropdown-toggle Size" data-bs-toggle="dropdown" aria-expanded="false">
                              Caracteristicas
                            </button>
                            <ul className="dropdown-menu">
                              <span className="text-danger">{store.pokemon?.name}: Es un pokemon tipo {store.pokemon?.types[1]?.type?.name} con un peso de {store.pokemon?.weight} g </span>
                            </ul>

                          </div>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 col-md-4 col-lg-4 d-flex ">
                  <div className=" Tarjetaimg2" >
                    <img src={store.pokemon?.sprites.front_shiny} className="card-img-top" alt="..." />
                                      
                                  

                </div>
                <div className=" Tarjetaimg2" >
                    <img src={store.pokemon?.sprites.back_shiny} className="card-img-top" alt="..." />
                                     
                                

                </div>
                </div>
                </div>











              </div>
            </div>

          </div>
        </div>
      </div>


    </div>

  );
}; 