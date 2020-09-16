import React from "react";
import { GoogleLogin } from 'react-google-login';

const CompLog = () => {
    const responseGoogle = (response) => {
        console.log(response);
      }
    return(
    <div> Hello je suis le comp log
    <GoogleLogin
    clientId="394834453579-aqcvsrecefm0pm69l6fifjr9a53hok9l.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    isSignedIn={true}
  />
    </div>
  
    )
}

export default CompLog;