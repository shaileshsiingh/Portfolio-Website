import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>
        <Image
              src="/images/logo.png.png"
              alt="hero image"
              // className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={100}
              height={100}
              className='hover:bg-slate-800 text-white'

            />
        </span>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;