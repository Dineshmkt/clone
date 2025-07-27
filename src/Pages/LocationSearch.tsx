
import React, { useState } from "react";
import { IoClose, IoSearch, IoLocateSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import {UpdateLocation}  from '../features/LocationSlice'
type Props = {
  setShowLocation: React.Dispatch<React.SetStateAction<boolean>>;
  setUpdateLocation: React.Dispatch<React.SetStateAction<string>>;
};

const LocationSearch = ({ setShowLocation, setUpdateLocation }: Props) => {
  const dispatch= useDispatch()
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<string[]>([]);

  const handleSearch = async () => {
    if (!query.trim()) return;

    const response = await fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(query)}&key=2d5ccb235d3640fd9a262263bb092a14`
    );
    const data = await response.json();
    const locations = data.results.map((item: any) => item.formatted);
    setResults(locations);
    dispatch(UpdateLocation(locations))
  };

  const handleCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      const response = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=2d5ccb235d3640fd9a262263bb092a14`
      );
      const data = await response.json();
      const location = data.results[0]?.formatted || "Unknown location";
      setUpdateLocation(location);
      dispatch(UpdateLocation(location))
      setShowLocation(false);
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="relative bg-white w-full max-w-lg rounded-xl shadow-xl p-6">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-xl"
          onClick={() => setShowLocation(false)}
        >
          <IoClose />
        </button>

      
        <h2 className="text-center text-lg font-semibold mb-6">Your Location</h2>

      
        <div className="relative">
          <IoSearch className="absolute left-3 top-3 text-gray-400 text-lg" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search a new address"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <button
          onClick={handleSearch}
          className="w-full mt-3 bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
        >
          Search
        </button>

     
        <div className="mt-6 flex items-start justify-between border border-pink-200 rounded-md p-4">
          <div className="flex items-start gap-3">
            <IoLocateSharp className="text-pink-600 text-xl mt-1" />
            <div>
              <p className="text-sm font-semibold text-pink-600">Current Location</p>
              <p className="text-xs text-gray-500">Enable your current location for better services</p>
            </div>
          </div>
          <button
            onClick={handleCurrentLocation}
            className="text-pink-600 text-xs border border-pink-500 px-3 py-1 rounded-md hover:bg-pink-50"
          >
            Enable
          </button>
        </div>

        {/* Search Results */}
        <ul className="mt-6 max-h-48 overflow-y-auto space-y-2">
          {results.map((res, idx) => (
            <li
              key={idx}
              onClick={() => {
                setUpdateLocation(res);
                setShowLocation(false);
              }}
              className="p-2 rounded-md border hover:bg-gray-100 cursor-pointer"
            >
               {res}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LocationSearch;
