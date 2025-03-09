import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const EventDetails = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <main className="p-10 text-center">
        <h1 className="text-4xl font-bold">Event Details</h1>
        <div className="grid grid-cols-1 gap-8 max-w-2xl mx-auto mt-10">
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
            <p className="text-lg">50 People</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EventDetails;
