
import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';


interface OTPVerificationModalProps {
  number: string;
  onSubmit: (otp: string) => void;
   setLogin: (val: boolean) => void;
  onBack: () => void;
}

const OTPVerificationModal: React.FC<OTPVerificationModalProps> = ({ number, onSubmit, setLogin, onBack }) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(30);
  const [isResendDisabled, setIsResendDisabled] = useState(true);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setIsResendDisabled(false);
    }
  }, [timer]);

  const handleOtpChange = (index:any, value:any) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      
      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handleKeyDown = (index:any, e:any) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const handleSubmit = () => {
  const otpValue = otp.join('');
  onSubmit(otpValue);
  setLogin(true);
};

  const handleResendOTP = () => {
    setTimer(30);
    setIsResendDisabled(true);
    setOtp(['', '', '', '', '', '']);
    alert("OTP has been resent to your mobile number");
  };

  const formatTime = (seconds:any) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl max-w-md w-[500px] mx-4 overflow-hidden" style={{ height: '530px' }}>
       
        <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-4 text-white relative">
          <button 
            onClick={onBack}
            className="absolute top-4 left-4 text-white hover:bg-white/20 rounded-full p-2"
          >
            <ArrowLeft size={20} />
          </button>
          
          <div className="mt-8 text-center">
            <h2 className="text-2xl font-bold mb-2">OTP Verification</h2>
            <p className="text-purple-100 mb-4">
              OTP has been sent to +91 {number}
            </p>
          </div>
        </div>
        
     
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 text-center">
        
          <div className="flex justify-center gap-3 mb-6">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-12 bg-white text-purple-800 rounded-full text-center text-lg font-bold focus:outline-none focus:ring-2 focus:ring-purple-300 border-2 border-purple-200"
                maxLength={1}
              />
            ))}
          </div>
          
         
          <button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold py-3 rounded-full hover:from-purple-700 hover:to-purple-800 transition-all duration-200 disabled:opacity-50 mb-6"
            disabled={otp.join('').length !== 6}
          >
            Verify OTP
          </button>
          
        
          <div className="text-center mb-4">
            <div className="text-2xl font-bold text-purple-600">{formatTime(timer)}</div>
          </div>
          
        
          <div className="text-center mb-6">
            <span className="text-gray-600">Didn't get it?</span>
            <button
              onClick={handleResendOTP}
              className={`ml-2 underline ${
                isResendDisabled 
                  ? 'text-gray-400 cursor-not-allowed' 
                  : 'text-purple-600 hover:text-purple-700'
              }`}
              disabled={isResendDisabled}
            >
              Send OTP (SMS)
            </button>
          </div>
        </div>
        
        
        <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 text-center flex-1">
          <div className="mb-6">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl mx-auto mb-3 flex items-center justify-center">
              <div className="w-10 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              Order faster<br />& easier<br />everytime
            </h3>
            <p className="text-gray-600 text-sm">with the Zepto App</p>
          </div>
          
         
          <div className="space-y-2">
            <button className="w-full bg-black text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition">
              <div className="w-5 h-5 bg-white rounded flex items-center justify-center">
                <span className="text-black text-xs">▶</span>
              </div>
              <div className="text-left">
                <div className="text-xs">GET IT ON</div>
                <div className="text-sm font-semibold">Google Play</div>
              </div>
            </button>
            
            <button className="w-full bg-black text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition">
              <div className="w-5 h-5 bg-white rounded flex items-center justify-center">
                <span className="text-black text-xs">🍎</span>
              </div>
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-sm font-semibold">App Store</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OTPVerificationModal;