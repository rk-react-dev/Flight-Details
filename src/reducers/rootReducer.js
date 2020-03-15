import _ from 'lodash';

const initialState = {
    flightDetails: [],
    pageWiseFlights: [],
    totalPages: 0,
    pageSize: 10,
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_FLIGHT_DETAILS':
            const flightDetails = action.payload;
            const pageWiseFlights = _.chunk(flightDetails, state.pageSize);
            const totalPages=flightDetails.length/10;
            return { ...state, flightDetails: flightDetails, pageWiseFlights: pageWiseFlights, totalPages: totalPages}
        default:
            return state;
    }
}

export default rootReducer;