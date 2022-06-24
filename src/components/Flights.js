import React, {useEffect, useState} from 'react';

const Flights = () => {
    const [flightList, setFlights] = useState([]);

    useEffect(() => {
        fetch("https://api.spacexdata.com/v3/launches/")
            .then(value => value.json())
            .then(flights => {
                let filter = flights.filter(flights => flights.launch_year !== 2020)
                setFlights(filter)
            })
    },[]);


    return (
        <div>
            {
                flightList.map(value => <div key={value.flight_number}>
                    {value.flight_number} - {value.mission_name} - {value.launch_year}
                    <img src={value.links.mission_patch_small} />

                </div>)
            }

        </div>
    );
};

export default Flights;