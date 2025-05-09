import React from 'react';
import buildingImage from '../assets/building.jpg';
import visitorImage from '../assets/visitor.jpg';

const VisitorCheckPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-100 to-indigo-100">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 bg-white shadow-sm">
        <div className="text-2xl font-bold text-blue-700">
          <span className="font-light">Quick</span>Pass
        </div>
        <nav className="flex gap-6 items-center text-sm font-medium">
          <a href="#">Have Appointment</a>
          <a href="#">Been here Before</a>
          <div className="flex items-center gap-1">
            <span className="text-xs font-bold">GB</span>
            <select className="text-sm bg-transparent outline-none">
              <option>English</option>
            </select>
          </div>
          <button className="bg-blue-900 text-white px-4 py-2 rounded-full">Login</button>
        </nav>
      </header>

      {/* Content */}
      <main className="px-6 py-12 flex flex-col lg:flex-row justify-between items-start gap-10">
        <div className="max-w-xl w-full">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Pre Registered Visitor Details</h2>
          <label className="block mb-2 text-gray-700 font-medium">
            Visitor's Email or Phone or NID<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter details"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-6 text-lg"
          />
          <div className="flex gap-4">
            <button className="bg-red-500 text-white px-6 py-3 rounded-full font-semibold">Cancel</button>
            <button className="bg-blue-900 text-white px-6 py-3 rounded-full font-semibold">Continue</button>
          </div>
        </div>

        <div className="flex gap-6 mt-10 lg:mt-0">
          <img src={buildingImage} alt="Building" className="rounded-xl w-60 shadow-md" />
          <img src={visitorImage} alt="Visitor Interaction" className="rounded-xl w-60 shadow-md" />
        </div>
      </main>
    </div>
  );
};

export default VisitorCheckPage;
