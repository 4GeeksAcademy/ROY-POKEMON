
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Card } from "../components/card.jsx";
import { useParams } from "react-router-dom"
import apiServices from "../services/Api.js";
import { useEffect } from "react";
import { peticionesdeDragonball } from "../services/Api.js";


export const Home = ({name}) => {

	useEffect(() => {
		const actualizarpersonajes = async () => {
			const data = await peticionesdeDragonball();
			dispatch({ type: 'TraerpersonajesDragonBall', payload: data })
		};
		actualizarpersonajes()

	}, [])



	const { store, dispatch } = useGlobalReducer()

	const addfavorito = (item) => {

		const Macheo = store.favoritos.some(fav => fav.name === item.name);
		if (Macheo) {
			dispatch({ type: "eliminarFavorito", payload: item.name });
		} else {

			dispatch({ type: "addFav", payload: item });

		}

	};




	return (
		<div className="text-center mt-5  ">

			<div className="row">

				<a className="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
					Tus favoritos : {store.favoritos.length}
				</a>
				<div className="collapse" id="collapseExample">
					<div className="card card-body d-flex justify-content-between">
						{store.favoritos?.map((favorito, i) => <span key={i} className="d-flex justify-content-between  "  onClick={() => { addfavorito() }}>x <li >{favorito.name}</li> </span>)}
					</div>
				</div>



			</div>



			<div className="  d-flex   justify-content-center mb-5" >
				<div className=" row overflow d-flex flex-column  justify-content-center">



					{store.pokemons?.results?.map((el, i) => <Card key={i} name={el.name} url={el.url} />)}
				</div>


			</div>
			<div className="bg-dark row row Doverflow  ">
				<div className="d-flex   m-5">



					{store?.dragonBall.items?.map((el, index) => {
						return <div key={index}>

							<div className="card  Dcard border border-white m-5"  >
								<img className="Dcard-img-top m-5 " src={el.image} alt={el.name} />

								<div className="card-footer  bg-dark text-body-secondary">
									<h3 className="card-title text-white">{el.name}</h3>
									<span className="text-warning">{el.race}-{el.gender}</span>
									<h5 className="text-white">Base Ki</h5>
									<p className="text-warning">{el.ki}</p>
									<h5 className="text-white">Total Ki</h5>
									<p className="text-warning">{el.maxKi}</p>
									<h5 className="text-white">Affiliation</h5>
									<p className="text-warning">{el.affiliation}</p>

								</div>
								<button type="button" onClick={() => { addfavorito(el.name) }} className="btn btn-outline-danger">{'♥'}</button>
							</div>
						</div>


					})}





				</div>

			</div>

		</div>
	);
}; 