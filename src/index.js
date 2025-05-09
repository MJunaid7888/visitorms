import React from 'react';
import { FaArrowUpRightFromSquare } from 'react-icons/fa';
import { LuScanLine } from 'react-icons/lu';
import buildingImage from './assets/building.jpg'; // add an image of a building
import scanImage from './assets/scan.jpg'; // add an image of someone scanning QR

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-100 to-indigo-100">
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

      <main className="px-6 py-12">
        <p className="text-sm text-gray-600 uppercase tracking-widest mb-2">
          QuickPass - Appointment booking & visitor gate pass system with QR code
        </p>

        <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
          Visitor Pass <br /> Management System.
        </h1>

        <p className="text-lg text-gray-700 mb-8">Welcome, please tap on button to check-in</p>

        <div className="flex gap-4 mb-12">
          <button className="flex items-center gap-2 bg-blue-900 text-white px-6 py-3 rounded-full text-lg">
            Check-in <FaArrowUpRightFromSquare />
          </button>
          <button className="flex items-center gap-2 border border-blue-900 text-blue-900 px-6 py-3 rounded-full text-lg">
            Scan QR <LuScanLine />
          </button>
        </div>

        <div className="relative flex gap-6">
          <img src={buildingImage} alt="Building" className="rounded-xl w-1/3 shadow-md" />
          <img src={scanImage} alt="QR Scan" className="rounded-xl w-1/3 shadow-md" />
        </div>
      </main>
    </div>
  );
}

export default App;

