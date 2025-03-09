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
    <div className="w-full">
      <section className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh]">
        <div className="absolute inset-0">
          <img
            src={banners[currentImage]}
            alt="Event Banner"
            className="w-full h-full object-cover opacity-40 transition-opacity duration-1000"
          />
        </div>
      </section>
      
      <section className="bg-gray-900 text-white py-6 px-4 text-center sm:py-8 md:py-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">🎉 Iftar & Nostalgia Reunion</h1>
        <p className="mt-2 text-base sm:text-lg md:text-xl">Relive memories, reconnect, and enjoy a special evening!</p>
      </section>
    </div>
  )
}

export default Header
