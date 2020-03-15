import React from 'react';
import './AddFlight.css';

function AddFlight() {

    const handleSubmit=()=>{  
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit()}>
                <div>
                <h1 id='title'>Add New Flight Details</h1>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="routeLbl">Route :</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="route"  name="route" placeholder="From - To" />

                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="departure_TimeLbl">Departure Time :</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="departure_Time"  name="departure_Time" placeholder="Departure Time" />

                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="arrival_TimeLbl">Arrival Time :</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="arrival_Time" name="arrival_Time"  placeholder="Arrival Time" />

                    </div>
                </div>
                <div className="row">
                    <input type="submit" value="Submit" />

                </div>
            </form>
        </div >
    )
}

export default AddFlight;