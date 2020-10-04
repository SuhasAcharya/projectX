import React, { Fragment } from 'react'
import GoogleLogin from 'react-google-login';
import Header from './Header';
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';
// import requestLib from './Request'
import Axios from 'axios';

export default function Login() {
    const history = useHistory();
    const responseGoogle = async (response) => {        
        console.log('google response------------',response);

        const googleData = JSON.parse(JSON.stringify(response));
        console.log("value",googleData)
        console.log("value",googleData.profileObj.name)
        const username = googleData.profileObj.name;
        const googleId = googleData.profileObj.googleId;
        Cookies.set('username', googleData.profileObj.name);

        console.log(username,googleId)
        let getLoginDetail = async () => {
            await Axios.get(`http://18.222.158.111:3000/user/${googleId}/${username}`,{      
            withCredentials: false,
            headers: {
              'Access-Control-Allow-Origin' : '*',
              'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',   
          }})
            .then((responses)=>{
                console.log(JSON.parse(responses))
            })
            .catch(function (error) {
                console.log(error);
            });
        }
        await getLoginDetail();

    }
    history.push("/fishes");

    return (
        <Fragment>
            <Header/>
            <div className="col-sm-12 d-flex align-items-center justify-content-center flex-column p-5">
                <h4 class="sf-text-darkblue mb-4">Sign in to Something Fishy using Google</h4>
            <GoogleLogin
                clientId="484750823478-p3500scjr3kji8d0islij80gfvv9f3ku.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
            </div>
        </Fragment>
    )
}
