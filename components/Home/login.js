import React, { useState, useEffect } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import axios from "axios";
import url from '../../constants/url'

const LoginButton = () => {

    const clientId = "1036453217553-382m7c1vsrsuqt0o08fkrsngjfi39bhh.apps.googleusercontent.com";
    // const clientId ='417772094698-i6ib6drofugv1bq3o69d9m1unp4e9ekq.apps.googleusercontent.com'

    const Login = (name, email, number, type, isAdmin, fbId, googleId) => {
        axios.post(`${url.apiRoot}/auth/signIn`, {
            name: name,
            email: email,
            number: number,
            type: type,
            isAdmin: isAdmin,
            fbId: fbId,
            googleId: googleId
        })
            .then(res => {
                if (res.data.success) {
                    console.log("response :", res.data);
                    // window.location.reload();
                }
            })
            .catch(err => {
                console.log(err);
                // window.location.reload();
            });
    }

    return (
        <div className="absolute bg-white right-2 top-2 z-[1000] hidden " >
        <GoogleOAuthProvider clientId={clientId}
    
        >
            <GoogleLogin
            cancel_on_tap_outside={false}
                onSuccess={(credentialResponse) => {
                    try {
                        console.log(credentialResponse);
                        localStorage.setItem("token", credentialResponse.credential);
                        var decoded = jwt_decode(credentialResponse.credential);
                        console.log("decoded :", decoded);
                        // router.push("/home");
                        Login(
                            decoded.name,
                            decoded.email,
                            "",
                            "google",
                            false,
                            "",
                            credentialResponse.credential
                        );
                    } catch (err) {
                        console.log(err);
                    }
                }}
                onError={() => {
                    console.log("Login Failed");
                }}
                // useOneTap
                auto_select
                
            />
        </GoogleOAuthProvider>
        </div>
    )
}

export default LoginButton