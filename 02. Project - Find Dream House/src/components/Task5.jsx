import icon1 from "/images/icons8-verified-account-96 1.png";
import icon2 from "/images/icons8-verified-account-96 1.png";
import vector1 from "/images/Vector-1.png";
import logo from "/images/logo.png";
import instagram from "/images/Vector-3.png";
import facebook from "/images/Vector-4.png";
import twitter from "/images/Vector-5.png";
function Task5() {
  return (
    <footer className="bg-[#FFFDF9] text-[#211814]">
      {/* Top Question / Subscribe Section */}
      <div className="px-6 py-16 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Do You Have Any Questions? <br />
          Get Help From Us
        </h2>

        {/* Feature Checkpoints */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-6 mb-8 text-xs md:text-sm font-medium">
          <div className="flex items-center gap-2">
           <img src={icon1} />
            <span>Chat live with our support team</span>
          </div>
          <div className="flex items-center gap-2">
            <img src={icon2} />
            <span>Browse our FAQ</span>
          </div>
        </div>

        {/* Email Form */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
          <div className="bg-[#EFE3D8] px-4 py-3 rounded-xl flex items-center gap-3 w-full">
           <img src={vector1} />
            <input
              type="email"
              placeholder="Enter your email address..."
              className="bg-transparent text-xs text-[#211814] placeholder-gray-500 outline-none w-full"
                      />
                      
          </div>
          <button className="bg-[#211814] text-white px-8 py-3 rounded-xl text-xs font-medium w-full sm:w-auto hover:opacity-90">
            Submit
          </button>
        </div>
      </div>

          
      {/* Main Footer Links Section */}
      <div className="bg-[#EFE3D8] px-6 py-12 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Logo & Slogan */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} />
              <span className="font-bold text-xl text-[#211814]">Dwello</span>
            </div>
            <p className="text-gray-600 text-xs leading-relaxed max-w-[200px]">
              Bringing you closer to your dream home, one click at a time.
            </p>
          </div>

                  
          {/* About */}
          <div>
            <h4 className="font-bold text-sm mb-4">About</h4>
            <ul className="space-y-2.5 text-xs text-gray-700">
              <li>
                <a href="#" className="hover:underline">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Resources
                </a>
              </li>
            </ul>
          </div>

                  
          {/* Support */}
          <div>
            <h4 className="font-bold text-sm mb-4">Support</h4>
            <ul className="space-y-2.5 text-xs text-gray-700">
              <li>
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

                  
          {/* Find Us */}
          <div>
            <h4 className="font-bold text-sm mb-4">Find Us</h4>
            <ul className="space-y-2.5 text-xs text-gray-700">
              <li>
                <a href="#" className="hover:underline">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Locations
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Newsletter
                </a>
              </li>
            </ul>
          </div>
          {/* Our Social */}
          <div>
            <h4 className="font-bold text-sm mb-4">Our Social</h4>
            <ul className="space-y-3 text-xs text-gray-700">
              <li>
                <a href="#" className="flex items-center gap-2 hover:underline">
                  <img src={instagram} />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 hover:underline">
                 <img src={facebook} />
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 hover:underline">
             <img src={twitter} />
                  <span>Twitter (x)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Task5;