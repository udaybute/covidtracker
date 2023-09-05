import React, { useEffect, useState } from 'react'
import '../components/covid.css';
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
       <div className='container '>

      
            <ul className="list-unstyled row">
                <li className='col-4'>
                <div class="card  m-2 ">
                        <div class="card-header">
                            OUR <span>Country</span>
                            <p>INDIA</p>
                        </div>
                       
                    </div>
                </li>

                <li className='col-4'>
                <div class="card  m-2 ">
                        <div class="card-header">
                            Total <span>Rcovered</span>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title"> data.recovered </h5>
                        </div>
                    </div>
                </li>

                <li className='col-4'>
                <div class="card  m-2 ">
                        <div class="card-header">
                            Total <span>confiremed</span>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title"> data.confiremed </h5>
                        </div>
                    </div>
                </li>

            
                <li className='col-4'>
                <div class="card  m-2 ">
                        <div class="card-header">
                            Total <span>Deaths</span>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title"> data.deaths </h5>
                        </div>
                    </div>
                </li>

                <li className='col-4'>
                <div class="card  m-2 ">
                        <div class="card-header">
                            Total <span>Active case</span>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title"> data.active </h5>
                        </div>
                    </div>
                </li>

                <li className='col-4'>
                <div class="card  m-2 ">
                        <div class="card-header">
                             <span>last update time</span>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title"> data.lastupdatetime </h5>
                        </div>
                    </div>
                </li>


            </ul>

            </div>

        </>
    )
}

export default Covid