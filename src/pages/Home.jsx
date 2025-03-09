import React from 'react'
import Header from "../components/Header";
import EventCard from "../components/EventCard";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <main className="flex justify-center items-center py-6 px-4 sm:py-8 md:py-16">
        <EventCard />
      </main>
    </div>
  )
}

export default Home
