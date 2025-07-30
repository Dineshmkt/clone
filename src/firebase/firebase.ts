


import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier,  type Auth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBunT6zuzaTmdqakmfqYIxp-xTPQdhxw9E",
  authDomain: "phone-9e0e8.firebaseapp.com",
  projectId: "phone-9e0e8",
  storageBucket: "phone-9e0e8.appspot.com",
  messagingSenderId: "404938563852",
  appId: "1:404938563852:web:a20e77647aaf60ad6da929",
  measurementId: "G-7RTM0WHNX6"
};

const app = initializeApp(firebaseConfig);
export const auth: Auth = getAuth(app);

declare global {
  interface Window {
    recaptchaVerifier: any;
  }
}

export const setupRecaptcha = (containerId: string) => {
  if (!window.recaptchaVerifier) {
    window.recaptchaVerifier = new RecaptchaVerifier(
      auth,
      containerId,
      {
        size: "invisible",
        callback: (response: any) => {
          console.log("reCAPTCHA resolved");
          console.log(response)
        },
        'expired-callback': () => {
          console.log('reCAPTCHA expired');
        }
      }
    );
  }
};
