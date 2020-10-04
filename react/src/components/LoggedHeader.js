import React, { Fragment } from 'react'
import fishLogo from '../../src/fish.webp'
import Cookies from 'js-cookie';

export default function Loggedheader() {
    const user = Cookies.get('username');
    console.log(user)
    return (
        <Fragment>
            <header className="col-sm-12 sf-lightgrey p-3 d-flex justify-content-center align-items-center">
                <div className="col-sm-9 p-0 d-flex flex-flow ">
                    <div className="col-sm-4">
                        <h5 className="logo ls-1 p-0 m-0 sf-text-deepdarkblue"><img src={fishLogo} className="img-fluid" height="45px" width="45px" alt=""/> Something Fishy</h5>
                    </div>
                    <div className="col-sm-5"></div>
                    <div className="col-sm-4 d-flex justify-content-center align-items-center">
                    <p className="logo ls-1 p-0 m-0 sf-text-deepdarkblue">{user}</p>
                    </div>
                </div>
            </header>
        </Fragment>
    )
}
