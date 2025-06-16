'use client';
import Image from 'next/image';
import { FaLocationDot } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState } from 'react';
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";





export default function Home() {

  
  
  const images = [
    "/imgg1.jpg", "/imgg2.jpg", "/imgg3.jpg", "/imgg4.jpg", "/imgg5.jpg",
    "/imgg6.jpg", "/imgg7.jpg", "/imgg8.jpg", "/imgg9.jpg", "/imgg10.jpg",
    "/imgg11.jpg", "/imgg3.jpg"
    // Add more image paths here
  ];

  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const handlePrev = () => {
    if (currentIndex !== null) {
      setCurrentIndex((prev) =>
        prev === 0 ? images.length - 1 : (prev as number) - 1
      );
    }
  };

  const handleNext = () => {
    if (currentIndex !== null) {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : (prev as number) + 1
      );
    }
  };

  return (
    <>
       <div className="min-h-screen relative overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-screen object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/background video.mp4" type="video/mp4" />
      </video>

      {/* Navbar */}
      <header className="bg-[#ffff] fixed top-0 w-full z-50">
  <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
    
    {/* Logo */}
    <img src="/logo estate .png" alt="Logo" className="h-12 w-auto" />

    {/* Desktop Nav */}
    <nav
      className="hidden md:flex gap-6 text-[#74613c] font-semibold text-[17px]"
      style={{ fontFamily: `"Cormorant Garamond", serif` }}
    >
      <a href="#">Home</a>
      <a href="#highlights">Highlights</a>
      <a href="#overview">Overview</a>
      <a href="#location">Location</a>
      <a href="#Layouts">Layouts</a>
      <a href="#Gallery">Gallery</a>
      <a href="#Walkthrough">Walkthrough</a>
      <a href="#Status">Status</a>
      <a href="#Contact">Contact</a>
    </nav>

    {/* Desktop Phone Number */}
    <div className="hidden md:flex items-center gap-2 text-[#74613c] text-lg font-bold">
      <span>📞</span>
      <span>+91 9990467969</span>
    </div>

    {/* Mobile Phone Number Only */}
    <div className="flex md:hidden items-center gap-2 text-[#74613c] text-sm font-semibold">
      <span>📞</span>
      <a href="tel:+919990467969" className="hover:underline">+91 9990467969</a>
    </div>
  </div>
</header>


      

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center h-screen text-white text-center z-20 pt-24 md:pt-32">
        <h1
          className="text-4xl md:text-6xl font-bold"
          style={{ fontFamily: `"Cormorant Garamond", serif` }}
        >
          Estate Avenues
        </h1>
        <h2
          className="text-2xl md:text-3xl mt-3 tracking-wide"
          style={{ fontFamily: `"Cormorant Garamond", serif` }}
        >
          Valley Chalets
        </h2>

        {/* Bottom Video Navigation */}
        <div className="absolute bottom-6 w-full z-30 px-4 ">
  
  <div className="hidden md:flex justify-center ">
    <div className="relative w-full max-w-6xl flex justify-between items-center ">
      {[
        { href: "#welcome", label: "WELCOME" },
        { href: "#ayurveda", label: "AYURVEDA" },
        { href: "#yoga", label: "YOGA" },
        { href: "#mindfulness", label: "MINDFULNESS" },
        { href: "#cuisine", label: "HEALTHY CUISINE" },
      ].map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-white text-[15px] font-semibold"
          style={{ fontFamily: `"Cormorant Garamond", serif` }}
        >
          {/* <div className="w-2 h-2 bg-white rounded-full mb-2 border border-white" /> */}
          <a href={item.href} className="hover:underline">{item.label}</a>
        </div>
      ))}
    </div>
  </div>
  </div>
      </section>




        {/*Highlight section*/}

         <section
  id="highlights"
  className="relative z-10 bg-white py-12 px-4 sm:px-6 md:px-10 lg:px-24"
