import { CalendarDays, MapPin, Ticket } from "lucide-react";

const demoEvents = [
  {
    id: 1,
    title: "Hackathon 2025",
    date: "Mar 21, 2025",
    venue: "Innovation Lab",
    price: 10,
    cover: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Cultural Night",
    date: "Apr 5, 2025",
    venue: "Main Auditorium",
    price: 0,
    cover: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "AI Symposium",
    date: "Apr 22, 2025",
    venue: "CS Block",
    price: 5,
    cover: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function EventsGrid() {
  return (
    <section id="events" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Upcoming events</h2>
            <p className="text-gray-600">View details and register in a click.</p>
          </div>
          <button className="rounded-lg border border-black/10 px-3 py-2 text-sm hover:bg-black/5">Filter</button>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {demoEvents.map((e) => (
            <article key={e.id} className="group rounded-2xl overflow-hidden border border-black/10 bg-white">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={e.cover} alt={e.title} className="h-full w-full object-cover transition group-hover:scale-105" />
              </div>
              <div className="p-4 space-y-3">
                <h3 className="font-semibold group-hover:underline underline-offset-4">{e.title}</h3>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                  <span className="inline-flex items-center gap-2"><CalendarDays size={16} /> {e.date}</span>
                  <span className="inline-flex items-center gap-2"><MapPin size={16} /> {e.venue}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">{e.price > 0 ? `$${e.price}` : 'Free'}</span>
                  <button className="inline-flex items-center gap-2 rounded-lg bg-gray-900 text-white px-3 py-2 text-sm hover:bg-black">
                    <Ticket size={16} /> Register
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
