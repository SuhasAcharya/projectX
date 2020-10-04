import React, { Fragment } from 'react'
import Header from './Header'
import Steps from './Steps'

export default function Order() {
    return (
        <Fragment>
            <Header></Header>
            <div className="sf-lightgrey py-2 col-sm-12 d-flex justify-content-center align-items-center">
                <Steps step='3'/>
            </div>
            <div className="sf-lightgrey py-5 col-sm-12 d-flex justify-content-center align-items-center">
                <div className="col-sm-12 col-md-9 d-flex flex-wrap align-items-center justify-content-center">
                    <div className="col-sm-5 bg-white border">
                        <form>
                            <div className="form-group m-4">
                                <div className="my-3">
                                    <label htmlFor="colFormLabelSm" className="p-0 col-sm-2 col-form-label col-form-label-sm">Username</label>
                                    <input type="text" className="form-control my-2" placeholder="Name"/>
                                </div>

                                <div className="my-3">
                                    <label htmlFor="colFormLabelSm" className="p-0 col-sm-2 col-form-label col-form-label-sm">Address</label>
                                    <input type="text" className="form-control my-2" placeholder="Address"/>
                                </div>
                                
                                <div className="my-3">
                                    <label htmlFor="colFormLabelSm" className="p-0 col-sm-2 col-form-label col-form-label-sm">Mobile</label>
                                    <input type="number" className="form-control my-2" placeholder="Mobile number"/>
                                </div>
                        
                                <button className="btn sf-lightblue text-white">Order now</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
