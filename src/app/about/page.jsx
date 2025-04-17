"use client";
import React from "react";
import { useState, useEffect } from "react";


function MainComponent() {
  const [displayText1, setDisplayText1] = useState("");
  const [displayText2, setDisplayText2] = useState("");
  const [activeValue, setActiveValue] = useState(null);

  useEffect(() => {
    const text1 = "Crafting digital experiences that define the future";
    const text2 = "Building tomorrow's technology today";
    let index1 = 0,
      index2 = 0;

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

    return () => {
      clearInterval(type1);
    };
  }, []);

  const values = [
    {
      title: "Innovation",
      description: "Pushing boundaries and embracing cutting-edge technologies",
      icon: "fa-solid fa-lightbulb",
      color: "blue",
    },
    {
      title: "Excellence",
      description: "Delivering exceptional quality in every project",
      icon: "fa-solid fa-star",
      color: "purple",
    },
    {
      title: "Collaboration",
      description: "Working together to achieve extraordinary results",
      icon: "fa-solid fa-hands-helping",
      color: "pink",
    },
  ];

  const achievements = [
    {
      number: "200+",
      label: "Projects Completed",
      icon: "fa-solid fa-check-circle",
    },
    {
      number: "50+",
      label: "Global Clients",
      icon: "fa-solid fa-globe",
    },
    {
      number: "15+",
      label: "Industry Awards",
      icon: "fa-solid fa-trophy",
    },
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "Lead Developer",
      description: "Expert in blockchain and web3 technologies",
    },
    {
      name: "Alex Rodriguez",
      role: "Creative Director",
      description: "Visionary designer with 10+ years experience",
    },
    {
      name: "Maya Patel",
      role: "Technical Architect",
      description: "Specialized in scalable cloud solutions",
    },
  ];

  return (
    <div className="min-h-screen bg-black relative">
      <div className="fixed inset-0">
        <iframe
          src="https://my.spline.design/abstractinteractivecubes-e20c2c5e3727a5e2986e1f43c0c3c3e0/"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>

      <div className="relative z-10">
        <section className="h-screen flex items-center justify-center">
          <div className="text-center px-4 bg-black/30 py-12 rounded-2xl backdrop-blur-sm">
            <h1 className="text-7xl md:text-9xl font-bold text-white/40 mb-8 tracking-[0.2em] animate-fade-up">
              ABOUT US
            </h1>
            <p className="text-2xl md:text-3xl text-white/30 tracking-wider animate-fade-up">
              {displayText1}
            </p>
          </div>
        </section>

        <section className="py-32 bg-black/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white/40 mb-8 tracking-[0.2em] animate-glow">
                  Our Story
                </h2>
                <p className="text-gray-400 mb-6">
                  Founded in 2020, DevFirm emerged from a vision to bridge the
                  gap between cutting-edge technology and practical business
                  solutions. Our journey began with a small team of passionate
                  developers and has grown into a global force in digital
                  innovation.
                </p>
                <p className="text-gray-400">
                  Today, we continue to push the boundaries of what's possible
                  in web development, creating solutions that not only meet
                  current needs but anticipate future challenges.
                </p>
              </div>
              <div className="h-[400px] relative">
                <iframe
                  src="https://my.spline.design/abstractshapes-f5b2c5e3727a5e2986e1f43c0c3c3e1/"
                  frameBorder="0"
                  width="100%"
                  height="100%"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 bg-black/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-white/40 text-center mb-16 tracking-[0.2em] animate-glow">
              Our Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br from-${value.color}-900/20 to-${
                    value.color === "pink"
                      ? "blue"
                      : value.color === "blue"
                      ? "purple"
                      : "pink"
                  }-900/20 backdrop-blur-xl p-8 rounded-lg border border-${
                    value.color
                  }-500/10 hover:border-${
                    value.color
                  }-500/30 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer`}
                  onMouseEnter={() => setActiveValue(index)}
                  onMouseLeave={() => setActiveValue(null)}
                >
                  <i
                    className={`${value.icon} text-4xl text-${value.color}-400 mb-6`}
                  ></i>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 bg-black/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-white/40 text-center mb-16 tracking-[0.2em] animate-glow">
              Our Team
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-xl p-8 rounded-lg border border-gray-500/10 hover:border-gray-500/30 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-400 mb-4">{member.role}</p>
                  <p className="text-gray-400">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 bg-black/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-white/40 text-center mb-16 tracking-[0.2em] animate-glow">
              Our Achievements
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="text-center bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-xl p-8 rounded-lg border border-blue-500/10"
                >
                  <i
                    className={`${achievement.icon} text-4xl text-blue-400 mb-4`}
                  ></i>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {achievement.number}
                  </h3>
                  <p className="text-gray-400">{achievement.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 bg-black/50 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white/40 mb-8 tracking-[0.2em] animate-glow">
              Our Mission
            </h2>
            <p className="text-2xl text-gray-400 mb-12">{displayText2}</p>
            <a
              href="/explore"
              className="inline-block bg-transparent text-white/30 border border-white/10 px-12 py-4 rounded-full text-lg tracking-[0.3em] transition-all duration-300 hover:text-white/50 hover:border-white/20"
            >
              EXPLORE SERVICES
            </a>
          </div>
        </section>
      </div>

      <style jsx global>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-up {
          opacity: 0;
          animation: fadeUp 1s ease-out forwards;
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
      `}</style>
    </div>
  );
}

export default MainComponent;