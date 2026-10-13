import logo from "/images/logo.png";
import hero from "/images/hero image 1.png";
import mapPin from "/images/location.png";
    import vector from "/images/vector.png";
  import { Search, User, DollarSign } from "lucide-react";

 function Task1() {
  return (
    <section className="bg-[#FFFDF9] px-6 py-6 md:px-16">

      <nav className="flex justify-between items-center py-4">
        <div className="flex items-center gap-2">

           <img src={logo} />

          <span className="font-bold text-xl text-[#211814]">Dwello</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-[#211814] font-medium text-sm">
          <a href="#" className="hover:opacity-70">
            Home
          </a>
          <a href="#" className="hover:opacity-70">
            Service
          </a>
          <a href="#" className="hover:opacity-70">
            Agents
          </a>
          <a href="#" className="hover:opacity-70">
            Contact
          </a>
        </div>
        <div className="flex items-center gap-4">
          {/* Lucide Search Icon */}
          <Search className="w-5 h-5 text-[#211814] cursor-pointer hover:opacity-70" />

          {/* Lucide User Icon */}
          <User className="w-5 h-5 text-[#211814] cursor-pointer hover:opacity-70" />

          <button className="bg-[#211814] text-white px-5 py-2 rounded-lg text-sm font-medium">
            Sign up
          </button>
        </div>
      </nav>

      <div className="grid md:grid-cols-2 gap-8 items-center mt-8">
        <div>
          <h1 className="text-5xl font-extrabold text-[#211814] leading-tight mb-4">
            Find Your <br /> Dream Home
          </h1>
          <p className="text-gray-600 text-sm max-w-sm mb-6">
            Explore our curated selection of exquisite properties meticulously
            tailored to your unique dream home vision.
          </p>
          <button className="bg-[#211814] text-white px-6 py-3 rounded-lg text-sm font-medium">
            Sign up
          </button>
        </div>
        <div>
          
          <img src={hero} />
         
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-[#EFE3D8] p-4 rounded-2xl mt-8 max-w-4xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between shadow-sm">
        <div className="bg-white px-4 py-3 rounded-xl w-full flex justify-between items-center text-sm text-gray-500">
          <span>Location</span>

          <img src={mapPin} />
         
        </div>
        <div className="bg-white px-4 py-3 rounded-xl w-full flex justify-between items-center text-sm text-gray-500">
          <span>Type</span>
          <img src={vector} />
        
        </div>
        <div className="bg-white px-4 py-3 rounded-xl w-full flex justify-between items-center text-sm text-gray-500">
          <span>Price Range</span>
          {/* Lucide DollarSign Icon */}
          <DollarSign className="w-4 h-4 text-gray-400" />
        </div>
        <button className="bg-[#211814] text-white px-8 py-3 rounded-xl text-sm font-medium w-full md:w-auto">
          Sign up
        </button>
      </div>
    </section>
  );
}
export default Task1;