'use client'

import React from 'react';
import Link from 'next/link';
import Script from 'next/script';


export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-[#262935]"> 
    <head>
        {/* Meta Pixel Script */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '569386696176592');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>    
      {/* Images */}                   
          <img src="/images/img1.png" className="w-full h-full object-cover" />

            {/* <div className="w-full h-25 flex items-center justify-center bg-[#262935]">
          <button
            className="bg-gradient-to-r h-17 from-indigo-400 via-fuchsia-300 to-[#EC8C78] text-gray-800 font-bold text-lg px-6 py-3 squared-lg shadow-md hover:brightness-110 transition"
            onClick={() => {
              window.location.href = 'https://pay.kiwify.com.br/oIxIhMX';
            }}
          >
            Quero meu E-book MÓDULO I
          </button>
          </div> */}
          <img src="/images/img2.png" className="w-full h-full object-cover" />
          <img src="/images/img3.png" className="w-full h-full object-cover" />
          <img src="/images/img4.png" className="w-full h-full object-cover" />
          <img src="/images/img5.png" className="w-full h-full object-cover" />
          <img src="/images/img6.png" className="w-full h-full object-cover" />
          <img src="/images/img7.png" className="w-full h-full object-cover" />
          <img src="/images/img8.png" className="w-full h-full object-cover" />
          <img src="/images/img9.png" className="w-full h-full object-cover" />
           <div className="w-full h-20 flex items-center justify-center bg-[#262935]">
          <button
            className="bg-gradient-to-r h-17 from-indigo-400 via-fuchsia-300 to-[#EC8C78] text-gray-800 font-bold text-lg px-6 py-3 squared-lg shadow-md hover:brightness-110 transition"
            onClick={() => {
              window.location.href = 'https://pay.kiwify.com.br/oIxIhMX';
            }}
          >
            Agende sua Consultoria
          </button>
          </div>
      </div>
  );
}
