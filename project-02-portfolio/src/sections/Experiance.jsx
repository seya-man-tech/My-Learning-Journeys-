
const Experience = () => {
  const educationData = [
    {
      year: "2022 - Present",
      title: "Academic Degree",
      desc: "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
    },
    {
      year: "2022 - Present",
      title: "Academic Degree",
      desc: "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
    },
    {
      year: "2022 - Present",
      title: "Academic Degree",
      desc: "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
    },
  ];

  const experienceData = [
    {
      year: "2022 - Present",
      title: "Academic Degree",
      desc: "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
    },
    {
      year: "2022 - Present",
      title: "Academic Degree",
      desc: "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
    },
    {
      year: "2022 - Present",
      title: "Academic Degree",
      desc: "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen bg-[#f9f9ff] text-slate-800 py-16 pl-16 md:pl-20 px-6 md:px-12"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="relative mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Experience</h2>
          <div className="w-8 h-8 bg-blue-200/50 absolute -top-2 -left-3 -z-10 rotate-12 rounded"></div>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Card - Education */}
          <div className="bg-[#353353] text-white p-8 rounded-2xl shadow-xl relative">
            <div className="space-y-8 relative border-l border-slate-600/50 pl-6 ml-2">
              {educationData.map((item, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[35px] top-1 bg-[#353353] p-1">
                    <img
                      src="/images/Vector (13).png"
                      alt="Academic Icon"
                      className="w-5 h-5 object-contain"
                    />
                  </div>

                  <span className="text-xs text-gray-400 font-medium block mb-1">
                    {item.year}
                  </span>
                  <h3 className="text-base font-bold mb-2 text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Card - Experience */}
          <div className="bg-[#353353] text-white p-8 rounded-2xl shadow-xl relative">
            <div className="space-y-8 relative border-l border-slate-600/50 pl-6 ml-2">
              {experienceData.map((item, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[35px] top-1 bg-[#353353] p-1">
                    <img
                      src="/images/Vector (13).png"
                      alt="Academic Icon"
                      className="w-5 h-5 object-contain"
                    />
                  </div>

                  <span className="text-xs text-gray-400 font-medium block mb-1">
                    {item.year}
                  </span>
                  <h3 className="text-base font-bold mb-2 text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
