import React, { useEffect, useState } from 'react'

const Covid = () => {

    const [data,setData] = useState([]);

    const getCovidData = async () => {
        try {

            const res = await fetch('https://api.covid19india.org/data.json');
            const actualdata = await res.json();
            console.log(actualdata.statewise[0]);
            setData(actualdata.statewise[0]);
            
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        getCovidData();
    }, [])


    return (
        <>
            <h1>Covid 19 Tracker</h1>

            <ul class="list-unstyled">
                <li>
                    <div class="card w-25">
                        <div class="card-header">
                            OUR <span>Country</span>
                            <p>INDIA</p>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title"> Special title treatment </h5>
                            <p class="card-text"> onal content.</p>
                        </div>
                    </div>
                </li>

                <li>
                    <div class="card w-25 m-2">
                        <div class="card-header">
                            Total <span>Rcovered</span>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title"> data.recovered </h5>
                        </div>
                    </div>
                </li>


            </ul>


        </>
    )
}

export default Covid