

const About = () => {
  const skills = [
    { name: 'HTML', percentage: '92%', color: 'bg-red-500' },
    { name: 'CSS', percentage: '95%', color: 'bg-yellow-400' },
    { name: 'Java Script', percentage: '87%', color: 'bg-green-500' },
    { name: 'figma', percentage: '83%', color: 'bg-cyan-400' },
    { name: 'adobe premiere pro', percentage: '87%', color: 'bg-blue-500' },
  ];

  const stats = [
    {
      icon: "/images/Vector (6).png",
      number: "198",
      label: "Projects completed",
    },
    { icon: "/images/Vector (7).png", number: "102", label: "Ruining project" },
    {
      icon: "/images/Vector (8).png",
      number: "90",
      label: "Satisfied clients",
    },
    { icon: "/images/Vector (9).png", number: "85", label: "Nominees winner" },
  ];

  const services = [
    {
      icon: "/images/Vector (11).png",
      title: "PSD TO HTML",
      desc: "I will design a psd to html web template fully responsively",
    },
    {
      icon: "/images/Vector (10).png",
      title: "PSD TO WORDPRESS",
      desc: "I will design a psd to wordpress web template fully responsively",
    },
    {
      icon: "/images/🦆 icon _Video_.png",
      title: "PROMOTIONAL VIDEO",
      desc: "I will make a promotional video for your band",
    },
    {
      icon: "/images/Vector (12).png",
      title: "FIGMA DESIGN",
      desc: "I will design Figma web template or mobile app fully responsively",
    },
    {
      icon: "/images/Vector (10).png",
      title: "FIGMA TO WORDPRESS",
      desc: "I will design a figma to wordpress web template fully responsively",
    },
    {
      icon: "/images/🦆 icon _Video_.png",
      title: "PROMOTIONAL VIDEO",
      desc: "I will make a promotional video for your band",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen bg-[#f9f9ff] text-slate-800 py-16 pl-16 md:pl-20 px-6 md:px-12"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="relative mb-12">
          <h2 className="text-3xl font-bold text-slate-900">About Me</h2>
          <div className="w-8 h-8 bg-purple-200/50 absolute -top-2 -left-3 -z-10 rotate-12 rounded"></div>
        </div>

        {/* Top Content: Profile + Bio + Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-3 flex justify-center">
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img
                src="/images/IMG_20220619_150816-removebg-preview 1.png"
                alt="Wahid Ahmed"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-9 bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-between">
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                I Am Wahid Ahmed . I Am Proposal Web Designer And Video Editor.
                I have rich experience in web site design and building and
                customization, also I am good at WordPress, and also make
                proposal video editor for you band
              </p>
              <div>
                <a
                  href="#"
                  className="inline-block bg-[#353353] hover:bg-[#2a2843] text-white text-xs font-bold tracking-wider px-6 py-3 rounded-full transition-all duration-300 shadow-md"
                >
                  DOWNLOAD CV
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-4 justify-center">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.percentage}</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${skill.color} rounded-full`}
                      style={{ width: skill.percentage }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="w-10 h-10 flex justify-center items-center">
                <img
                  src={stat.icon}
                  alt={stat.label}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  {stat.number}
                </h3>
                <p className="text-xs text-slate-500">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Services Section Title */}
        <div className="relative mb-8">
          <h2 className="text-3xl font-bold text-slate-900">Services</h2>
          <div className="w-8 h-8 bg-blue-200/50 absolute -top-2 -left-3 -z-10 rotate-12 rounded"></div>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#353353] text-white p-8 rounded-2xl shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 mb-4 flex items-center justify-center">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-bold text-sm tracking-wide mb-3">
                {service.title}
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;