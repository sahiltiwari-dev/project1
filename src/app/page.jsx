

"use client";
import React from "react";
import { useState, useEffect } from "react";



function MainComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [displayText1, setDisplayText1] = useState("");
  const [displayText2, setDisplayText2] = useState("");
  const [displayText3, setDisplayText3] = useState("");

  useEffect(() => {
    const text1 =
      "Custom websites and web applications built with the latest technologies.";
    const text2 =
      "Beautiful, intuitive interfaces that enhance user experience.";
    const text3 = "Strategic solutions to help your business grow online.";
    let index1 = 0,
      index2 = 0,
      index3 = 0;

    const type1 = setInterval(() => {
      if (index1 < text1.length) {
        setDisplayText1((prev) => prev + text1[index1]);
        index1++;
      } else clearInterval(type1);
    }, 50);

    setTimeout(() => {
      const type2 = setInterval(() => {
        if (index2 < text2.length) {
          setDisplayText2((prev) => prev + text2[index2]);
          index2++;
        } else clearInterval(type2);
      }, 50);
    }, 1000);

    setTimeout(() => {
      const type3 = setInterval(() => {
        if (index3 < text3.length) {
          setDisplayText3((prev) => prev + text3[index3]);
          index3++;
        } else clearInterval(type3);
      }, 50);
    }, 2000);

    return () => {
      clearInterval(type1);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed w-full bg-black/80 backdrop-blur-sm z-50 px-4 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-white text-xl md:text-2xl font-bold">
            DevFirm
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4 md:space-x-8">
            <a
              href="/explore"
              className="text-sm md:text-base text-white hover:text-blue-400"
            >
              Services
            </a>
            <a
              href="/work"
              className="text-sm md:text-base text-white hover:text-blue-400"
            >
              Our Work
            </a>
            <a
              href="/about"
              className="text-sm md:text-base text-white hover:text-blue-400"
            >
              About
            </a>
            <a
              href="/contact"
              className="text-sm md:text-base text-white hover:text-blue-400"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-sm">
            <div className="flex flex-col items-center space-y-4 py-4">
              <a href="/explore" className="text-white hover:text-blue-400">
                Services
              </a>
              <a href="/work" className="text-white hover:text-blue-400">
                Our Work
              </a>
              <a href="/about" className="text-white hover:text-blue-400">
                About
              </a>
              <a href="/contact" className="text-white hover:text-blue-400">
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen opacity-0 animate-slide-in">
        <iframe
          src="https://my.spline.design/prismcoin-mETGq5BBkMz8ginMl92gdnIS/?hide_watermark=true"
          frameBorder="0"
          width="100%"
          height="100%"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-extralight text-white/40 tracking-[0.2em] mb-4 md:mb-8 animate-fade-up">
              FUTURE
            </h1>
            <a
              href="/explore"
              className="bg-transparent text-white/30 border border-white/10 px-6 md:px-12 py-3 md:py-4 rounded-full text-base md:text-lg tracking-[0.3em] transition-all duration-300 hover:text-white/50 hover:border-white/20 animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              EXPLORE
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-16 md:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-white/40 text-center mb-12 md:mb-24 tracking-[0.2em] animate-glow">
            Our Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="space-y-4 md:space-y-8">
              <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-xl p-4 md:p-8 rounded-lg border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 hover:transform hover:scale-105">
                <h3 className="text-lg md:text-xl font-bold text-blue-400/70 mb-2 md:mb-4">
                  Web Development
                </h3>
                <p className="text-sm md:text-base text-gray-400 h-auto md:h-[60px]">
                  {displayText1}
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-xl p-4 md:p-8 rounded-lg border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 hover:transform hover:scale-105">
                <h3 className="text-lg md:text-xl font-bold text-purple-400/70 mb-2 md:mb-4">
                  UI/UX Design
                </h3>
                <p className="text-sm md:text-base text-gray-400 h-auto md:h-[60px]">
                  {displayText2}
                </p>
              </div>
              <div className="bg-gradient-to-br from-pink-900/20 to-blue-900/20 backdrop-blur-xl p-4 md:p-8 rounded-lg border border-pink-500/10 hover:border-pink-500/30 transition-all duration-300 hover:transform hover:scale-105">
                <h3 className="text-lg md:text-xl font-bold text-pink-400/70 mb-2 md:mb-4">
                  Digital Strategy
                </h3>
                <p className="text-sm md:text-base text-gray-400 h-auto md:h-[60px]">
                  {displayText3}
                </p>
              </div>
            </div>

            <div className="h-[300px] md:h-[600px] relative mt-8 md:mt-0">
              <iframe
                src="https://my.spline.design/boxeshover-vuJCQ5B6EeG5YJ4qxoC4o1Mp/"
                frameBorder="0"
                width="100%"
                height="100%"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section
        id="work"
        className="py-16 md:py-32 bg-black relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-white/40 text-center mb-12 md:mb-24 tracking-[0.2em] animate-glow">
            Our Work
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-xl p-4 md:p-8 rounded-lg border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 hover:transform hover:scale-105">
              <h3 className="text-lg md:text-xl font-bold text-blue-400/70 mb-2 md:mb-4">
                DeFi Platform
              </h3>
              <p className="text-sm md:text-base text-gray-400">
                A comprehensive decentralized finance platform with real-time
                analytics and secure transaction processing.
              </p>
              <div className="mt-4 flex gap-3 flex-wrap">
                <span className="text-xs bg-blue-900/30 text-blue-400 px-3 py-1 rounded-full">
                  React
                </span>
                <span className="text-xs bg-purple-900/30 text-purple-400 px-3 py-1 rounded-full">
                  Web3
                </span>
                <span className="text-xs bg-pink-900/30 text-pink-400 px-3 py-1 rounded-full">
                  Blockchain
                </span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-xl p-4 md:p-8 rounded-lg border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 hover:transform hover:scale-105">
              <h3 className="text-lg md:text-xl font-bold text-purple-400/70 mb-2 md:mb-4">
                E-Commerce Platform
              </h3>
              <p className="text-sm md:text-base text-gray-400">
                Modern e-commerce solution with AI-powered product
                recommendations and seamless checkout experience.
              </p>
              <div className="mt-4 flex gap-3 flex-wrap">
                <span className="text-xs bg-blue-900/30 text-blue-400 px-3 py-1 rounded-full">
                  Next.js
                </span>
                <span className="text-xs bg-purple-900/30 text-purple-400 px-3 py-1 rounded-full">
                  AI
                </span>
                <span className="text-xs bg-pink-900/30 text-pink-400 px-3 py-1 rounded-full">
                  Stripe
                </span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-900/20 to-blue-900/20 backdrop-blur-xl p-4 md:p-8 rounded-lg border border-pink-500/10 hover:border-pink-500/30 transition-all duration-300 hover:transform hover:scale-105">
              <h3 className="text-lg md:text-xl font-bold text-pink-400/70 mb-2 md:mb-4">
                SaaS Dashboard
              </h3>
              <p className="text-sm md:text-base text-gray-400">
                Enterprise-level analytics dashboard with real-time data
                visualization and predictive insights.
              </p>
              <div className="mt-4 flex gap-3 flex-wrap">
                <span className="text-xs bg-blue-900/30 text-blue-400 px-3 py-1 rounded-full">
                  Vue.js
                </span>
                <span className="text-xs bg-purple-900/30 text-purple-400 px-3 py-1 rounded-full">
                  D3.js
                </span>
                <span className="text-xs bg-pink-900/30 text-pink-400 px-3 py-1 rounded-full">
                  GraphQL
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-8 md:mb-16">
            About Us
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-base md:text-lg text-gray-300 mb-8">
              We're a team of passionate developers and designers dedicated to
              creating exceptional digital experiences. With years of experience
              and a commitment to excellence, we help businesses succeed in the
              digital world.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm md:text-base text-gray-400">
            © 2025 DevFirm. All rights reserved.
          </p>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 2s ease-out forwards;
        }
        @keyframes glow {
          0%, 100% {
            text-shadow: 0 0 20px rgba(255, 255, 255, 0.1),
                         0 0 40px rgba(255, 255, 255, 0.1);
          }
          50% {
            text-shadow: 0 0 30px rgba(255, 255, 255, 0.3),
                         0 0 60px rgba(255, 255, 255, 0.3);
          }
        }
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
        @keyframes slide-in {
          from { opacity: 0; transform: translateY(-100%); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-in {
          animation: slide-in 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default MainComponent;