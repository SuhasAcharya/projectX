import React, { Fragment, useState, useEffect } from 'react'
import fishLogo from '../../src/fish.webp'
import Header from './Header'
import { Link } from 'react-router-dom';
import Steps from './Steps'
import Loggedheader from './LoggedHeader';
import Axios from 'axios'


export default function Fishes() {


    const [data,setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          const result = await Axios(
            `http://18.222.158.111:3001/masterFishList`,
          );
     
          setData(result.data);
        };
     
        fetchData();
      }, []);

    console.log(data);


const FishList = (props) => {
    return(
        <Fragment>
            <div className="bg-white col-sm-5 col-md-4 col-lg-2 p-3 m-2 border d-flex flex-column rounded">
                <img src={fishLogo} className="img-fluid fish" alt=""/>
                
                <div className="row my-2 d-flex flex-column align-items-center justify-content-start">
                <h5 className="mb-3 m-0 col-sm">{props.name}</h5>
                    <div className="col-sm p-0">
                        <p className="col-sm m-0 small">Price</p>
                        <p className="col-sm m-0">{props.price}/KG</p>
                    </div>
                </div>
                <div className="col-sm my-2 d-flex justify-content-between align-items-start flex-column p-0">
                        <p className="col-sm m-0 p-0 mb-2 small">Quantity</p>
                        <input type="number" className="p-0 px-2" min="1" max="5"/>
                </div>

                <Link to="/sellers">
                <button className=" my-2 btn sf-lightblue text-white">Buy this fish</button>
                </Link>
            </div>
        </Fragment>
    )
}

    return (
        <Fragment>
            <Loggedheader/>
            <div className="sf-lightgrey py-2 col-sm-12 d-flex justify-content-center align-items-center">
                <Steps step='1'/>
            </div>
            <div className="sf-lightgrey py-5 col-sm-12 d-flex justify-content-center align-items-center">
                <div className="col-sm-12 col-md-9 d-flex flex-wrap">
                    <FishList name="Mackerel" price="100"/>
                    <FishList name="Kingfish" price="130"/>
                    <FishList name="Ladyfish" price="80"/>
                    <FishList name="Pomfret" price="200"/>
                    <FishList name="Pearlspot" price="230"/>
                    <FishList name="Catfish" price="170"/>
                    <FishList name="Stingray" price="210"/>
                </div>
            </div>
        </Fragment>
    )
}
