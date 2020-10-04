import React, { Fragment } from 'react'
import fishLogo from '../../src/fish.webp'

export default function Header() {
    return (
        <Fragment>
            <header className="col-sm-12 sf-lightgrey p-3 d-flex justify-content-center align-items-center">
                <div className="col-sm-9">
                    <h5 className="logo ls-1 p-0 m-0 sf-text-deepdarkblue"><img src={fishLogo} className="img-fluid" height="45px" width="45px" alt=""/> Something Fishy</h5>
                </div>
            </header>
        </Fragment>
    )
}
