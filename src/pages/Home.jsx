
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Card } from "../components/card.jsx";
import { useParams } from "react-router-dom"
import apiServices from "../services/Api.js";
import { useEffect } from "react";
import { peticionesdeDragonball } from "../services/Api.js";
import { Link } from "react-router-dom";
import { DetailsDragon } from "./detailsDragon.jsx";


export const Home = ({ name, id }) => {

	const { store, dispatch } = useGlobalReducer()

	useEffect(() => {
		const actualizarpersonajes = async () => {
			const data = await peticionesdeDragonball();
			dispatch({ type: 'TraerpersonajesDragonBall', payload: data })
		};
		actualizarpersonajes()

	}, [])





	const addfavorito = (item) => {

		const macheo = store.favoritos.some(fav => fav.name === item.name);
		if (macheo) {
			dispatch({ type: "eliminarFavorito", payload: item.name });
		} else {

			dispatch({ type: "addFav", payload: item });

		}

	};




	return (
		<div className="text-center mt-5 bg-dark ">

			<div className="row">

				<a className="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
					Tus favoritos : {store.favoritos.length}
				</a>
				<div className="collapse" id="collapseExample">
					<div className="card card-body d-flex justify-content-between">
						{store.favoritos?.map((favorito, i) => <span key={i} className="d-flex justify-content-between  " onClick={() => { addfavorito(favorito) }}>{'♥'}<li >{favorito.name}</li> </span>)}
					</div>
				</div>



			</div>



			<div className="  d-flex   justify-content-center mb-5" >
			
	

				<div className=" row overflow d-flex flex-column  justify-content-center">

				
					{store.pokemons?.results?.map((el, i) => <Card key={i} name={el.name} url={el.url} />)}
				</div>

				
			</div>
			<img className="imagencita" src="https://media.revistagq.com/photos/5eb133629208f4ace0584a5b/16:9/w_2560%2Cc_limit/MONTAJE%2520PIKACHU%2520VS%2520DragonBall.jpg"></img>

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

								<button type="button" onClick={() => { addfavorito(el) }} className="btn btn-outline-danger">{'♥'}</button>
							</div>
							<Link to={`/detailsdragon/${el.id}`}>
								<button className="btn btn-outline-secondary m-3">Detalles</button>
							</Link>

						</div>


					})}





				</div>

			</div>

		</div>
	);
}; 