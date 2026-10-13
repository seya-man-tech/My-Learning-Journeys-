import {
  Home,
  User,
  Briefcase,
  GraduationCap,
  Layers,
  FolderGit2,
  Users,
  FileText,
  MessageSquare,
} from "lucide-react";

const navItems = [
  { id: "home", icon: Home, label: "Home" },
  { id: "about", icon: User, label: "About" },
  { id: "services", icon: Briefcase, label: "Services" },
  { id: "experience", icon: GraduationCap, label: "Experience" },
  { id: "works", icon: Layers, label: "Works" },
  { id: "blog", icon: FolderGit2, label: "Blog" },
  { id: "clients", icon: Users, label: "Clients" },
  { id: "cv", icon: FileText, label: "Resume" },
  { id: "contact", icon: MessageSquare, label: "Contact" },
];

function Sidebar({ activeSection, setActiveSection }) {
  return (
    <aside className="fixed left-0 top-0 z-50 flex h-screen w-16 flex-col items-center border-r border-slate-700/50 bg-[#2d2e40] py-6 md:w-20">

      {/* Logo */}
      <div className="mb-8 cursor-pointer">
        <span className="text-2xl font-bold text-white">
          W<span className="text-red-500">.</span>
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex flex-1 flex-col justify-center gap-5">

        {navItems.map((item) => {
          const Icon = item.icon;

          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              title={item.label}
              className={`rounded-lg p-2.5 transition-all duration-300 ${
                isActive
                  ? "scale-110 text-cyan-400"
                  : "text-gray-400 hover:scale-105 hover:text-white"
              }`}
            >
              <Icon size={20} />
            </button>
          );
        })}

      </nav>
    </aside>
  );
}

export default Sidebar;



