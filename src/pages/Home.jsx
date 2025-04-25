
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Card } from "../components/card.jsx";


export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<div className="text-center mt-5  ">

			<div className="row">

				<a className="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
					Tus favoritos : {store.favoritos.length}
				</a>
				<div className="collapse" id="collapseExample">
					<div className="card card-body">
						{store.favoritos?.map((favorito, i) => <li key={i}>{favorito.name}</li>)}
					</div>
				</div>



			</div>



<div className="  d-flex   justify-content-center" >			
<div className=" row overflow d-flex flex-column  justify-content-center">



				{store.pokemons?.results?.map((el, i) => <Card key={i} name={el.name} url={el.url} />)}
			</div>


		</div>

		</div>
	);
}; 