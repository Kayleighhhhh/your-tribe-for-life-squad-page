export async function load({ fetch, params }) {
    // Fetch a single person by ID from the Directus API
    const personApiResponse = await fetch (`https://fdnd.directus.app/items/person/?filter[squads][squad_id][name]=2G&filter[name][_icontains]=${params.personName}`)
    
    // Parse the response as JSON
    const personApiResponseJSON = await personApiResponse.json()   
    
    // Extract the actual data object
    const person = personApiResponseJSON.data[0]

    // Pass the person data to the page
    return { person }
}