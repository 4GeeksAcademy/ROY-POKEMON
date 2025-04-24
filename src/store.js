export const initialStore=()=>{
  return{
    message: null,
    pokemons:null,
    favoritos:[],
    
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'addFav':
      return{
        ...store,
        favoritos:[...store.favoritos,action.payload]
      }
      case 'eliminarFavorito':
      return{
        ...store,
        favoritos: store.favoritos.filter(item => item.id !== action.payload)
      }
    case 'recarga_UnpokemonApi':
      return{
        ...store,
        pokemon: action.payload
      }
    case 'recarga_pokemonApi':
      return{
        ...store,
        pokemons: action.payload
      }
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    default:
      throw Error('Unknown action.');
  }    
}
