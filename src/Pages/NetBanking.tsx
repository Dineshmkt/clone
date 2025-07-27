import { useState } from "react";
import { suggestedBanks, allBanks } from "../data/bankList";
import { useNavigate } from "react-router-dom";

const NetBanking = () => {
  const [search, setSearch] = useState("");
  const [selectedBank, setSelectedBank] = useState("");
  const navigate=useNavigate()

  const filteredBanks = allBanks.filter((bank) =>
    bank.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleClick=()=>{
     setTimeout(() => {
      alert('Payment initiated successfully!');
    }, 2000);
    navigate("/submitted") 
  }

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-lg font-semibold mb-4">Net Banking</h2>

      
      <div className="flex gap-4 mb-6">
        {suggestedBanks.map((bank) => (
          <div key={bank.id} className="flex flex-col items-center">
            <img
              src={bank.logo}
              alt={bank.name}
              className="w-10 h-10 object-contain rounded-full border p-1"
            />
            <span className="text-sm mt-1">{bank.name}</span>
          </div>
        ))}
      </div>

    
      <input
        type="text"
        placeholder="Search Banks"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 mb-4 border rounded-md"
      />

     
      <div className="flex flex-col gap-3">
        {filteredBanks.map((bank) => (
          <label
            key={bank.id}
            className="flex items-center justify-between border p-3 rounded-md cursor-pointer hover:shadow-sm"
          >
            <div className="flex items-center gap-4">
              <img src={bank.logo} alt={bank.name} className="w-10 h-10" />
              <span>{bank.name}</span>
            </div>
            <input
              type="radio"
              name="bank"
              checked={selectedBank === bank.id}
              onChange={() => setSelectedBank(bank.id)}
              className="accent-rose-500"
            />

          </label>
          
        ))}
      </div>

       {selectedBank &&
        <div className="mt-8">
          <button className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-6 rounded-md font-semibold" onClick={handleClick}>
            Proceed to Pay
          </button>
        </div>}
    </div>
  );
};

export default NetBanking;
