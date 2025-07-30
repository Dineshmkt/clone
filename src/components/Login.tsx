
import { useEffect, useState } from "react";
import { auth, setupRecaptcha } from "../firebase/firebase";
import { NumberValue } from "../features/NumberSlice";
import { signInWithPhoneNumber } from "firebase/auth";
import type { ConfirmationResult } from "firebase/auth";
import OTPVerification from "./OTPVerificationModal";
import { useDispatch } from "react-redux";

declare global {
  interface Window {
    recaptchaVerifier: any;
  }
}
type Props = {
  setShowLogin: React.Dispatch<React.SetStateAction<boolean>>;
  setLoginModel:React.Dispatch<React.SetStateAction<boolean>>;
};

const Login = ({setShowLogin,setLoginModel}:Props) => {
  const dispatch=useDispatch()
  const [login, setLogin] = useState(false);
  const [number, setNumber] = useState<string>("");
  // const [otp, setOtp] = useState<string>("");
  const [value, setValue] = useState(false);
  const [confirmation, setConfirmation] = useState<ConfirmationResult | null>(null);

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value);

  };


  const handleValue = async () => {
    if (!number || number.length !== 10) {
      alert("Please enter a valid 10-digit phone number");
      return;
    }
    
    dispatch(NumberValue(Number(number)))

    if (!window.recaptchaVerifier) {
      setupRecaptcha("recaptcha-container");
    }

    const appVerifier = window.recaptchaVerifier;

    try {
      const result = await signInWithPhoneNumber(auth, `+91${number}`, appVerifier);
      setConfirmation(result);
      setValue(true);
    } catch (error) {
      console.error("OTP send error", error);
      alert("Failed to send OTP. Try again.");
    }
  };

  
  const handleSubmit = async (otpValue: string) => {
    if (!otpValue || otpValue.length !== 6) {
      alert("Please enter the 6-digit OTP");
      return;
    }

    if (!confirmation) {
      alert("No confirmation found.");
      return;
    }

    try {
      const result = await confirmation.confirm(otpValue);
      console.log("User:", result.user);
      setLogin(true);
      alert("OTP verified successfully");
    } 
    catch (error) {
      alert("Invalid OTP. Please try again.");
    }
  };
  
  useEffect(() => {
    console.log("Login page loaded");
  }, []);
  
  // const handleButton=()=>{
  //   setShowLogin(false)
  // }
  const handleButton = () => {
    console.log("handlebutton")
     setShowLogin(false);
     setLoginModel(true)
}
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/40">
         <button onClick={handleButton}  className="absolute top-6 right-6 z-50 text-white font-bold text-lg hover:text-gray-600 text-xl font-bold">x</button>
      <div id="recaptcha-container"></div>
       {login ? (
        <div>
          {/* <Value number={number} /> */}
        </div>
      ) : (
        <div>
          {value ? (
            <OTPVerification 
              number={number}
              onSubmit={handleSubmit}  
               setLogin={setLogin}
              onBack={() => setValue(false)}
            />
          ) : (
            <div className="flex rounded-xl overflow-hidden shadow-lg max-w-3xl mx-auto">
              <div className="w-2/3 bg-gradient-to-br from-[#6A0DAD] to-[#9B1BD1] text-white p-8">
                <h1 className="text-4xl font-bold mb-4 text-[#FF5C8D]">zepto</h1>
                <h2 className="text-2xl font-semibold mb-6">Groceries delivered<br />in 10 minutes</h2>
                <div className="flex items-center bg-white rounded-full overflow-hidden px-4 py-2 mb-4">
                  <span className="text-gray-600 font-medium mr-2">+91</span>
                  <input
                    type="number"
                    value={number}
                    onChange={handleNumberChange}
                    placeholder="Enter Phone Number"
                    className="outline-none flex-1 text-sm text-gray-800"
                  />
                </div>

                <button
                  onClick={handleValue}
                  className="w-full bg-gradient-to-r from-[#FF5C8D] to-[#FF7F50] text-white font-semibold py-2 rounded-full disabled:opacity-50"
                  disabled={!number}
                >
                  Continue
                </button>

                <p className="text-sm text-center mt-4">
                  By continuing, you agree to our<br />
                  <span className="text-pink-300 underline cursor-pointer">Terms of Service</span> &nbsp;
                  <span className="text-pink-300 underline cursor-pointer">privacy policy</span>
                </p>
              </div>

              <div className="w-1/3 bg-gradient-to-b from-[#FFE9F0] to-white p-6 flex flex-col items-center justify-center text-center">
                <img src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/13.2.0/tr:w-100,ar-100-100,pr-true,f-auto,q-80//images/get-the-app/get-the-app-phone.png" alt="App" className="w-14 h-14 mb-4" />
                <p className="text-purple-800 font-bold text-lg leading-tight mb-1">
                  Order faster<br />& easier everytime
                </p>
                <p className="text-xs text-gray-500 mb-4">with the Zepto App</p>

                <img src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/13.2.0/tr:w-180,ar-180-46,pr-true,f-auto,q-80//images/app-stores/download-play-store.svg" alt="Google Play" className="w-32 mb-2 cursor-pointer" />
                <img src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/13.2.0/tr:w-180,ar-180-46,pr-true,f-auto,q-80//images/app-stores/download-app-store.svg" alt="App Store" className="w-32 cursor-pointer" />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Login;