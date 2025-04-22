
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Card } from "../components/card.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="text-center mt-5">
			<div className="row">
			{store.pokemons?.results?.map((el,i) => <Card key = {i} name ={el.name} url= {el.url}/>)}
		</div>
		</div>
	);
}; 