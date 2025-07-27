
import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import { FaMapMarkerAlt } from "react-icons/fa"; 
import { FiEdit2 } from "react-icons/fi"; 
import { RiDeleteBinLine } from "react-icons/ri";

const Address = () => {
  const selector = useSelector((state: RootState) => state.location.LocationValue);
  console.log(selector)

  return (
    <div className="p-4 relative">
      <h2 className="text-xl font-semibold mb-4">All Saved Addresses</h2>
      <button className="absolute bottom-24 right-28 bg-rose-500 text-white px-4 py-2 rounded-md float-right mb-4">Add New Address</button>

      <div className="border-t pt-4">
        <div className="flex items-start gap-2">
          <FaMapMarkerAlt className="text-purple-600 mt-1" />
          <div>
            <p className="font-semibold text-lg">Home</p>
            <p className="text-sm text-gray-600 max-w-md">{selector}</p>
          </div>
          <div className="ml-auto flex gap-4">
            <FiEdit2 className="text-gray-500 cursor-pointer" />
            <RiDeleteBinLine className="text-gray-500 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
