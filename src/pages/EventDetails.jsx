import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const EventDetails = () => {
  return (
    <div className="bg-gray-900 text-white">
      <main className="p-6 text-center">
        {/* <h1 className="text-3xl font-bold">Event Details</h1> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto mt-6">
          <div className="flex items-center gap-4 bg-gray-800 p-6 rounded-lg">
            <img src="/calender.svg" alt="calender" className="w-8 h-8" />
            <p className="text-lg">March 27, 2025</p>
          </div>
          <div className="flex items-center gap-4 bg-gray-800 p-6 rounded-lg">
            <img src="/time.svg" alt="time" className="w-8 h-8" />
            <p className="text-lg">4:00 PM</p>
          </div>
          <div className="flex items-center gap-4 bg-gray-800 p-6 rounded-lg">
            <img src="/location.svg" alt="location" className="w-8 h-8" />
            <p className="text-lg">Mayor's Glory Hole</p>
          </div>
          <div className="flex items-center gap-4 bg-gray-800 p-6 rounded-lg">
            <img src="/people.svg" alt="friends" className="w-8 h-8" />
            <p className="text-lg">20 niggas registered</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EventDetails;
