import React, { Fragment,useEffect } from 'react'
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import 'bootstrap/dist/css/bootstrap.min.css';
import fishLogo from '../../src/fish.webp'
import fishMarket from '../../src/fishmarket.jpg'
import { Link } from 'react-router-dom';

export default function Home() {
    useEffect(()=>{

        gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
    
        gsap.timeline({
           scrollTrigger:{
                 trigger:'.logo',
                 start:'center bottom'
             }
         }).from(".fishy-one", { y:200, opacity:0, duration:0})
           .from(".fish-one-text", { y:200, opacity:0, duration:1})
           .from(".fish-shop", { x:200, opacity:0, duration:0.5})
           .from(".fish-content", { y:-300 , delay:1, opacity:0, duration:2}, "-=1")
           .from(".step",{y:-100, opacity:0,duration:2,stagger:1})
       
      })


    return (
    <Fragment>
            
    <header className="col-sm-12 sf-lightgrey p-2 d-flex justify-content-center align-items-center">
        <div className="col-sm-9">
            <h5 className="logo ls-1 p-0 m-0 sf-text-deepdarkblue"><img src={fishLogo} className="img-fluid" height="45px" width="45px" alt=""/> Something Fishy</h5>
        </div>
    </header>
    
    <div className="fishy-one sf-lightgrey p-2 d-flex justify-content-center align-items-center">
        <div className="col-sm-9 d-flex justify-content-between align-items-center ">
            <div className="col-sm-12 d-flex justify-content-center align-items-center ">
                <div className="col-sm d-flex flex-column fish-content">
                    <h1 className="ls-1 p-0 m-0 sf-text-deepdarkblue">Something Fishy</h1>
                    <h3 className="my-2 sf-text-sand">"Your Fish my Command"</h3>
                </div>
                <div className="col-sm">
                    <img src={fishMarket} className="img-fluid fish-shop" alt=""/>
                </div>
            </div>

        </div>
    </div>

    <div className="fishy-one sf-deepdarkblue col-sm-12 py-4 d-flex flex-column justify-content-center align-items-center">
        <div className="col-sm-9 d-flex flex-column justify-content-center align-items-start">
            <h1 className="fish-one-text my-2 display-4 sf-text-sand ">FRESH FISH RIGHT AT YOUR DOORSTEP!</h1>
            <h1 className="fish-one-text my-2 sf-text-sand">You are just one click behind it</h1>
            <Link to="/fishes">
                <button className="ls-1 mt-4 btn btn-lg rounded sf-lightblue text-white">lets start fishing!</button>
            </Link>
        </div>
    </div>

    <div className="fishy-two col-sm-12 d-flex justify-content-center align-items-center">
        <div className="col-sm-9 d-flex flex-column justify-content-center align-items-center">
            <h1 className="sf-text-deepdarkblue my-4 ls-1">Its Simple! Follow these steps.</h1>
            <div className="row col-sm-12 mt-4 d-flex flex-row justify-content-center align-items-center">
                <div className="fish-steps col-sm-3 p-4 d-flex flex-column justify-content-center align-items-center custom-border">
                    <div className=" step sf-darkblue text-white">1</div>
                    <h4 className="m-0 my-3 sf-text-darkblue">Step 1</h4>
                    <p className="text-darkblue ls-1">Enter your details</p>
                </div>
                <div className="fish-steps col-sm-3 p-4 d-flex flex-column justify-content-center align-items-center custom-border">
                    <div className=" step sf-darkblue text-white">2</div>
                    <h4 className="m-0 my-3 sf-text-darkblue">Step 2</h4>
                    <p className="text-darkblue ls-1">Select the Fish</p>
                </div>
                <div className="fish-steps col-sm-3 p-4 d-flex flex-column justify-content-center align-items-center custom-border">
                    <div className=" step sf-darkblue text-white">3</div>
                    <h4 className="m-0 my-3 sf-text-darkblue">Step 3</h4>
                    <p className="text-darkblue ls-1">Select a Vendor</p>
                </div>
            </div>
        </div>
    </div>

    <footer className="bg-dark col-sm-12 d-flex flex-column justify-content-center align-items-center">
        <div className="col-sm-9 py-5 d-flex flex-row">
            <div className="col-sm-4 py-4">
                <h1 className="text-white">STAY IN </h1>
                <h1 className=" text-white">TOUCH</h1>
            </div>
            <div className="col-sm-6 ">
                <h5 className="sf-text-lightblue">Were Social</h5>
                <p className="ls-1 small text-white">Facebook</p>
                <p className="ls-1 small text-white">Instagram</p>
                <p className="ls-1 small text-white">Youtube</p>
            </div>
        </div>
    </footer>
    </Fragment>
    )
}
