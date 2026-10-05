import Mask from "/images/Mask group.png";


function Task2() {
  const features = [
    {
      icon: "/images/Vector-2.png",
      title: "Expert Guidance",
      desc: "Benefit from our team's seasoned expertise for a smooth buying experience",
    },
    {
      icon: "/images/Clip path group.png",
      title: "Personalized Service",
      desc: "Our services adapt to your unique needs, making your journey stress-free",
    },
    {
      icon: "/images/Clip path group-1.png",
      title: "Transparent Process",
      desc: "Stay informed with our clear and honest approach to buying your home",
    },
    {
      icon: "/images/Clip path group-2.png",
      title: "Exceptional Support",
      desc: "Providing peace of mind with our responsive and attentive customer service",
    },
  ];

  return (
    <section className="bg-[#FFFDF9] px-6 py-12 md:px-16">
      {/* Top Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-16 max-w-6xl mx-auto">
        <img src={Mask} />
      
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#211814] mb-4 leading-tight">
            We Help You To Find <br /> Your Dream Home
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-8">
            From cozy cottages to luxurious estates, our dedicated team guides
            you through every step of the journey, ensuring your dream home
            becomes a reality.
          </p>
          <div className="flex gap-10">
            <div>
              <h3 className="text-3xl font-bold text-[#211814]">8K+</h3>
              <p className="text-gray-500 text-xs mt-1">Houses Available</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#211814]">6K+</h3>
              <p className="text-gray-500 text-xs mt-1">Houses Sold</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#211814]">2K+</h3>
              <p className="text-gray-500 text-xs mt-1">Trusted Agents</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Header */}
      <div className="text-center mb-10">
        <h3 className="text-2xl font-bold text-[#211814]">Why Choose Us</h3>
        <p className="text-gray-500 text-xs mt-2 max-w-md mx-auto leading-relaxed">
          Elevating Your Home Buying Experience with Expertise, Integrity, and
          Unmatched Personalized Service
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-[#EFE3D8] p-6 rounded-2xl text-left shadow-sm"
          >
            <div className="bg-white w-10 h-10 rounded-xl flex items-center justify-center mb-4 p-2">
              <img
                src={item.icon}
                alt={item.title}
                className="w-5 h-5 object-contain"
              />
            </div>
            <h4 className="font-bold text-[#211814] text-sm mb-2">
              {item.title}
            </h4>
            <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Task2;