import { call, put, takeEvery } from 'redux-saga/effects'
import {fetchCheapFlightDetails, fetchBusinessFlightDetails} from './api'
import {saveFlightDetails} from '../actions/index' 
function* fetchData(action) {
    try {
       const flightDetailsCheap = yield call(fetchCheapFlightDetails);
       const flightDetailsBussiness = yield call(fetchBusinessFlightDetails);

       const busiData=flightDetailsBussiness.data.map((flight, index)=>{
          return {
             route : flight.departure +'-'+ flight.arrival,
             departure : flight.departureTime,
             arrival : flight.arrivalTime
          }
       })

       const AllFlightdetails=[...flightDetailsCheap.data, ...busiData];
       yield put(saveFlightDetails(AllFlightdetails));
    } catch (e) {
      // yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
 }

 function* rootSagas() {
    yield takeEvery("FETCH_FLIGHT_DETAILS", fetchData);
  }

  export default rootSagas;