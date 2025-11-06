import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import EventsGrid from "./components/EventsGrid";
import DashboardPreview from "./components/DashboardPreview";

function Footer() {
  return (
    <footer className="py-12 border-t border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} CampusConnect. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <a href="#" className="hover:text-gray-900">Privacy</a>
          <a href="#" className="hover:text-gray-900">Terms</a>
          <a href="#" className="hover:text-gray-900">Support</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <EventsGrid />
        <DashboardPreview />
      </main>
      <Footer />
    </div>
  );
}
