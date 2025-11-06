import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ye1K3sSjaU31bi66/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 py-16">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs border border-black/10">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Now accepting organizers for Spring Fest
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">The modern way to run college events</h1>
          <p className="text-gray-600 text-lg">Discover, register, and manage campus events with secure payments, role-based dashboards, and S3-powered media uploads.</p>
          <div className="flex flex-wrap items-center gap-3">
            <a href="#events" className="inline-flex items-center gap-2 rounded-lg bg-gray-900 text-white px-4 py-2 text-sm hover:bg-black transition">Browse events</a>
            <a href="#dashboard" className="inline-flex items-center gap-2 rounded-lg border border-black/10 px-4 py-2 text-sm hover:bg-black/5 transition">Open dashboard</a>
          </div>
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/70 via-white/30 to-transparent" />
          <div className="relative rounded-2xl border border-black/10 bg-white/70 backdrop-blur p-4">
            <ul className="grid grid-cols-2 gap-3 text-sm">
              {[
                { label: 'Secure JWT auth', value: 'OAuth-ready' },
                { label: 'Role control', value: 'User / Admin / Super' },
                { label: 'Payments', value: 'Stripe-ready' },
                { label: 'Storage', value: 'S3 uploads' },
              ].map((i) => (
                <li key={i.label} className="rounded-xl border border-black/10 p-4 bg-white/70">
                  <p className="font-medium">{i.label}</p>
                  <p className="text-gray-600 text-xs">{i.value}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
