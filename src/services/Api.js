

const apiServices = {}

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


export default apiServices