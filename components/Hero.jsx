// Hero.jsx

import Link from 'next/link';
import React from 'react';

function Hero() {
  return (
    <div className='relative z-10'>
      <div className="hero min-h-screen" style={{ backgroundImage: 'url(/programming.jpg)' }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Selamat Datang </h1>
            <p className="mb-5 text-base font-semibold">Tempat saya untuk corat-coret serta belajar tentang pemrograman dan mungkin ada yg lain hehehe <br/> Blog ini saya buat menggunakan Next.js + Contentful  </p>
            <Link href='/blogs'><button className="btn btn-primary">Jelajahi</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
