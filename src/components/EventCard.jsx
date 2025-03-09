import React from 'react'
import { useNavigate } from 'react-router-dom'

const EventCard = () => {
  const navigate = useNavigate()

  const handleRegistration = () => {
    navigate('/register')
  }

  return (
    <div className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg w-[90%] max-w-lg mx-auto text-white">
      <h2 className="text-xl sm:text-2xl font-bold">📅 Iftar & Nostalgia – Batch 2017 & 2019 Reunion</h2>
      <p className="mt-2 text-sm sm:text-base">Join us for an evening of good food, great company, and nostalgia.</p>
      <button 
        onClick={handleRegistration}
        className="mt-4 w-full sm:w-auto bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg"
      >
        Accept Invite →
      </button>
    </div>
  )
}

export default EventCard
