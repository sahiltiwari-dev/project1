"use client";
import React from "react";
import { useState, useEffect } from "react";

function MainComponent() {
  const [displayText, setDisplayText] = useState("");
  const [formStatus, setFormStatus] = useState({ message: "", type: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const text = "Let's create something amazing together";
    let index = 0;

    const type = setInterval(() => {
      if (index < text.length) {
        setDisplayText((prev) => prev + text[index]);
        index++;
      } else clearInterval(type);
    }, 50);

    return () => clearInterval(type);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.target);
      const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      };

      setFormStatus({
        message: "Message sent successfully! We'll get back to you soon.",
        type: "success",
      });
      e.target.reset();
    } catch (error) {
      setFormStatus({
        message: "There was an error sending your message. Please try again.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
              CONTACT
            </h1>
            <p className="text-2xl md:text-3xl text-white/30 tracking-wider animate-fade-up">
              {displayText}
            </p>
          </div>
        </section>

        <section className="py-32 bg-black/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-12">
                <div>
                  <h2 className="text-3xl font-bold text-white/40 mb-6 tracking-[0.2em] animate-glow">
                    Get in Touch
                  </h2>
                  <p className="text-gray-400">
                    Ready to start your next project? We're here to turn your
                    vision into reality.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <i className="fa-solid fa-envelope text-blue-400 text-xl"></i>
                    <div>
                      <h3 className="text-white font-bold">Email</h3>
                      <p className="text-gray-400">contact@devfirm.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <i className="fa-solid fa-location-dot text-purple-400 text-xl"></i>
                    <div>
                      <h3 className="text-white font-bold">Location</h3>
                      <p className="text-gray-400">San Francisco, CA</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <i className="fa-solid fa-clock text-pink-400 text-xl"></i>
                    <div>
                      <h3 className="text-white font-bold">Hours</h3>
                      <p className="text-gray-400">Mon - Fri: 9am - 6pm PST</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-xl p-8 rounded-lg border border-blue-500/10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-white mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-black/50 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-800"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-black/50 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-800"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-white mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="6"
                      className="w-full px-4 py-3 bg-black/50 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-800"
                    ></textarea>
                  </div>
                  {formStatus.message && (
                    <div
                      className={`text-${
                        formStatus.type === "success" ? "green" : "red"
                      }-400 text-sm`}
                    >
                      {formStatus.message}
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-transparent text-white/30 border border-white/10 px-8 py-4 rounded-full text-lg tracking-[0.3em] transition-all duration-300 hover:text-white/50 hover:border-white/20 disabled:opacity-50"
                  >
                    {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                  </button>
                </form>
              </div>
            </div>
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