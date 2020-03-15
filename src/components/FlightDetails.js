import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './FlightDetails.css';
import Moment from "react-moment";

function FlightDetails() {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = useSelector((state) => state.totalPages);
    const pageWiseFlights = useSelector((state) => state.pageWiseFlights);

    let flightsData = pageWiseFlights && pageWiseFlights[currentPage - 1];
    const loading = "Loading..."
    const dateFormat = "D MMM YYYY  HH:mm";
    
    useEffect(() => {
        dispatch({ type: 'FETCH_FLIGHT_DETAILS' })
    }, [])

    const renderTableData = () => {
        return flightsData && flightsData.map((flight, index) => {
            const { route, departure, arrival } = flight 
            return (
                <tr>
                    <td>{route}</td>
                    <td>
                        <Moment format={dateFormat} withTitle>
                            {departure}
                        </Moment>
                    </td>
                    <td>
                        <Moment format={dateFormat} withTitle>
                            {arrival}
                        </Moment>
                    </td>
                </tr>
            )
        })
    }

    const renderTableHeader = () => {
        let header = flightsData && flightsData.length > 0 ? Object.keys(flightsData[0]) : []
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    const loadingData = () => {
        return !flightsData &&
            <tr><td>{loading}</td></tr>

    }
    const createSelectItems = () => {
        let items = [];
        for (let i = 0; i <= totalPages; i++) {
            items.push(<option key={i + 1} value={i + 1}>{i + 1}</option>);
        }
        return items;
    }

    const pageSelection = (selectedPage) => {
        setCurrentPage(selectedPage);
        flightsData = pageWiseFlights && pageWiseFlights[currentPage - 1];
    }

    return (
        <div>
            <h1 id='title'>Flight Details</h1>
            <table id='flights'>
                <tbody>
                    <tr>{renderTableHeader()}</tr>
                    {renderTableData()}
                    {loadingData()}
                </tbody>
            </table>
            {flightsData &&
                <select id="pagination" onChange={(e) => pageSelection(e.target.value)}>
                    {createSelectItems()}
                </select>
            }

        </div>
    )
}
export default FlightDetails;
