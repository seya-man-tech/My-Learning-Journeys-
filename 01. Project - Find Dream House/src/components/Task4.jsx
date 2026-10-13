import star from "/images/Star 1.png";
import img2 from "/images/Group 18.png";
 import img3 from "/images/Group 19.png";
function Task4() {
  const testimonials = [
    {
      id: 1,
      mainImage: "/images/Mask group-3.png",
       humanImage: "/images/Mask group-4.png",
      name: "Sarah Nguyen",
      location: "San Francisco",
      rating: "5.0",
      review:
        "Dwello truly cares about their clients. They listened to my needs and preferences and helped me find the perfect home in the Bay Area. Their professionalism and attention to detail are unmatched.",
    },
    {
      id: 2,
      mainImage: "/images/Mask group-5.png",
      humanImage: "/images/Mask group-6.png",
      name: "Michael Rodriguez",
      location: "San Diego",
      rating: "4.5",
      review:
        "I had a fantastic experience working with Dwello. Their expertise and personalized service exceeded my expectations. I found my dream home quickly and smoothly. Highly recommended!",
    },
    {
      id: 3,
      mainImage: "/images/Mask group-7.png",
       humanImage: "/images/Mask group-8.png",
      name: "Emily Johnson",
      location: "Los Angeles",
      rating: "5.0",
      review:
        "Dwello made my dream of owning a home a reality! Their team provided exceptional support and guided me through every step of the process. I couldn't be happier with my new home!",
    },
  ];

  return (
    <section className="bg-[#FFFDF9] px-6 py-12 md:px-16">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-[#211814] text-center mb-10">
        What People Say <br /> About Dwello
      </h2>

      {/* Cards Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="bg-[#EFE3D8] rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between"
          >
            {/* Top Main Image */}
            <img
              src={item.mainImage}
              alt={item.name}
              className="w-full h-44 object-cover"
            />

            {/* Card Body */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              {/* User Header Info */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <img
                    src={item. humanImage}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-[#211814] text-xs md:text-sm">
                      {item.name}
                    </h4>
                    <p className="text-gray-500 text-[10px] md:text-xs">
                      {item.location}
                    </p>
                  </div>
                </div>

                {/* Rating Badge */}
                <div className="bg-white px-2 py-1 rounded-md flex items-center gap-1 shadow-xs">
               <img src={star} />
                  <span className="font-bold text-[#211814] text-[10px]">
                    {item.rating}
                  </span>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-gray-700 text-[11px] leading-relaxed">
                {item.review}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center items-center gap-4">
        <button className="bg-[#5C4033] w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
       <img src={img2} />
        </button>
        <button className="bg-[#5C4033] w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
       <img src={img3} />
        </button>
      </div>
    </section>
  );
}
export default Task4;