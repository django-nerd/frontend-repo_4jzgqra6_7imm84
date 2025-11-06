import { Calendar, LayoutDashboard, User, Shield } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/60 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500" />
          <span className="text-lg font-semibold tracking-tight">CampusConnect</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <a href="#events" className="hover:text-gray-900 inline-flex items-center gap-2"><Calendar size={16} /> Events</a>
          <a href="#dashboard" className="hover:text-gray-900 inline-flex items-center gap-2"><LayoutDashboard size={16} /> Dashboard</a>
          <a href="#roles" className="hover:text-gray-900 inline-flex items-center gap-2"><Shield size={16} /> Roles</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-black/10 px-3 py-2 text-sm hover:bg-black/5 transition">
            <User size={16} /> Sign in
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg bg-gray-900 text-white px-3 py-2 text-sm hover:bg-black transition">
            Join now
          </button>
        </div>
      </div>
    </header>
  );
}
