

const apiServices = {}
export const peticionesdeDragonball = async () =>{

    try { 
        const resp = await fetch ('https://dragonball-api.com/api/characters')
        const data = await resp.json()
        return data
        
    } catch (error) { 
        console.log(error)
        
    }
}

apiServices.getAll = async ()=>{
    try {        
        const resp = await fetch('https://pokeapi.co/api/v2/pokemon')
        if (!resp.ok) throw new Error ('error fetching data')
            const data = await resp.json()
        return data
    } catch (error) {
        console.log(error);
    }
}


apiServices.getPoke = async (id) =>{

    try {
        const resp = await fetch ('https://pokeapi.co/api/v2/pokemon/'+id)
        
        if (!resp.ok) throw new Error ('error fetching data')
            const data = await resp.json()
        return data
    } catch (error) {
        console.log(error);
    }
}

export default apiServices