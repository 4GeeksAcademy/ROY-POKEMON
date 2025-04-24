
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Card } from "../components/card.jsx";


export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<div className="text-center mt-5">

			<div className="row">

				<a className="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
					Tus favoritos
				</a>
				<div className="collapse" id="collapseExample">
					<div className="card card-body">
						{store.favoritos?.map((name, i) => <li key={i}>{name}</li>)}
					</div>
				</div>


			</div>

			<div className="row">
				{store.pokemons?.results?.map((el, i) => <Card key={i} name={el.name} url={el.url} />)}
			</div>
		</div>
	);
}; 