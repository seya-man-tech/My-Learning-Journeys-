import location from "/images/location.png";
import room from "/images/rooms.png";
import size from "/images/size.png";


 function Task3() {
  const residences = [
    {
      id: 1,
      image: "/images/image (10) 2.png", // ወይም የራስህ የምስል ስም
      location: "San Francisco, California",
      rooms: "4 Rooms",
      size: "3,500 sq ft",
      price: "$2,500,000",
    },
    {
      id: 2,
      image: "/images/Mask group-2.png",
      location: "Beverly Hills, California",
      rooms: "3 Rooms",
      size: "1,500 sq ft",
      price: "$850,000",
    },
    {
      id: 3,
      image: "/images/image (21) 2.png",
      location: "Palo Alto, California",
      rooms: "6 Rooms",
      size: "4,000 sq ft",
      price: "$3,700,000",
    },
  ];

  return (
    <section className="bg-[#FFFDF9] px-6 py-12 md:px-16">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-[#211814] text-center mb-10">
        Our Popular Residences
      </h2>

      {/* Cards Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {residences.map((item) => (
          <div
            key={item.id}
            className="bg-[#EFE3D8] rounded-2xl overflow-hidden shadow-sm"
          >
            {/* Main Image */}
            <img
              src={item.image}
              alt={item.location}
              className="w-full h-60 object-cover"
            />

            {/* Card Content */}
            <div className="p-5">
              {/* Location */}
              <div className="flex items-center gap-2 mb-3">
                <img src={location} />
               
                <span className="font-bold text-[#211814] text-sm">
                  {item.location}
                </span>
              </div>

              {/* Specs: Rooms & Size */}
              <div className="flex items-center gap-6 mb-6 text-xs text-gray-700">
                <div className="flex items-center gap-1.5">
                  <img src={room} />
                
                  <span>{item.rooms}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <img src={size} />
                  <span>{item.size}</span>
                </div>
              </div>

              {/* Bottom: Button & Price */}
              <div className="flex justify-between items-center">
                <button className="bg-[#211814] text-white text-xs px-5 py-2.5 rounded-lg font-medium hover:opacity-90">
                  Sign up
                </button>
                <span className="font-bold text-[#211814] text-sm md:text-base">
                  {item.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Task3;