const base_url = 'https://tokigames-challenge.herokuapp.com/api/'
const fetchCheapFlightDetails = async () => {
    try {
        const response = await fetch(base_url + 'flights/cheap');
        const data = await response.json();
        return data;
    } catch (e) {
        console.log(e);
    }
}

const fetchBusinessFlightDetails = async () => {
    try {
        const response = await fetch(base_url + 'flights/business');
        const data = await response.json();
        return data;
    } catch (e) {
        console.log(e);
    }
}

export {
    fetchBusinessFlightDetails,
    fetchCheapFlightDetails
}