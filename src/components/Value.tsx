import { useState } from "react"
import { signOut } from "firebase/auth"
import { auth } from "../firebase/firebase"
import { useNavigate } from "react-router-dom"
import CustomerSupport from "./CustomerSupport"
import Address from "./Address"
import ManageReferral from "./ManageReferral"
import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../store/store"
import { updateLogin } from "../features/updateLoginSlice"

const Value = () => {
  const dispatch = useDispatch()
  const selector=useSelector((state: RootState) => state.contact.numberText)
  const [active, setActive] = useState("profile")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [value,setValue]=useState<{name:string,email:string}>({
    name:"",
    email:""
  })
  const navigate = useNavigate()
  console.log(selector)
  const handleDelete = async () => {
    try {
      await signOut(auth)
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = () => {
    console.log("register succesfull")
    if (!name.trim() || !email.trim()) return console.log("name and email are required")
     setValue({name,email})
    //  setValue((prev)=>({...prev,name:"",email:""})) 
    dispatch(updateLogin(value))
  }

 

  return (
    <div className="min-h-screen flex font-sans m-6">
      
      <div className="w-[300px] border-r bg-[#f9f9fb] p-4 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-purple-300 flex items-center justify-center text-white text-xl font-bold">
              {name ? name.charAt(0).toUpperCase() : "D"}
            </div>
            <div>
              <h2 className="text-lg font-semibold">{value.name || "dinesh"}</h2>
              <p className="text-sm text-gray-500">{selector || "9952583714"}</p>
            </div>
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-center bg-white border rounded-lg p-3 mb-2">
              <div>
                <p className="text-sm font-medium text-gray-600">Zepto Cash & Gift Card</p>
                <p className="text-xs text-gray-500">Available Balance: ₹0</p>
              </div>
              <button className="bg-black text-white text-xs px-3 py-1 rounded">Add Balance</button>
            </div>

            <div className="bg-purple-100 text-purple-800 flex justify-between items-center rounded-lg p-3 text-sm font-medium">
               Free Cash
              <span>₹125</span>
            </div>
          </div>

          <ul className="space-y-2">
            <li onClick={() => setActive("order")} className={`p-2 rounded hover:bg-purple-100 cursor-pointer ${active === 'order' ? 'bg-purple-200' : ''}`}>
               Orders
            </li>
            <li onClick={() => setActive("customer support")} className={`p-2 rounded hover:bg-purple-100 cursor-pointer ${active === 'customer support' ? 'bg-purple-200' : ''}`}>
               Customer Support
            </li>
            <li onClick={() => setActive("manage referrals")} className={`p-2 rounded hover:bg-purple-100 cursor-pointer ${active === 'manage referrals' ? 'bg-purple-200' : ''}`}>
               Manage Referrals
            </li>
            <li onClick={() => setActive("Adrress")} className={`p-2 rounded hover:bg-purple-100 cursor-pointer ${active === 'Adrress' ? 'bg-purple-200' : ''}`}>
               Address
            </li>
            <li onClick={() => setActive("profile")} className={`p-2 rounded hover:bg-purple-100 cursor-pointer ${active === 'profile' ? 'bg-purple-200' : ''}`}>
               Profile
            </li>
          </ul>
        </div>

        <button
          onClick={handleDelete}
          className="mt-6 text-sm text-red-500 hover:underline"
        >
          Logout
        </button>
      </div>

      
      <div className="flex-1 bg-white p-8">
        {active === "order" && (
          <div className="text-center text-gray-600">
            <div className="flex flex-col items-center justify-center">
              <img src="" alt="No Orders" className="w-20 h-20 mb-4" />
              <h2 className="text-lg font-semibold mb-2">No orders yet</h2>
              <button className="border border-purple-500 text-purple-600 px-4 py-2 rounded-full hover:bg-purple-50">
                Browse products
              </button>
              <button className="mt-3 border border-pink-500 text-pink-600 px-4 py-2 rounded-full">
                Loading...
              </button>
            </div>
          </div>
        )}

        {active === "customer support" && (
          <div>
            <CustomerSupport />
          </div>
        )}

        {active === "manage referrals" && (
          <div>
           <ManageReferral/>
          </div>
        )}

        {active === "Adrress" && (
          <div>
            <Address />
          </div>
        )}

        {active === "profile" && (
          <div className="max-w-md mx-auto">
            <h1 className="text-xl font-semibold mb-4">Profile</h1>
            <label className="block mb-2 text-sm font-medium text-gray-700">Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 mb-4 border rounded" />

            <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 mb-4 border rounded" />

            <button onClick={handleSubmit} className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">Submit</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Value





