// Get data from API with fetch request
const apiUrl = "http://localhost:3000/api/furniture";

async function getAllItems(apiUrl) {
    let result = await fetch(apiUrl)
    return result.json()
};

export default getAllItems;