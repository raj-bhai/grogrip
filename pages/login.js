import React from "react"; 
import Image from "next/image";
import axios from "axios";
import url from "../constants/url";
import { useRouter } from "next/router";
import LoadingScreen from "../components/Loader/LoadingScreen";
//import { GoogleLogin } from 'react-google-login';
import jwt_decode from "jwt-decode";
import person from "../images/user/b2bperson.png";

import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
const Login = () => {
  const router = useRouter()
  const backgroundGradient = " bg-gradient-to-r from-[#107840] via-[#107840] via-[#1F5025] via -[#28602E] to-[#107840]";
  const clientId = "1036453217553-382m7c1vsrsuqt0o08fkrsngjfi39bhh.apps.googleusercontent.com";


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
          router.push('/home')
          console.log("Success");
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <>
      <section className={`w-full h-screen transition ease-in-out delay-150  ${backgroundGradient}`}>
        <div className="w-full flex items-center justify-center h-screen bg-no-repeat bg-bottom  scroll-smooth bg-[url('../images/user/b2byellow.svg')]">
          <div className="formcontainer flex flex-col items-center justify-center gap-4 border-1 backdrop-brightness-105 backdrop-invert-0 border-gray- shadow-md mb-32 px-2 py-4 rounded-lg ">
            <Image src="/images/favicon.png" width={50} height={50} className="rounded-lg" alt="logo "></Image>
            <h1 className="text-white font-medium text-4xl">GroGrip</h1>
            <div className="border- border-pink-500 mx-12 h- flex flex-col items-center justify-center gap-3">
              <GoogleOAuthProvider clientId={clientId} >
                <Image src={person} className=" aspect-square" width={120} height={160} ></Image>
                <GoogleLogin
                  onSuccess={(credentialResponse) => {
                    try {
                      console.log(credentialResponse);
                      localStorage.setItem("token", credentialResponse.credential);
                      var decoded = jwt_decode(credentialResponse.credential);
                      console.log("decoded :", decoded);
                      router.push("/home");
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
                  useOneTap
                />
              </GoogleOAuthProvider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Login;



