"use client";
import React from "react";
import { useState, useEffect } from "react";

function MainComponent() {
  const [activeProject, setActiveProject] = useState(null);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const text = "Transforming ideas into digital reality";
    let index = 0;

    const type = setInterval(() => {
      if (index < text.length) {
        setDisplayText((prev) => prev + text[index]);
        index++;
      } else clearInterval(type);
    }, 50);

    return () => clearInterval(type);
  }, []);

  const projects = [
    {
      id: 1,
      title: "DeFi Platform",
      category: "Blockchain",
      year: "2025",
      description:
        "A comprehensive decentralized finance platform enabling secure cryptocurrency trading, lending, and borrowing with real-time analytics and blockchain integration.",
      challenge:
        "Creating a secure and user-friendly platform for complex DeFi operations while ensuring real-time performance.",
      solution:
        "Implemented advanced blockchain protocols with an intuitive interface, making DeFi accessible to both novice and experienced users.",
      technologies: ["React", "Web3.js", "Solidity", "Ethereum", "GraphQL"],
      metrics: [
        "$50M+ Total Value Locked",
        "100K+ Active Users",
        "99.9% Uptime",
      ],
      color: "blue",
      image:
        "https://my.spline.design/untitled-4c2e2c5e3727a5e2986e1f43c0c3c3e0",
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      category: "Retail",
      year: "2025",
      description:
        "Modern e-commerce solution with AI-powered product recommendations and seamless checkout experience.",
      challenge:
        "Building a scalable platform that could handle high traffic while providing personalized shopping experiences.",
      solution:
        "Developed an AI-driven recommendation engine and optimized the platform architecture for maximum performance.",
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "TensorFlow"],
      metrics: [
        "45% Increase in Sales",
        "2M+ Monthly Users",
        "3.8s Avg. Session",
      ],
      color: "purple",
      image:
        "https://my.spline.design/untitled-6f7b2c5e3727a5e2986e1f43c0c3c3e1",
    },
    {
      id: 3,
      title: "SaaS Dashboard",
      category: "Enterprise",
      year: "2025",
      description:
        "Enterprise-level analytics dashboard providing real-time data visualization and predictive insights.",
      challenge:
        "Delivering complex data analytics in an accessible format while maintaining real-time updates.",
      solution:
        "Created an intuitive dashboard with customizable widgets and automated reporting features.",
      technologies: ["Vue.js", "D3.js", "GraphQL", "PostgreSQL", "Python"],
      metrics: [
        "500+ Enterprise Clients",
        "98% Client Retention",
        "2.5M+ Reports Generated",
      ],
      color: "pink",
      image:
        "https://my.spline.design/untitled-8a9b2c5e3727a5e2986e1f43c0c3c3e2",
    },
  ];

  return (
    <div className="min-h-screen bg-black relative">
      <div className="fixed inset-0 w-full h-full">
        <iframe
          src="https://my.spline.design/ticktockinteractivelanding-Si0fV8hO89aITnJldA5JexlQ/"
          frameBorder="0"
          width="100%"
          height="100%"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 1,
          }}
        />
      </div>

      <div className="relative z-10">
        <section className="h-screen flex items-center justify-center">
          <div className="text-center px-4 bg-black/30 py-12 rounded-2xl backdrop-blur-sm w-full max-w-4xl mx-4">
            <h1 className="text-7xl md:text-9xl font-bold text-white mb-8 animate-fade-up tracking-[0.2em] text-shadow-lg">
              PORTFOLIO
            </h1>
            <p
              className="text-2xl md:text-3xl text-white tracking-wider animate-fade-up font-light"
              style={{ animationDelay: "0.5s" }}
            >
              {displayText}
            </p>
          </div>
        </section>

        <section className="py-32 relative bg-black/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className={`group cursor-pointer ${
                    activeProject === project.id ? "col-span-full" : ""
                  }`}
                  onClick={() =>
                    setActiveProject(
                      activeProject === project.id ? null : project.id
                    )
                  }
                >
                  <div
                    className={`bg-gradient-to-br from-${
                      project.color
                    }-900/20 to-${
                      project.color === "pink"
                        ? "blue"
                        : project.color === "blue"
                        ? "purple"
                        : "pink"
                    }-900/20 backdrop-blur-xl rounded-lg border border-${
                      project.color
                    }-500/10 hover:border-${
                      project.color
                    }-500/30 transition-all duration-500 overflow-hidden ${
                      activeProject === project.id
                        ? "p-8"
                        : "p-6 hover:transform hover:scale-105"
                    }`}
                  >
                    <div
                      className={`${
                        activeProject === project.id
                          ? "grid md:grid-cols-2 gap-8"
                          : ""
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <h3
                            className={`text-${project.color}-400/70 ${
                              activeProject === project.id
                                ? "text-4xl"
                                : "text-2xl"
                            } font-bold`}
                          >
                            {project.title}
                          </h3>
                          <span className="text-white/30">{project.year}</span>
                        </div>

                        <div className="space-y-4">
                          <p className="text-gray-400">{project.description}</p>

                          {activeProject === project.id && (
                            <>
                              <div className="mt-6">
                                <h4 className="text-white/70 mb-2">
                                  The Challenge
                                </h4>
                                <p className="text-gray-400">
                                  {project.challenge}
                                </p>
                              </div>

                              <div className="mt-6">
                                <h4 className="text-white/70 mb-2">
                                  Our Solution
                                </h4>
                                <p className="text-gray-400">
                                  {project.solution}
                                </p>
                              </div>

                              <div className="mt-6">
                                <h4 className="text-white/70 mb-2">
                                  Key Metrics
                                </h4>
                                <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                  {project.metrics.map((metric, index) => (
                                    <li
                                      key={index}
                                      className={`bg-${project.color}-900/30 text-${project.color}-400 px-4 py-3 rounded-lg text-center`}
                                    >
                                      {metric}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </>
                          )}

                          <div className="flex flex-wrap gap-2 mt-4">
                            {project.technologies.map((tech, index) => (
                              <span
                                key={index}
                                className={`text-sm bg-${project.color}-900/30 text-${project.color}-400 px-3 py-1 rounded-full`}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {activeProject === project.id && (
                        <div className="relative h-[400px] rounded-lg overflow-hidden mt-6 md:mt-0">
                          <iframe
                            src={project.image}
                            frameBorder="0"
                            width="100%"
                            height="100%"
                            className="absolute inset-0"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 relative bg-black/50 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white/40 mb-8 tracking-[0.2em] animate-glow">
              Start Your Project
            </h2>
            <p className="text-gray-400 mb-12 text-lg">
              Ready to transform your digital presence? Let's create something
              extraordinary together.
            </p>
            <a
              href="#contact"
              className="inline-block bg-transparent text-white/30 border border-white/10 px-12 py-4 rounded-full text-lg tracking-[0.3em] transition-all duration-300 hover:text-white/50 hover:border-white/20"
            >
              GET IN TOUCH
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
        .text-shadow-lg {
          text-shadow: 
            0 0 20px rgba(255, 255, 255, 0.3),
            0 0 40px rgba(255, 255, 255, 0.2),
            0 0 60px rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </div>
  );
}

export default MainComponent;