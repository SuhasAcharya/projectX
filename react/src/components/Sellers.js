import React, { Fragment } from 'react'
import User from '../../src/users.jpg'
import Header from './Header'
import { Link } from 'react-router-dom';
import Steps from './Steps'

export default function Sellers() {

    const fishData = [
        {
            "master_fish_list": [{
                "master_fish_id": 1,
                "fish_name": "bangude",
                "price": 100,
                "quantity": 1,
                "image":"",
            }, {
                "master_fish_id": 1,
                "fish_name": "bangude",
                "price": 100,
                "quantity": 1,
                "image":"",
            }]
        }
    ]

const SellerLists = (props) => {
    return(
        <Fragment>
            <div className="bg-white col-sm-5 col-md-4 col-lg-2 p-3 m-2 border d-flex flex-column rounded">
                <img src={User} className="img-fluid fish" alt=""/>
                
                <div className="row my-2 d-flex flex-column align-items-center justify-content-start">
                <h5 className="m-0 col-sm">{props.name}</h5>
                <p className="my-2 m-0 col-sm small"><span className="sf-text-lightblue">Availibility :</span> {props.isAvailable}</p>
                    <div className="col-sm p-0 mt-1">
                        <p className="col-sm m-0 small"><span className="sf-text-lightblue">Location status</span></p>
                        <p className="col-sm m-0">{props.locationStatus}</p>
                    </div>
                </div>
                <Link to="/orders">
                <button className=" my-2 btn sf-lightblue text-white">Place Order</button>
                </Link>
            </div>
        </Fragment>
    )
}

    return (
        <Fragment>
            <Header></Header>
            <div className="sf-lightgrey py-2 col-sm-12 d-flex justify-content-center align-items-center">
                <Steps step='2'/>
            </div>
            <div className="sf-lightgrey py-5 col-sm-12 d-flex justify-content-center align-items-center">
                <div className="col-sm-12 col-md-9 d-flex flex-wrap">
                    <SellerLists name="Samanth" isAvailable="Yes" locationStatus="100 meters away"/>
                    <SellerLists name="Afran" isAvailable="No" locationStatus=" 3km away"/>
                    <SellerLists name="Neil" isAvailable="Yes" locationStatus="6km away"/>
                    <SellerLists name="Preetham" isAvailable="Yes" locationStatus="200 meters away"/>
                    <SellerLists name="Sachin" isAvailable="No" locationStatus="1km away"/>
                    <SellerLists name="Jhon" isAvailable="No" locationStatus="20 meters"/>
                    <SellerLists name="Atif" isAvailable="No" locationStatus="450 meters"/>
                </div>
            </div>
        </Fragment>
    )
}
