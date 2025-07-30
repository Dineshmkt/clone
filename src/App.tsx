
import Navbar from "./Pages/Navbar"
import FetchProductList from "./Pages/FetchProductList"
import { Routes, Route } from "react-router-dom";
import CategoryFilter from "./Pages/CategoryFilter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Payment from "./Pages/Payment";
import Value from "./components/Value"
import Submitted from "./Pages/Submitted";
import SearchItems from "./Pages/SearchItems";
const App = () => {
    
  return (
    <div>
        <ToastContainer position="top-right" autoClose={2000} />
        <Routes>
         <Route path="/" element={ <Navbar/>} />
        
        <Route path="/Section/:id" element={<FetchProductList />} />
        <Route path="/value/:title" element={<CategoryFilter/>}/>  
        <Route path="/payment" element={<Payment />} />
        <Route path="/value" element={<Value/>}/>
        <Route path="/submitted" element={<Submitted/>}/>
        <Route path="/searchItems" element={<SearchItems/>}/>
        <Route path="*" element={<div>404 Not Found</div>} />
        
      </Routes>
    </div>
  )
}

export default App