>
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-center md:items-start px-4 sm:px-6">
  
  {/* Left Image (Logo) */}
  <div className="w-full md:w-1/2 flex justify-center md:justify-start">
    <img
      src="/ananda logo.png"
      alt="Bhowali Chalets"
      className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[250px] ml-[70px] lg:max-w-[400px] h-auto object-contain"
    />
  </div>

 





    {/* Right Highlights Content */}
    <div className="w-full md:w-1/2">
      <h2
        className="text-3xl sm:text-4xl font-semibold text-[#74613c] mb-4 text-center md:text-left mt-7` "
        style={{ fontFamily: `"Cormorant Garamond", serif` }}
      >
        Key Highlights
      </h2>

      <p
        className="text-sm sm:text-base tracking-wide text-[#74613c] mb-8 text-center md:text-left"
        style={{ fontFamily: `"Cormorant Garamond", serif` }}
      >
        What sets Bhowali Valley Chalets apart
      </p>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm sm:text-base text-[#74613c]">
        
        {/* Community Column */}
        <div>
          <h3
            className="font-semibold text-lg sm:text-xl mb-3"
            style={{ fontFamily: `"Cormorant Garamond", serif` }}
          >
            Community
          </h3>
          <ul
            className="list-disc list-inside space-y-2"
            style={{ fontFamily: `"Montserrat", sans-serif` }}
          >
            <li>50% Open Areas</li>
            <li>Gated Secured Community</li>
            <li>Power Backup</li>
            <li>World-class Landscaping</li>
            <li>Water Bodies and Ponds</li>
            <li>Lavish Club House</li>
            <li>Swimming Pool</li>
            <li>Dedicated Car Parking</li>
            <li>Surrounded by forested lands</li>
          </ul>
        </div>

        {/* Chalet Column */}
        <div>
          <h3
            className="font-semibold text-lg sm:text-xl mb-3"
            style={{ fontFamily: `"Cormorant Garamond", serif` }}
          >
            Your Chalet
          </h3>
          <ul
            className="list-disc list-inside space-y-2"
            style={{ fontFamily: `"Montserrat", sans-serif` }}
          >
            <li>3 & 4 side open Chalets</li>
            <li>Private Garden with each Chalet</li>
            <li>Ample Open Spaces</li>
            <li>Fireplace with Large Sit-out</li>
            <li>Jacuzzi (with 4 BDR Config)</li>
            <li>Barbeque Area</li>
            <li>Panoramic valley and mountain views</li>
            <li>Large Floor to Ceiling Glass</li>
            <li>Lavish Greenery</li>
          </ul>
        </div>
      </div>

      <p
        className="mt-8 text-sm sm:text-base text-[#74613c] text-center md:text-left"
        style={{ fontFamily: `"Cormorant Garamond", serif` }}
      >
        Free Hold Land that will be registered on the Buyer&apos;s name
      </p>
    </div>
  </div>
</section>

        
        {/* Overview Section */}
<section
  id="overview"
  className="bg-[#EDEDED] relative z-10 scroll-mt-24" // Adjusted for fixed header
>
  <div className="relative w-full h-[400px] md:h-[450px] overflow-hidden">
    {/* Background image from bottom */}
    <div
      className="absolute inset-0 w-full bg-cover bg-no-repeat text-white flex flex-col justify-start z-10"
      style={{
        backgroundImage: "url('/1 pi.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
      }}
    >
      {/* Left Glass Text Overlay */}
      <div className="absolute top-0 left-0 bottom-0 w-[50%] md:w-[30%] bg-black/30 backdrop-blur-md text-white p-6 flex flex-col justify-start z-10 pt-6">
        <h1
          className="text- md:text-3xl font-bold text-[#ffffff] pb-6"
          style={{ fontFamily: `"Cormorant Garamond", serif` }}
        >
          Breathe Unwind Immerse. Your Himalayan haven awaits.
        </h1>
        <ul className="list-disc list-inside space-y-3 text-white text-sm md:text-base">
          <li>Luxury Chalets in the hills of Kumaon</li>
          <li>Gated Community with modern-day amenities</li>
          <li>6 hours away from hustle and bustle of NCR</li>
          <li>Close to major attractions and lakes</li>
        </ul>
      </div>
    </div>
  </div>
</section>




        
      {/* LOCATION SECTION */}
      <section
        id="location"
        className="bg-white py-16 px-4 md:px-8 lg:px-16 z-30 relative"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#74613c] mb-4"
            style={{ fontFamily: `"Cormorant Garamond", serif` }}
          >
            Location
          </h2>

          <div className="flex items-center justify-center text-[#74613c] text-base md:text-lg mb-6">
            <a
              href="https://maps.app.goo.gl/uQJ3Df9wxnDsAK3F8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 font-medium hover:underline"
            >
              <FaLocationDot className="text-lg mr-1" />
              <span style={{ fontFamily: `"Cormorant Garamond", serif` }}>
                Bhowali, Nainital
              </span>
            </a>
          </div>

          <ul className="text-[#74613c] space-y-2 text-sm md:text-base text-center">
            <li>
              • 6.5 Hr Drive from NCR & 45 Minutes from Kathgodam (Nearest Rail
              Head)
            </li>
          </ul>
        </div>
      </section>



  
  
  
  
  
  
  
  
  
  
      
      {/* OVERVIEW SECTION */}
      <section id="overview" className="bg-white relative">
        <div className="relative w-full">
          {/* Image */}
          <Image
            src="/roll-royce-bw.JPG"
            alt="Rolls Royce Car"
            layout="responsive"
            width={1600}
            height={900}
            className="object-cover"
          />

          {/* Overlay */}
          <div className="bg-black/60 backdrop-blur-sm text-white p-6 md:absolute md:top-0 md:right-0 md:bottom-0 md:w-[35%] w-full">
            <h1
              className="text-xl md:text-2xl font-bold text-[#ffffff] mb-4"
              style={{ fontFamily: `"Cormorant Garamond", serif` }}
            >
              Key Distances From Bhowali Valley Chalets:
            </h1>
            <ul className="list-disc list-inside space-y-1 text-sm md:text-base">
              <li>Delhi - 289 Km</li>
              <li>Mukteshwar - 36 Km</li>
              <li>Sattal - 10.6 Km</li>
              <li>Bhimtal - 8 Km</li>
              <li>Ramgarh - 12 Km</li>
              <li>Jim Corbett National Park - 75 Km</li>
              <li>Kathgodam Station - 28 Km or 45 mins</li>
              <li>Naukuchiatal - 14 Km</li>
            </ul>
          </div>
        </div>
      </section>
    




        <section id="Layouts" className="bg-[#ffffff] py-12 px-4 scroll-mt-16">
      <div className="max-w-7xl mx-auto" style={{ fontFamily: `"Cormorant Garamond", serif` }}>
        {/* Section Heading */}
        <h2 className="text-4xl font-semibold text-center mb-6 text-[#74613c]">
          Site Layout & Floor Plans
        </h2>
        <p className=" text-sm tracking-widest text-[#74613c] mb-10 text-center font-medium" style={{ fontFamily: `"cormorant garamond",serif` }}>
               Detailed layouts To Help You Visualize Spaces </p>

        {/* Decorative Divider */}
        {/* <div className="mb-10 text-center">
          <div className="inline-block border-gray-400 py-1 px-4 text-black">
            ⌘-------------------------------------------------------⌘
          </div>
        </div> */}

        {/* Layout + Carousel Side by Side */}
        <div className="flex flex-col lg:flex-row items-start gap-8 justify-between">
          {/* Site Layout Image */}
          <div className="w-full lg:w-[46%] flex justify-start">
            <div className="w-full max-w-[400px] border border-gray-300 rounded shadow-md overflow-hidden">
              <img
                src="/layout1.avif"
                alt="Site Plan"
                className="w-full object-contain transition-transform hover:scale-105 duration-300"
              />
            </div>
          </div>

          {/* Swiper Carousel */}
          <div className="w-full lg:w-[58%]">
            <Swiper
              spaceBetween={20}
              pagination={{ clickable: true }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {[1, 2, 3, 4].map((type) => (
                <SwiperSlide key={type}>
                  <div className="p-5 bg-white rounded-lg shadow-lg h-[310px] flex gap-4 items-start">
                    <img
                      src={`/layout${type + 1}.avif`}
                      alt={`Layout ${type}`}
                      className="w-62 h-auto rounded object-contain"
                    />
                    <div className="flex flex-col justify-between">
                      <div>
                        <h3 className="text-sm font-bold text-gray-500">TYPE {type}</h3>
                        <p className="text-lg font-semibold text-gray-800 mb-9">
                          {type === 4
                            ? '4 BDR + Lounge + Garden View'
                            : `${type + 1} BDR + LOUNGE + TERRACE`}
                        </p>
                        <p
                          className={`font-semibold ${
                            type === 4 ? 'text-green-600' : 'text-red-600'
                          }`}
                        >
                          {type === 4 ? 'Available' : '(SOLD OUT)'}
                        </p>
                      </div>
                      <div className="mt-4 text-sm text-gray-700">
                        <p>
                          Size:{' '}
                          {type === 1
                            ? '200'
                            : type === 2
                            ? '240'
                            : type === 3
                            ? '280'
                            : '320'}{' '}
                          SQ YARDS
                        </p>
                        <p>
                          Built-up Area:{' '}
                          {type === 1
                            ? '1,500'
                            : type === 2
                            ? '2,200'
                            : type === 3
                            ? '2,600'
                            : '2,900'}{' '}
                          SQ FEET
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>

       


       <section id="Gallery" className="bg-[#ffffff] py-12 px-4 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-5xl font-semibold text-center text-[#74613c] mb-6"
          style={{
            fontFamily: `"Cormorant Garamond", serif`,
            fontSize: '36px',
          }}
        >
          Image Gallery
        </h2>

        <p
          className="text-sm tracking-widest text-[#74613c] mb-10 text-center font-medium"
          style={{ fontFamily: `"Cormorant Garamond", serif` }}
        >
          Do Browse Stunning Photos Showcasing Beauty
        </p>

        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Image ${index + 1}`}
              className="w-full mb-4 rounded-md shadow-lg cursor-pointer break-inside-avoid hover:scale-105 transition-transform duration-200"
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>

      {currentIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative">
            <img
              src={images[currentIndex]}
              alt={`Image ${currentIndex + 1}`}
              className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-xl"
            />

            {/* Close button */}
            <button
              onClick={() => setCurrentIndex(null)}
              className="absolute top-2 right-2 bg-white text-black px-3 py-1 rounded-full font-bold hover:bg-gray-200"
            >
              ✕
            </button>

            {/* Previous */}
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white text-black px-3 py-1 rounded-full font-bold hover:bg-gray-200"
            >
              ‹
            </button>

            {/* Next */}
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white text-black px-3 py-1 rounded-full font-bold hover:bg-gray-200"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </section>




        <section id="Walkthrough" className="bg-gray-100 py-12 px-4 scroll-mt-16">
          <div className="max-w-4xl mx-auto text-center">
            {/* Heading */}
            <h2 className="text-5xl font-semibold text-[#74613c] mb-4"style={{ fontFamily: `"Cormorant Garamond", serif`, fontSize:"36px" }}>
              Video Walkthrough
            </h2>

            <p className=" text-sm tracking-widest text-[#74613c] mb-10 text-center font-medium" style={{ fontFamily: `"cormorant garamond",serif` }}>
               Experience a Glimpse Of Our Properties Before Doing a Visit </p>

            {/* Decorative Divider */}
            {/* <div className="mb-10">
            <div className="inline-block  border-gray-400 py-1 px-4 text-black">
  ✦⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯✦
</div>
            </div> */}

            {/* Embedded Video */}
            <div className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-lg shadow-lg">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="/background video.mp4"
                title="Video Walkthrough"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        <div className="flex flex-col items-center w-full bg-[#fcf4d7]">
          {/* Current Status Section */}
<section id="Status" className="w-full bg-[#ffffff] px-4 py-16 scroll-mt-12">
  <h2
    className="text-5xl font-semibold mb-5 text-[#74613c] text-center"
    style={{ fontFamily: `"Cormorant Garamond", serif`, fontSize:"36px" }}
  >
    Current Status
  </h2>

  <p className=" text-sm tracking-widest text-[#74613c] mb-10 text-center font-medium" style={{ fontFamily: `"cormorant garamond",serif` }}>
               Stay Updated On The Latest Availability & Development </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {/* Card 1 */}
    <div className="bg-white shadow-md rounded overflow-hidden transform transition-transform duration-300 hover:scale-105">
      <img className="w-full h-64 object-cover" src="/imgg15.png" alt="Journey" />
      <div className="p-6 bg-white text-center">
        <p className="text-[#74613c] text-lg font-semibold">
          Arrive With Convenience
        </p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="bg-white shadow-md rounded overflow-hidden transform transition-transform duration-300 hover:scale-105">
      <img className="w-full h-64 object-cover" src="/imgg19.png" alt="Nanital" />
      <div className="p-6 bg-white text-center">
        <p className="text-[#74613c] text-lg font-semibold">
          Pristine Nainital View
        </p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="bg-white shadow-md rounded overflow-hidden transform transition-transform duration-300 hover:scale-105">
      <img className="w-full h-64 object-cover" src="/imgg16.png" alt="Luxury" />
      <div className="p-6 bg-white text-center">
        <p className="text-[#74613c] text-lg font-semibold">
          Blossom at the Lap of Luxury
        </p>
      </div>
    </div>

    {/* Card 4 */}
    <div className="bg-white shadow-md rounded overflow-hidden transform transition-transform duration-300 hover:scale-105">
      <img className="w-full h-64 object-cover" src="/imgg17.png" alt="Yoga" />
      <div className="p-6 bg-white text-center">
        <p className="text-[#74613c] text-lg font-semibold">
          Yoga and Natural Healing
        </p>
      </div>
    </div>
  </div>
</section>


          {/* About Us Section */}
          <section className="w-full bg-gray-100 py-12">
            <div className="max-w-3xl mx-auto px-4 text-center">
              <h2 className="text-5xl font-semibold mb-4 text-[#74613c]" style={{ fontFamily: `"cormorant garamond",serif`, fontSize:"36px" }}>
                About Us
              </h2>
              <p className=" text-sm tracking-widest text-[#74613c] mb-10 font-medium" style={{ fontFamily: `"cormorant garamond",serif` }}>
               Know Who We Are Why People Trust Us For Property Solutions </p>

              <p className="text-l text-[#74613c] pt-3 " style={{ fontFamily: `"Montserrat",sans-serif` }}>
                ADV Experiential is like a niche new area development company, with its head office
                in Gurgaon. The organization’s primary goal is to create a differentiated experience
                for discerning 2nd home buyers in India, based on market research, understanding of the
                2nd home market, collective experience, and teamwork.
              </p>

            </div>
          </section>
        </div>
        <section className="relative bg-gray-900 text-white py-20 overflow-hidden">
          {/* Background Image */}
          {/* <section className="relative bg-gray-900 text-white py-20 overflow-hidden"> */}
  {/* Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover grayscale opacity-70 z-0"
  >
    <source src="/video.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Overlay content */}
  <div
    className="relative z-10 max-w-7xl mx-auto px-4 text-center"
    style={{ fontFamily: `"Cormorant Garamond", serif` }}
  >
    <h2 className="text-3xl md:text-4xl font-bold mb-16 text-[#ffffff]">What our Clients Think</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-white text-left">
      {/* Testimonial 1 */}
      <div>
        <p
          className="text-base md:text-lg leading-relaxed mb-6 "
          style={{ fontFamily: `"Montserrat",sans-serif` }}
        >
          "My wife and I wanted a cottage in the Nainital area away from the buzz
          for our journey towards post retirement.We loved
          Bhowali Valley Chalets because it is specifically designed for people like
          us. We can’t wait to go and spend our relaxed & peaceful life in a
          pollution-free setting. We would highly recommend this project."
        </p>
        <p className="font-bold text-blue-400"></p>
        <p className="text-sm text-blue-200"></p>
      </div>

      {/* Testimonial 2 */}
      <div>
        <p
          className="text-base md:text-lg leading-relaxed mb-6 "
          style={{ fontFamily: `"Montserrat",sans-serif` }}
        >
          "What attracted me first to this project was the stunning design. The
          concept has been well thought-out and addresses all the concerns that had
          stopped me from buying a hill home before this. Dealings with the company
          have been a pleasure as well – very professional and helpful."
        </p>
        <p className="font-bold text-blue-400"></p>
        <p className="text-sm text-blue-200"></p>
      </div>
    </div>
  </div>
</section>


      </div>
    </>
  );
}
