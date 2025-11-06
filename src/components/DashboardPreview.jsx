import { Shield, User, Settings, CreditCard } from "lucide-react";

export default function DashboardPreview() {
  const cards = [
    { title: "User", desc: "Register, view tickets, manage profile", icon: User, color: "from-blue-500 to-cyan-500" },
    { title: "Admin", desc: "Create events, verify payments, export CSV", icon: Settings, color: "from-violet-500 to-fuchsia-500" },
    { title: "Super Admin", desc: "Promote temporary organizers, manage roles", icon: Shield, color: "from-amber-500 to-orange-500" },
    { title: "Payments", desc: "Stripe checkout and webhooks", icon: CreditCard, color: "from-emerald-500 to-teal-500" },
  ];

  return (
    <section id="dashboard" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Role-based dashboards</h2>
            <p className="text-gray-600">Clean UI for each role with JWT-protected routes.</p>
          </div>
          <a href="#roles" className="rounded-lg border border-black/10 px-3 py-2 text-sm hover:bg-black/5">Learn more</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((c) => (
            <div key={c.title} className="rounded-2xl border border-black/10 bg-white p-4">
              <div className={`h-10 w-10 rounded-lg bg-gradient-to-br ${c.color} text-white grid place-items-center mb-3`}>
                <c.icon size={18} />
              </div>
              <h3 className="font-semibold">{c.title}</h3>
              <p className="text-sm text-gray-600">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
