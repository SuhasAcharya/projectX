import React, { Fragment ,useState} from 'react'

export default function Steps(props) {
    const [stepsCount,setstepsCount] = useState();
    console.log(props.steps);
    if(props.step==='1'){
        return (
            <Fragment>
                <div className="col-sm-9 p-2 d-flex flex-row">
                    <div className="col-sm-4 d-flex flex-row justify-content-start align-items-center">
                        <div className=" step sf-darkblue text-white">1</div>
                        <p className="m-0 my-3 sf-text-darkblue ml-4">Select fishes</p>
                    </div>
                    <div className="col-sm-4 d-flex flex-row justify-content-start align-items-center">
                        <div className=" step-transparent">2</div>
                        <p className="m-0 my-3 sf-text-darkblue ml-4">Select seller</p>
                    </div>
                    <div className="col-sm-4 d-flex flex-row justify-content-start align-items-center">
                        <div className=" step-transparent">3</div>
                        <p className="m-0 my-3 sf-text-darkblue ml-4">Confirm Order</p>
                    </div>
                </div>
            </Fragment>
        )
    }
    else if(props.step==='2'){
        return (
            <Fragment>
                <div className="col-sm-9 p-2 d-flex flex-row">
                    <div className="col-sm-4 d-flex flex-row justify-content-start align-items-center">
                        <div className=" step-transparent">1</div>
                        <p className="m-0 my-3 sf-text-darkblue ml-4">Select fishes</p>
                    </div>
                    <div className="col-sm-4 d-flex flex-row justify-content-start align-items-center">
                        <div className="step sf-darkblue text-white">2</div>
                        <p className="m-0 my-3 sf-text-darkblue ml-4">Select seller</p>
                    </div>
                    <div className="col-sm-4 d-flex flex-row justify-content-start align-items-center">
                        <div className=" step-transparent">3</div>
                        <p className="m-0 my-3 sf-text-darkblue ml-4">Confirm Order</p>
                    </div>
                </div>
            </Fragment>
        )
    }
    else if(props.step==='3'){
        return (
            <Fragment>
                <div className="col-sm-9 p-2 d-flex flex-row">
                    <div className="col-sm-4 d-flex flex-row justify-content-start align-items-center">
                        <div className=" step-transparent">1</div>
                        <p className="m-0 my-3 sf-text-darkblue ml-4">Select fishes</p>
                    </div>
                    <div className="col-sm-4 d-flex flex-row justify-content-start align-items-center">
                        <div className=" step-transparent ">2</div>
                        <p className="m-0 my-3 sf-text-darkblue ml-4">Select seller</p>
                    </div>
                    <div className="col-sm-4 d-flex flex-row justify-content-start align-items-center">
                        <div className="step sf-darkblue text-white">3</div>
                        <p className="m-0 my-3 sf-text-darkblue ml-4">Confirm Order</p>
                    </div>
                </div>
            </Fragment>
        )
    }
}
