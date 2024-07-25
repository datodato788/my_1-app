// src/app/page.jsx
"use client"; // დაამატეთ ეს ხაზი
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const LoginSocialFacebook = dynamic(
  () => import("reactjs-social-login").then((mod) => mod.LoginSocialFacebook),
  { ssr: false }
);
const FacebookLoginButton = dynamic(
  () =>
    import("react-social-login-buttons").then((mod) => mod.FacebookLoginButton),
  { ssr: false }
);

export default function Home() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    // კოდი, რომელიც იყენებს window ობიექტს
  }, []);

  return (
    <div>
      {!profile ? (
        <LoginSocialFacebook
          appId="1591703015807788"
          onResolve={(response) => {
            console.log(response);
            setProfile(response.data);
          }}
          onReject={(error) => {
            console.log(error);
          }}
        >
          <FacebookLoginButton />
        </LoginSocialFacebook>
      ) : (
        <div>
          <h1>{profile.name}</h1>
          <img src={profile.picture.data.url} alt="Profile" />
        </div>
      )}
    </div>
  );
}
