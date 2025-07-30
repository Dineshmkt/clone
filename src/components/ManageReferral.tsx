import { FaWhatsapp } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";

const ManageReferral = () => {
    
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      
      <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-t-lg p-4 text-center font-bold text-lg">
        25% off for you, Pass for them @ ₹1!
      </div>

      
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">How it works</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>📤 Share the referral link <strong>with your friend</strong></li>
          <li>
             After your friend places their first order,{" "}
            <strong>you get 25% off</strong> up to ₹200 on your next order
          </li>
          <li> Upon 10 successful referrals, <strong>you earn ₹200</strong></li>
        </ul>

        
        <div className="mt-4 space-y-3">
          <button className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded">
            <FaWhatsapp size={18} />
            Invite via WhatsApp
          </button>

          <button className="w-full flex items-center justify-center gap-2 border border-gray-400 text-gray-800 font-semibold py-2 rounded hover:bg-gray-100">
            <FiShare2 size={18} />
            Share Invite Link
          </button>
        </div>
      </div>

    
      <div className="border-t p-4 text-center text-sm text-gray-600">
        <h4 className="font-semibold mb-1">Your Referrals</h4>
        <p>No referrals yet. Share with friends to start saving!</p>
      </div>
    </div>
  );
};

export default ManageReferral;
