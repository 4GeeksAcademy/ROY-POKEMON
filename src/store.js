export const initialStore=()=>{
  return{
    message: null,
    pokemons:null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ]
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
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
