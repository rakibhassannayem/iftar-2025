import React from 'react'

const JoiningSection = () => {
  const registeredPeople = [
    { name: 'Raiyan', avatar: 'raiyan.webp' },
    { name: 'Kollol', avatar: 'kollol.webp' },
    { name: 'Shoaib', avatar: 'shoaib.webp' },
    { name: 'Nayem', avatar: 'nayem.webp' },
    { name: 'Altap', avatar: 'altap.jpg' },
  ];

  return (
    <section className="bg-gray-800 py-4 px-3 mt-4 rounded-lg max-w-lg mx-auto w-[90%]">
      <h2 className="text-xl font-semibold text-white mb-3">Who's Joining? 👥</h2>
      <div className="flex flex-wrap gap-2 sm:gap-3 justify-center sm:justify-start">
        {registeredPeople.map((person, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-gray-600">
              <img
                src={person.avatar}
                alt={person.name}
                className="w-full h-full object-cover"
                onError={(e) => e.target.src = '/avatars/default.jpg'}
              />
            </div>
            <span className="text-xs sm:text-sm text-white mt-1">{person.name}</span>
          </div>
        ))}
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-700 text-white">
            <span className="text-xs sm:text-sm">+15</span>
          </div>
          <span className="text-xs sm:text-sm text-white mt-1">More</span>
        </div>
      </div>
    </section>
  )
}

export default JoiningSection
