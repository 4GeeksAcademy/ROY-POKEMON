import { useEffect } from "react"
import { useParams } from "react-router-dom"
import apiServices from "../services/Api"
import useGlobalReducer from "../hooks/useGlobalReducer"



export const Details = () => {


const { store , dispatch } = useGlobalReducer()

console.log(store.pokemon?.abilities[0].ability.name)


const {id}=useParams()

  useEffect(()=>{
    apiServices.getPoke(id).then(data => dispatch ({type : 'recarga_UnpokemonApi' , payload: data}))
  },[])

    return (
        <div className="text-center mt-5 d-flex align-items-center flex-column">
           <h3>detalles</h3>
           
           
          <div className="col-sm-8 col-md-6 col-lg-10  ">
           <div className=" card d-flex align-items-center" >
  <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} className="card-img-top w-25" alt={store.pokemon?.name} />
  <div className="card-body">
    <h5 className="card-title">{store.pokemon?.name}</h5>
    <p className="card-text"><ul>Habilidades :
      
    <li> {store.pokemon?.abilities[0].ability.name}</li>
    <li>{store.pokemon?.abilities[1].ability.name}</li>
      
      </ul></p>
      <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">Toggle bottom offcanvas</button>

<div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasBottomLabel">Offcanvas bottom</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body small">
    ...
  </div>
</div>
 
  </div>
  </div>
</div>

           
        </div>
        
    );
}; 