import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import QRCode from 'react-qr-code';
import NetBanking from './NetBanking';
import CashOnDelievery from './CashOnDelievery';
interface PaymentOption {
  id: string;
  name: string;
  icon: string;
  description: string;
}

const Payment: React.FC = () => {
   const location = useLocation();
  const [showQR, setShowQR] = useState(false);
  const [qrValue, setQRValue] = useState("");
  const { totalPrice } = location.state || { totalPrice: 0 };
  const [selectedPayment, setSelectedPayment] = useState<string>('pay-on-delivery');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
   const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('')
    const navigate= useNavigate()


  const paymentOptions: PaymentOption[] = [
    { id: 'upi', name: 'UPI', icon: '',description: 'Pay using your UPI ID or scan QR code'},
    { id: 'card', name: 'Credit / Debit Card', icon: '', description: 'Pay securely with your credit or debit card' },
    { id: 'netbanking', name: 'Netbanking', icon: '', description: 'Pay using Netbanking' },
    { id: 'pay-on-delivery', name: 'Pay On Delivery', icon: '', description: 'Pay by Cash/UPI on delivery' }
  ];

  const selectedOption = paymentOptions.find(option => option.id === selectedPayment);

  const handlePaymentSelect = (paymentId: string) => {
    setSelectedPayment(paymentId);
  };


  const handleProceedToPay = () => {
    setIsProcessing(true);
    navigate("/submitted")
    setTimeout(() => {
      setIsProcessing(false);
      alert('Payment initiated successfully!');
    }, 2000);
  };

  const handleClose = () => {
    alert('Payment cancelled');
    
  };

    const handleGenerateQR = () => {
    const cart = [{ id: 1, name: "Shampoo", price: 99 }];
    const total = 99;

    const data = JSON.stringify({ cart, total }); 
    setQRValue(data);
    setShowQR(!showQR);
  };

  const [timeLeft, setTimeLeft] = useState(210); 

useEffect(() => {
  if (!showQR) return;
  const interval = setInterval(() => {
    setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
  }, 1000);
  return () => clearInterval(interval);
}, [showQR]);

const formatTime = (seconds: number) => {
  const m = String(Math.floor(seconds / 60)).padStart(2, '0');
  const s = String(seconds % 60).padStart(2, '0');
  return `${m}:${s}`;
};



  return (
    <div className="max-w-4xl mt-6 mx-auto bg-white rounded-xl overflow-hidden shadow-2xl">
     
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-6 relative ">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Order Summary</h1>
          <div className="text-2xl font-bold mx-10">Amount :₹{totalPrice}</div>
        </div>
        <button 
          onClick={handleClose}
          className="absolute top-5 right-5 bg-white bg-opacity-20 hover:bg-opacity-30 text-white w-8 h-8 rounded-full flex items-center justify-center text-xl transition-all duration-200"
        >
          x
        </button>
      </div>

      <div className="flex flex-col md:flex-row min-h-96">
      
        <div className="w-full md:w-80 bg-gray-50 border-r border-gray-200">
          {paymentOptions.map((option) => (
            <div
              key={option.id}
              onClick={() => handlePaymentSelect(option.id)}
              className={`flex items-center px-6 py-4 border-b border-gray-200 cursor-pointer transition-all duration-200 relative ${
                selectedPayment === option.id
                  ? 'bg-purple-50 border-l-4 border-l-purple-600'
                  : 'hover:bg-gray-100'
              }`}
            >
              <div className={`w-6 h-6 mr-4 flex items-center justify-center ${
                selectedPayment === option.id ? 'text-purple-600' : 'text-gray-500'
              }`}>
                {option.icon}
              </div>
              <div className="text-base font-medium text-gray-900">
                {option.name}
              </div>
            </div>
          ))}
        </div>

    
        

      <div className="flex-1 p-10">
          {selectedPayment === 'upi' ? (
           
            <div className="max-w-md mx-auto">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Pay by any UPI app</h2>
              
              <div className="mb-8">
                <p className="text-gray-600 mb-6">
                  Scan the QR using any UPI app on your mobile phone like PhonePe, Paytm, GooglePay, BHIM, etc
                </p>
                
                
              <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12  rounded-full flex items-center justify-center">
                    <img src="https://assets.juspay.in/hyper/images/common/jp_phonepe.png" alt="PhonePe" className="w-8 h-8 object-contain" />
                  </div>
                  <div className="w-12 h-12   rounded-lg flex items-center justify-center">
                    <img src="https://assets.juspay.in/hyper/images/common/jp_googlepay.png" alt="Google Pay" className="w-8 h-8 object-contain" />
                  </div>
                  <div className="w-12 h-12  rounded-lg flex items-center justify-center">
                    <img src="https://assets.juspay.in/hyper/images/common/jp_paytm.png" alt="UPI" className="w-8 h-8 object-contain" />
                  </div>
                  <div className="w-12 h-12  rounded-lg flex items-center justify-center">
                    <img src="https://assets.juspay.in/hyper/images/common/jp_cred_logo.png" alt="Paytm" className="w-8 h-8 object-contain" />
                  </div>
                  <div className="w-12 h-12  rounded-lg flex items-center justify-center">
                    <img src="https://assets.juspay.in/hyper/images/common/jp_amazonpay.png" alt="Amazon Pay" className="w-8 h-8 object-contain" />
                  </div>
                  <div className="w-12 h-12  rounded-lg flex items-center justify-center">
                    <img src="https://assets.juspay.in/hyper/images/common/jp_bhim.png" alt="FreeCharge" className="w-8 h-8 object-contain" />
                  </div>
                  <div className="w-12 h-12  rounded-lg flex items-center justify-center">
                    <img src="https://assets.juspay.in/hyper/images/common/jp_supermoney.png" alt="MobiKwik" className="w-8 h-8 object-contain" />
                  </div>
                </div> 
                
                
                <div className="flex items-center justify-between mb-8">
                  <div className="flex-1">
                    <button
                      onClick={handleGenerateQR}
                      className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                    {showQR ? "Hide OR code":"Generate QR Code"}  
                    </button>
                  </div>
                  
                  </div>

               

                 {showQR && (
                  <div className="bg-white max-w-sm mx-auto p-6 rounded-xl shadow-lg text-center space-y-4 mt-6">
                 <img
                 src="data:image/jpeg;base64,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"
                 alt="UPI"
                 className="h-8 mx-auto"
                 />

              <h2 className="text-3xl font-semibold text-gray-800">₹{totalPrice.toFixed(2)}</h2>

  
             <p className="text-gray-600">Scan the QR code using your preferred UPI app to complete the payment</p>

 
             <div className="flex justify-center">
              <QRCode value={qrValue} size={180} level="H" />
             </div>
          <div className="w-full">
               <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden mb-2">
               <div
                  className="h-full bg-blue-600 transition-all"
                  style={{ width: `${(timeLeft / 210) * 100}%` }}
                 />
              </div>
            <p className="text-sm text-gray-500">
                 You have <span className="font-medium">{formatTime(timeLeft)}</span> to pay
               </p>
          </div>
        </div>
        )}
                <div className="text-center text-gray-400 text-sm mb-6">OR</div>
                <div className="mb-6">
                  <label className="block text-pink-500 font-medium mb-2">UPI ID / VPA</label>
                  <input
                    type="text"
                    placeholder="e.g xxx@upi"
                    className="w-full px-4 py-3 border-2 border-pink-300 rounded-lg focus:outline-none focus:border-pink-500 transition-colors"
                  />
                  <p className="text-gray-500 text-sm mt-2">A collect request will be sent to this UPI ID</p>
                </div>
                
                <button
                  onClick={handleProceedToPay}
                  disabled={isProcessing}
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-300 shadow-lg ${
                    isProcessing
                      ? 'bg-green-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 hover:shadow-xl'
                  }`}
                >
                  {isProcessing ? 'Processing...' : 'Verify and Pay'}
                </button>
              </div>
            </div>
          ) : selectedPayment === 'card' ? (
                     
                        <div className="max-w-md mx-auto mb-4">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Enter Credit / Debit card details</h2>
                            
                            <div className="space-y-6">
                               
                                <div>
                                    <label className="block text-pink-500 font-medium mb-2">Card Number</label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Enter Card Number"
                                            value={cardNumber}
                                              onChange={(e) => setCardNumber(e.target.value)} 
                                            maxLength={19}
                                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-pink-500 transition-colors pr-12"
                                        />
                                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                            <div className="w-8 h-5 bg-gray-200 rounded flex items-center justify-center">
                                                <span className="text-xs">💳</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                               
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-gray-600 font-medium mb-2">Expiry</label>
                                        <input
                                            type="text"
                                            placeholder="MM/YY"
                                            value={expiryDate}
                                              onChange={(e) => setExpiryDate(e.target.value)}
                                            maxLength={5}
                                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-pink-500 transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-600 font-medium mb-2">CVV</label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                placeholder="CVV"
                                                value={cvv}
                                                onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').slice(0, 3))}
                                                maxLength={3}
                                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-pink-500 transition-colors pr-10"
                                            />
                                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                                <span className="text-gray-400 text-sm">?</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Proceed Button */}
                                <button
                                    onClick={handleProceedToPay}
                                    disabled={isProcessing || !cardNumber || !expiryDate || !cvv}
                                    className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-300 shadow-lg ${
                                        isProcessing || !cardNumber || !expiryDate || !cvv
                                            ? 'bg-pink-300 cursor-not-allowed'
                                            : 'bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 hover:shadow-xl'
                                    }`}
                                >
                                    {isProcessing ? 'Processing...' : 'Proceed to Pay'}
                                </button>
                            </div>
                        </div>
                    ) : selectedPayment === 'netbanking' ? (
                           <NetBanking/>
                    )  :  selectedPayment === 'pay-on-delivery' ? (
                         <CashOnDelievery/>
                    ) :(
           
            <div className="flex flex-col items-center justify-center h-full">
              <div className="text-center mb-10">
                <div className="flex items-center justify-center mb-5">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mr-3 text-white font-bold">
                    ₹
                  </div>
                  <div className="text-xl font-semibold text-gray-900">
                    {selectedOption?.name === 'Pay On Delivery' ? 'Cash On Delivery' : selectedOption?.name}
                  </div>
                </div>
                <div className="text-sm text-gray-600 mb-8">
                  {selectedOption?.description}
                </div>
              </div>

              <button
                onClick={handleProceedToPay}
                disabled={isProcessing}
                className={`px-10 py-4 rounded-lg text-base font-semibold text-white transition-all duration-300 shadow-lg ${
                  isProcessing
                    ? 'bg-green-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 hover:shadow-xl hover:-translate-y-1 active:translate-y-0'
                }`}
              >
                {isProcessing ? 'Processing...' : 'Proceed to Pay'}
              </button>
            </div>
          )}
        </div>
      </div>

    
      <div className="bg-gray-50 border-t border-gray-200 px-8 py-5 text-center">
        <div className="text-xs text-gray-500 flex items-center justify-center">
          secured by 
          <span className="ml-2 font-bold text-blue-600 flex items-center">
            <div className="w-2 h-2 bg-blue-600 rounded-full mr-1"></div>
            JusPay     </span>
        </div>
      </div>
    </div>
  );
};


export default Payment;