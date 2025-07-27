
import { FaUserCircle, FaShoppingCart, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Login from "../components/Login";
import CategoryPage from "./CategoryPage"
import { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from '../store/store';
import Details from "./Details";
import LocationSearch from "./LocationSearch";
import FooterLinks from "./FooterLinks";
import { MapPin } from "lucide-react";
const Navbar = () => {
  const [showLogin,setShowLogin]=useState(false)
  const [showProfile,setShowProfile] = useState(false)
   const [showLocation,setShowLocation]=useState(false)
   const [updateLocation,setUpdateLocation]=useState("")
   const [loginModel,setLoginModel]=useState(false)
  const navigate = useNavigate();
 
  const handleClick = () => {
  if (loginModel) {
    navigate("/value"); 
  } else {
    setShowLogin(true); 
  }
};

  const handleSelector=()=>{
    console.log("Navigating...");
    setShowProfile(true)
  }
  const cartCount = useSelector((state: RootState) => state.product.product.length);

  const handleValue=()=>{
    navigate("/searchItems")
  }
  return (
    <>
    <div className="bg-gradient-to-r from-purple-100 to-white px-6 py-3 shadow-sm">
      <div className="flex items-center justify-between">
        
        <div className="flex items-center gap-6">       
          <h1 className="text-2xl font-bold text-purple-600">zepto</h1>  
          <div className="text-sm">
            <p className="font-semibold">
              Delivery In <span className="text-pink-600 font-bold">5 Mins</span>
            </p>
  
            <p className="text-xs text-gray-700 whitespace-nowrap cursor-pointer" onClick={()=>setShowLocation(true)}>
                { updateLocation ? updateLocation:
                  <div>
               <span className="flex items-center"> select Location <MapPin className="text-gray-600 w-2 h-2"/></span> 
                </div>
                }
            </p>
          </div>
        </div>

      
        <div className="flex-grow mx-10 max-w-2xl ">
          <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm">
            <FaSearch className="text-gray-500 text-sm mr-2" />
            <input
              type="text"
              placeholder='Search for "amul butter"'
              className="flex-grow text-sm outline-none placeholder-gray-400 cursor-pointer"
              onClick={handleValue}
            />
          </div>
        </div>

       
        <div className="flex items-center gap-8 cursor-pointer">
          <div className="flex items-center flex-col text-sm" onClick={handleClick}>
            <FaUserCircle className="text-xl" />
           {loginModel ?  <span>Profile</span> : <span>login</span>}
          </div>
          
      <div className="flex flex-col items-center text-sm cursor-pointer" onClick={handleSelector}>
  <div className="relative">
    <FaShoppingCart className="text-xl" />
    {cartCount > 0 && (
      <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs font-semibold rounded-full px-1.5">
        {cartCount}
      </span>
    )}
  </div>
  <span>Cart</span>
</div>


        </div>
      </div>
    </div>
     { !loginModel && showLogin && <Login  setShowLogin={setShowLogin} setLoginModel={setLoginModel} />}
     {showProfile&& <Details setShowProfile={setShowProfile}/> }
     {showLocation &&<LocationSearch  setShowLocation={setShowLocation}  setUpdateLocation={setUpdateLocation}/> }

     <CategoryPage/>
     <FooterLinks/>
    </>
  );
};

export default Navbar;
