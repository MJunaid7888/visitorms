import React from 'react';
import loginImage from '../assets/login-device.jpg'; // make sure this file exists

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-100 to-indigo-100">
      {/* Header Section */}
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

      {/* Login Section */}
      <div className="flex justify-center items-center px-4 py-10">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col lg:flex-row w-full max-w-5xl">
          {/* Form Column */}
          <div className="w-full lg:w-1/2 p-8 sm:p-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Login</h2>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full border border-gray-300 rounded-md px-4 py-3"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password<span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  required
                  placeholder="********"
                  className="w-full border border-gray-300 rounded-md px-4 py-3"
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  <span className="text-gray-600">Remember Me</span>
                </label>
                <a href="#" className="text-blue-700 hover:underline">
                  Reset Password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-900 text-white py-3 rounded-full font-semibold text-lg"
              >
                Login
              </button>
            </form>

            {/* Demo Login Buttons */}
            <div className="mt-8 text-sm">
              <p className="mb-3 font-medium text-gray-700">For Demo Login, Click Below</p>
              <div className="flex gap-4">
                <button className="bg-blue-500 text-white px-5 py-2 rounded-full">Admin</button>
                <button className="bg-orange-400 text-white px-5 py-2 rounded-full">Employee</button>
                <button className="bg-purple-400 text-white px-5 py-2 rounded-full">Reception</button>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="w-full lg:w-1/2">
            <img
              src={loginImage}
              alt="Login Device"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
