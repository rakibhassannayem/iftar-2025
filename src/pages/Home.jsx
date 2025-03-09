import React from 'react'
import Header from "../components/Header";
import EventCard from "../components/EventCard";
import JoiningSection from "../components/JoiningSection";
import EventDetails from './EventDetails';

const Home = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-4 sm:p-6">
      <Header />
      <main className="flex flex-col gap-4">
        <div className="flex justify-center items-center py-4 px-4 sm:py-6">
          <EventCard />
        </div>
        <JoiningSection />
      </main>
      <EventDetails/>
    </div>
  )
}

export default Home
