"use client";
import React from "react";
import { useState, useEffect } from "react";

function MainComponent() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [displayText1, setDisplayText1] = useState("");
  const [displayText2, setDisplayText2] = useState("");

  useEffect(() => {
    const text1 =
      "Transforming ideas into digital reality with cutting-edge solutions.";
    const text2 =
      "Elevate your business with our premium development services.";
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

  const services = [
    {
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies and best practices",
      icon: "fa-solid fa-code",
    },
    {
      title: "Content Writing",
      description:
        "Engaging and SEO-optimized content that connects with your target audience",
      icon: "fa-solid fa-pen-fancy",
    },
    {
      title: "Blog Post Writing",
      description:
        "Well-researched, compelling blog posts that drive traffic and engagement",
      icon: "fa-solid fa-blog",
    },
  ];

  const projects = [
    {
      title: "E-Commerce Website",
      description:
        "Modern online store with seamless user experience and responsive design",
      tech: ["React", "Node.js", "MongoDB"],
      color: "blue",
    },
    {
      title: "Tech Blog Platform",
      description:
        "Content-rich blog featuring in-depth technical articles and tutorials",
      tech: ["Content Strategy", "SEO", "Technical Writing"],
      color: "purple",
    },
    {
      title: "Corporate Website",
      description:
        "Professional website with engaging content and optimized copy",
      tech: ["Web Design", "Copywriting", "Content"],
      color: "pink",
    },
  ];

  return (
    <div className="min-h-screen bg-black relative">
      <iframe
        src="https://my.spline.design/blackabstractart-kw5K2F77u3D7iyJ6KH7gLCvG/"
        frameBorder="0"
        width="100%"
        height="100%"
        className="fixed inset-0 z-0"
      />
      <div className="relative z-10">
        <section className="relative h-screen">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-extralight text-white/40 tracking-[0.2em] mb-8">
                SERVICES
              </h1>
              <p className="text-xl text-white/30 mb-8 tracking-wider">
                {displayText1}
              </p>
            </div>
          </div>
        </section>

        <section className="py-32 bg-black/50 relative">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white/40 text-center mb-24 tracking-[0.2em] animate-glow">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br from-${
                    project.color
                  }-900/20 to-${
                    project.color === "pink"
                      ? "blue"
                      : project.color === "blue"
                      ? "purple"
                      : "pink"
                  }-900/20 backdrop-blur-xl p-8 rounded-lg border border-${
                    project.color
                  }-500/10 hover:border-${
                    project.color
                  }-500/30 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer`}
                  onMouseEnter={() => setSelectedProject(index)}
                  onMouseLeave={() => setSelectedProject(null)}
                >
                  <h3
                    className={`text-xl font-bold text-${project.color}-400/70 mb-4`}
                  >
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6">{project.description}</p>
                  <div className="flex gap-3 flex-wrap">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`text-xs bg-${project.color}-900/30 text-${project.color}-400 px-3 py-1 rounded-full`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 bg-black/50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white/40 text-center mb-24 tracking-[0.2em] animate-glow">
              Our Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-xl p-8 rounded-lg border border-gray-500/10 hover:border-gray-500/30 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <i
                    className={`${service.icon} text-4xl text-blue-400 mb-6`}
                  ></i>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-xl text-white/30 mb-12 tracking-wider">
              {displayText2}
            </p>
            <a
              href="#contact"
              className="inline-block bg-transparent text-white/30 border border-white/10 px-12 py-4 rounded-full text-lg tracking-[0.3em] transition-all duration-300 hover:text-white/50 hover:border-white/20 hover:transform hover:scale-105"
            >
              GET STARTED
            </a>
          </div>
        </section>
      </div>

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
      `}</style>
    </div>
  );
}

export default MainComponent;