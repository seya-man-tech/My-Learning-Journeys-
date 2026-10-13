

const Contact = () => {
 
  const techLogos = [
    { name: "HTML5", image: "/images/logo-2582748_640 1.png" },
    { name: "CSS3", image: "/images/logo-2582747_1280 1.png" },
    { name: "JavaScript", image: "/images/JavaScript-Logo 2.png" },
    { name: "Bootstrap", image: "/images/bootstrap-logo-shadow 1.png" },
    { name: "Facebook", image: "/images/facebook-logo-3-1 1.png" },
    { name: "YouTube", image: "/images/YouTube_full-color_icon_(2017) 1.png" },
    { name: "Elementor", image: "/images/Elementor-Logo-Symbol-Red 1.png" },
    { name: "WordPress", image: "/images/WordPress_blue_logo 1.png" },
    { name: "Tailwind", image: "/images/Tailwind_CSS_Logo 1.png" },
    { name: "jQuery", image: "/images/JQuery-Logo 1.png" },
    { name: "React", image: "/images/JavaScript-Logo 2.png" },
    { name: "Sass", image: "/images/logo-2582747_1280 1.png" },
  ];


  const posts = [
    {
      id: 1,
      title: "5 Best App Development Tool for Your Project",
      date: "09 February, 2020",
      author: "WAHID AHMED",
      image: "/images/1 (1) 1 (2).png",
      isGreen: true, 
    },
    {
      id: 2,
      title: "5 Best App Development Tool for Your Project",
      date: "09 February, 2020",
      author: "WAHID AHMED",
      image: "/images/2 23.png",
      isGreen: false,
    },
    {
      id: 3,
      title: "5 Best App Development Tool for Your Project",
      date: "09 February, 2020",
      author: "WAHID AHMED",
      image: "/images/1 (1) 1 (1).png",
      isGreen: false,
    },
  ];

  return (
    <section id="contact" className="min-h-screen bg-[#f9f9ff] text-slate-800 py-16 pl-16 md:pl-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto space-y-20">

        {/* 1. TECH LOGOS / FRAMEWORKS GRID */}
        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 gap-8 items-center justify-items-center max-w-3xl mx-auto py-6">
          {techLogos.map((tech, index) => (
            <div key={index} className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
              <img
                src={tech.image}
                alt={tech.name}
                className="max-w-full max-h-full object-contain hover:scale-110 transition-transform duration-200"
              />
            </div>
          ))}
        </div>

        {/* 2. LATEST POSTS SECTION */}
        <div>
          <div className="relative mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Latest Posts</h2>
            <div className="w-8 h-8 bg-blue-200/60 absolute -top-2 -left-3 -z-10 rotate-12 rounded-sm"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((post) => (
              <div
                key={post.id}
                className={`rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-shadow ${
                  post.isGreen ? 'bg-emerald-100/60' : 'bg-white'
                }`}
              >
                <div className="h-36 flex items-center justify-center mb-4">
                  <img src={post.image} alt={post.title} className="max-h-full object-contain" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm leading-snug mb-3">
                  {post.title}
                </h3>
                <div className="flex items-center gap-2 text-[10px] text-slate-400 font-medium">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.author}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. GET IN TOUCH SECTION */}
        <div>
          <div className="relative mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Get In Touch</h2>
            <div className="w-8 h-8 bg-blue-200/60 absolute -top-2 -left-3 -z-10 rotate-12 rounded-sm"></div>
          </div>
       <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Content */}
            <div className="lg:col-span-4 space-y-2">
              <h3 className="text-lg font-bold text-slate-900">Let's talk about everything!</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Don't like forms? Send me an email. 👋
              </p>
            </div>

            {/* Right Form */}
            <form onSubmit={(e) => e.preventDefault()} className="lg:col-span-8 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-white text-xs px-5 py-3.5 rounded-full border border-slate-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-white text-xs px-5 py-3.5 rounded-full border border-slate-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>

              <input
                type="text"
                placeholder="Your subject"
                className="w-full bg-white text-xs px-5 py-3.5 rounded-full border border-slate-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400"
              />

              <textarea
                rows="5"
                placeholder="Your message"
                className="w-full bg-white text-xs px-5 py-4 rounded-3xl border border-slate-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400 resize-none"
              ></textarea>

          
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;