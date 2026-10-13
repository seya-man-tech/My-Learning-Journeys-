import React, { useState } from 'react';

const Works = () => {
  const [activeFilter, setActiveFilter] = useState('Everything');

  const categories = ['Everything', 'Creative', 'Art', 'Design', 'Branding'];

  const projects = [
    { id: 1, title: 'Project Reviews Navigation', category: 'Everything', image: '/images/Agency-1.png', isCustomCard: false },
    { id: 2, title: 'Guest App Walkthrough Screens', category: 'Creative', isCustomCard: true }, // ምስል የሌላት ሁለተኛዋ ካርድ
    { id: 3, title: 'Mobile Application Design', category: 'Art', image: '/images/Screenshot_18 1 (1).png', isCustomCard: false },
    { id: 4, title: 'World Network Illustration', category: 'Design', image: '/images/1.png', isCustomCard: false },
    { id: 5, title: 'Desktop Workstation Setup', category: 'Branding', image: '/images/Screenshot_20 1 (1).png', isCustomCard: false },
    { id: 6, title: 'UI/UX Dashboard Concept', category: 'Creative', image: '/images/Screenshot_21 1 (1).png', isCustomCard: false },
  ];

  const testimonial = {
    name: 'SAROWAR HOSSEN',
    role: 'Product designer at Dribbble',
    review: 'I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck! 👍',
  };

  const filteredProjects =
    activeFilter === 'Everything'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="works" className="min-h-screen bg-[#f9f9ff] text-slate-800 py-16 pl-16 md:pl-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* RECENT WORKS */}
        <div>
          <div className="relative mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Recent works</h2>
            <div className="w-8 h-8 bg-blue-200/60 absolute -top-2 -left-3 -z-10 rotate-12 rounded-sm"></div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-6 mb-8 text-xs md:text-sm font-semibold">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`transition-colors ${
                  activeFilter === category ? 'text-teal-500 font-bold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Works Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) =>
              project.isCustomCard ? (
             
                <div
                  key={project.id}
                  className="bg-[#61f2c2] rounded-2xl p-6 shadow-sm flex flex-col justify-between min-h-[200px] relative overflow-hidden"
                >
                  <div>
                    <span className="bg-[#10b981] text-white text-[10px] font-bold tracking-wider px-3 py-1 rounded-full inline-block mb-4">
                      {project.category}
                    </span>
                    <h3 className="font-extrabold text-slate-900 text-lg leading-snug">
                      {project.title}
                    </h3>
                  </div>
                  <div className="w-4 h-4 bg-yellow-300 rounded-full"></div>
                </div>
              ) : (
             
                <div
                  key={project.id}
                  className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex items-center justify-center min-h-[200px]"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="max-h-36 w-auto object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )
            )}
          </div>
        </div>
 {/* CLIENTS & REVIEWS */}
        <div>
          <div className="relative mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Clients & Reviews</h2>
            <div className="w-8 h-8 bg-blue-200/60 absolute -top-2 -left-3 -z-10 rotate-12 rounded-sm"></div>
          </div>

          <div className="flex flex-col items-center text-center max-w-lg mx-auto space-y-3">
            <div className="w-14 h-14 rounded-full bg-indigo-600 flex items-center justify-center text-white shadow-md">
              <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>

            <div>
              <h3 className="font-bold text-slate-900 text-sm">{testimonial.name}</h3>
              <p className="text-xs text-slate-400">{testimonial.role}</p>
            </div>

            <div className="bg-[#353353] text-white text-xs leading-relaxed p-5 rounded-2xl shadow-lg mt-2">
              <p>{testimonial.review}</p>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <span className="w-4 h-1.5 bg-green-300 rounded-full"></span>
              <span className="w-4 h-1.5 bg-green-500 rounded-full"></span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Works;