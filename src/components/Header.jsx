import React, { useState, useEffect } from 'react'

const Header = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const banners = ['/banner1.webp', '/banner2.webp', '/banner3.webp', '/banner4.webp', '/banner5.webp'];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % banners.length);
    }, 2000); // Change image every 3 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      <section className="relative w-full max-w-lg h-[25vh] sm:h-[30vh] md:h-[35vh] rounded-lg overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={banners[currentImage]}
            alt="Event Banner"
            className="w-full h-full object-cover transition-opacity duration-1000"
          />
        </div>
      </section>
      
      <section className="bg-gray-900 text-white py-3 px-4 text-center sm:py-4 md:py-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">🎉 Iftar & Nostalgia Reunion</h1>
        <p className="mt-2 text-sm sm:text-base md:text-lg">Relive memories, reconnect, and enjoy a special evening!</p>
      </section>
    </div>
  )
}

export default Header
