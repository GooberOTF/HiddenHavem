export default function HiddenHavenSite() {
  const discordUrl = "https://discord.gg/7XZHvrg6mP";

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
    { label: "Services", href: "#services" },
    { label: "Downloads", href: "#downloads" },
  ];

  const features = [
    {
      icon: "⚡",
      title: "Ownership-First Offer",
      text: "Lead with the full Hidden Haven suite and position rentals as the lower-commitment entry point.",
    },
    {
      icon: "🧠",
      title: "Premium Control Stack",
      text: "Frame the product like a real service operation with sessions, queue flow, customer handling, and command-driven management.",
    },
    {
      icon: "🔗",
      title: "Discord-Driven Funnel",
      text: "Every strong CTA routes buyers back to Discord so support, sales, and follow-up all happen in one place.",
    },
    {
      icon: "🎛️",
      title: "Operator Positioning",
      text: "Present the suite as something built for real operators, not just casual one-off usage.",
    },
    {
      icon: "💎",
      title: "Neon Brand Presence",
      text: "Sharper contrast, stronger hierarchy, and cyberpunk polish create a more memorable first impression.",
    },
    {
      icon: "🚀",
      title: "Conversion-Focused Structure",
      text: "The design keeps visitors moving from interest to action without cluttering the offer.",
    },
  ];

  const reviews = [
    {
      name: "Jaxon M.",
      text: "The landing page alone makes this feel like a premium toolset. It instantly looks bigger than a basic launcher.",
    },
    {
      name: "Selena R.",
      text: "The ownership message is clear, the visuals hit hard, and the Discord path is obvious. It feels polished and intentional.",
    },
    {
      name: "Marcus T.",
      text: "This feels like something built for people who want to run a service, not just click a few buttons and hope it works.",
    },
  ];

  const faqs = [
    {
      q: "What is the main product?",
      a: "The main product is the full Hidden Haven suite. Rentals are available, but ownership is the premium offer.",
    },
    {
      q: "Why buy the full suite instead of renting?",
      a: "Ownership gives buyers more control, better long-term value, and the ability to run their own P8 service workflow.",
    },
    {
      q: "Where do sales and support happen?",
      a: "Everything points back to Discord, with Goober_OTF as the main contact.",
    },
  ];

  const packages = [
    {
      title: "Shadow Monthlies",
      text: "Best for recurring users who want steady access and a simple monthly entry point.",
    },
    {
      title: "War Chest Packs",
      text: "Flexible bulk-hour options for buyers who want more room without committing to full ownership yet.",
    },
    {
      title: "Raid Runs",
      text: "Short-session access for quick usage and lower-friction first buys.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#03050a] text-white overflow-x-hidden selection:bg-cyan-400/30 selection:text-white">
      <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.55; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.08); }
        }
        @keyframes scanline {
          0% { transform: translateY(-10%); }
          100% { transform: translateY(110%); }
        }
        @keyframes shimmerX {
          0% { transform: translateX(-120%); }
          100% { transform: translateX(120%); }
        }
        @keyframes gridMove {
          0% { background-position: 0 0, 0 0; }
          100% { background-position: 0 56px, 56px 0; }
        }
        .animate-floatSlow { animation: floatSlow 7s ease-in-out infinite; }
        .animate-pulseGlow { animation: pulseGlow 4s ease-in-out infinite; }
        .animate-scanline { animation: scanline 8s linear infinite; }
        .animate-shimmerX { animation: shimmerX 4.2s linear infinite; }
        .animate-gridMove { animation: gridMove 8s linear infinite; }
        .glass {
          background: linear-gradient(180deg, rgba(10,16,32,.78), rgba(8,12,24,.95));
          backdrop-filter: blur(10px);
        }
      `}</style>

      <div className="fixed inset-0 pointer-events-none opacity-30 animate-gridMove bg-[linear-gradient(rgba(66,231,255,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,83,223,.04)_1px,transparent_1px)] bg-[size:56px_56px]" />
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_0%,rgba(66,231,255,.16),transparent_25%),radial-gradient(circle_at_80%_10%,rgba(155,93,255,.20),transparent_24%),linear-gradient(180deg,#020409_0%,#08111f_44%,#03060b_100%)]" />
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-cyan-300/10 to-transparent blur-3xl" />
        <div className="absolute -left-20 top-32 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl animate-pulseGlow" />
        <div className="absolute right-0 top-52 h-80 w-80 rounded-full bg-fuchsia-500/15 blur-3xl animate-pulseGlow" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-transparent via-cyan-300/10 to-transparent animate-scanline" />
      </div>

      <header className="sticky top-0 z-50 border-b border-cyan-400/10 bg-black/35 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-6">
          <a href="#home" className="group flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-full border border-cyan-300/50 bg-black shadow-[0_0_25px_rgba(66,231,255,.28)]">
              <img src="/mnt/data/a_dark_neon_cyberpunk_logo_emblem_scene_a_styliz.png" alt="Hidden Haven logo" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/10 to-fuchsia-500/10" />
            </div>
            <div>
              <div className="font-semibold uppercase tracking-[0.28em] text-white text-sm md:text-base">Hidden Haven</div>
              <div className="text-[10px] uppercase tracking-[0.32em] text-cyan-200/70 md:text-xs">D2R Account Rentals + P8 Suite</div>
            </div>
          </a>

          <nav className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full border border-transparent px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-400/20 hover:bg-cyan-400/5 hover:text-cyan-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={discordUrl}
            className="rounded-xl bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-400 px-4 py-2 text-sm font-bold uppercase tracking-[0.16em] text-slate-950 shadow-[0_10px_35px_rgba(46,247,176,.18)] transition hover:scale-[1.02]"
          >
            Join Discord
          </a>
        </div>
      </header>

      <main id="home" className="relative z-10">
        <section className="mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-16 md:px-6 lg:grid-cols-[1.08fr_.92fr] lg:pt-24">
          <div className="flex flex-col justify-center">
            <div className="mb-5 inline-flex w-fit rounded-full border border-cyan-400/20 bg-cyan-400/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200 shadow-[0_0_30px_rgba(66,231,255,.10)]">
              Own the stack. Run the service. Sell through Discord.
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.92] tracking-[-0.05em] text-white md:text-7xl xl:text-[5.8rem]">
              <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-sky-500 bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(66,231,255,.22)]">
                Build your own
              </span>
              <br />
              <span className="text-white">P8 empire</span>
              <span className="text-fuchsia-400">.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              <span className="font-semibold text-white">Hidden Haven</span> is not positioned like a simple launcher.
              The real offer is the <span className="font-semibold text-cyan-300">full ownership suite</span> — a premium
              D2R control system that helps buyers manage accounts, control queue flow, track customers, and operate
              their own Players 8 service under one polished brand.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={discordUrl}
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-400 px-6 py-4 text-sm font-black uppercase tracking-[0.18em] text-slate-950 shadow-[0_14px_40px_rgba(46,247,176,.22)] transition hover:scale-[1.02]"
              >
                <span className="absolute inset-y-0 left-0 w-24 bg-white/20 blur-xl animate-shimmerX" />
                Own the Suite
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-2xl border border-fuchsia-400/25 bg-fuchsia-500/8 px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:border-fuchsia-300/40 hover:bg-fuchsia-500/12 hover:shadow-[0_0_32px_rgba(255,83,223,.12)]"
              >
                Explore Features
              </a>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                ["Ownership first", "Lead with the full app and present rentals as the easier entry point."],
                ["Designed to convert", "Strong hierarchy, cleaner copy, and bolder neon contrast keep the value obvious."],
                ["Discord everywhere", "Support, sales, contact, and upsells all route back to Goober_OTF."],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="glass rounded-2xl border border-cyan-400/10 p-5 shadow-[0_18px_50px_rgba(0,0,0,.28)] transition duration-300 hover:-translate-y-1 hover:border-cyan-300/20 hover:shadow-[0_0_30px_rgba(66,231,255,.08)]"
                >
                  <div className="mb-2 text-sm font-semibold text-white">{title}</div>
                  <div className="text-sm leading-7 text-slate-300">{text}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-400/10 to-fuchsia-500/10 blur-2xl" />
            <div className="glass relative w-full overflow-hidden rounded-[2rem] border border-cyan-300/15 p-4 shadow-[0_24px_80px_rgba(0,0,0,.45)]">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(66,231,255,.08),transparent_42%,rgba(255,83,223,.08))]" />
              <div className="overflow-hidden rounded-[1.4rem] border border-fuchsia-400/15 bg-black/40">
                <img
                  src="/mnt/data/a_dramatic_neon_cyberpunk_banner_advertisement_sty.png"
                  alt="Hidden Haven hero banner"
                  className="h-full w-full object-cover transition duration-700 hover:scale-[1.03]"
                />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "Ownership-first messaging",
                  "Discord-driven sales",
                  "Premium neon theme",
                  "Rental upsell path",
                  "Stronger WOW factor",
                  "Feature-rich positioning",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-cyan-400/12 bg-white/[0.03] px-3 py-2 text-xs uppercase tracking-[0.18em] text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-8 md:px-6" id="services">
          <div className="mb-8 max-w-3xl">
            <div className="mb-3 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
              Service stack
            </div>
            <h2 className="text-3xl font-black tracking-[-0.04em] text-white md:text-5xl">
              Premium positioning with a real operator feel.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-300 md:text-lg">
              The site should make Hidden Haven feel like the control layer behind a real service operation. That is what
              gives the ownership offer more weight and makes the landing page feel premium instead of generic.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {features.map((feature, idx) => (
              <div
                key={feature.title}
                className={`group glass relative overflow-hidden rounded-[1.6rem] border p-6 transition duration-300 hover:-translate-y-1 ${
                  idx % 2 === 0 ? "border-cyan-400/12 hover:border-cyan-300/24" : "border-fuchsia-400/12 hover:border-fuchsia-300/24"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/[0.05] via-transparent to-fuchsia-500/[0.05] opacity-0 transition duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-4 grid h-14 w-14 place-items-center rounded-2xl border border-cyan-300/15 bg-gradient-to-br from-cyan-400/12 to-fuchsia-500/12 text-2xl shadow-[0_0_24px_rgba(66,231,255,.08)]">
                    {feature.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-white">{feature.title}</h3>
                  <p className="text-sm leading-7 text-slate-300">{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 md:px-6" id="pricing">
          <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
            <div className="glass rounded-[1.8rem] border border-cyan-400/12 p-7 shadow-[0_24px_80px_rgba(0,0,0,.34)]">
              <div className="mb-4 inline-flex rounded-full border border-fuchsia-400/20 bg-fuchsia-500/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-fuchsia-200">
                Pricing strategy
              </div>
              <h2 className="text-3xl font-black tracking-[-0.04em] text-white md:text-5xl">
                Use rentals as the front door.
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-300 md:text-lg">
                Rentals make the first sale easier. Ownership is the upsell that gives the buyer more control, more
                leverage, and stronger long-term value.
              </p>

              <div className="mt-6 space-y-3">
                {packages.map((pkg) => (
                  <div key={pkg.title} className="rounded-2xl border border-cyan-400/10 bg-white/[0.03] p-4">
                    <div className="mb-1 text-sm font-semibold uppercase tracking-[0.18em] text-white">{pkg.title}</div>
                    <div className="text-sm leading-7 text-slate-300">{pkg.text}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-yellow-300/20 bg-yellow-300/8 p-4 text-sm leading-7 text-yellow-100">
                Best upsell angle: “Love the rental flow? Own the full Hidden Haven suite and run the service yourself.”
              </div>
            </div>

            <div className="glass rounded-[1.8rem] border border-cyan-400/12 p-4 shadow-[0_24px_80px_rgba(0,0,0,.34)]">
              <div className="overflow-hidden rounded-[1.4rem] border border-cyan-400/15 bg-black/40">
                <img
                  src="/mnt/data/ChatGPT Image Apr 22, 2026, 09_34_10 PM.png"
                  alt="Hidden Haven rental pricing"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 md:px-6" id="faq">
          <div className="mb-8 max-w-3xl">
            <div className="mb-3 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
              FAQ
            </div>
            <h2 className="text-3xl font-black tracking-[-0.04em] text-white md:text-5xl">
              Fast answers. Less friction.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-300 md:text-lg">
              The FAQ should remove hesitation without slowing the funnel down. Every answer still points the buyer back
              to Discord and Goober_OTF.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {faqs.map((item, idx) => (
              <div
                key={item.q}
                className={`glass rounded-[1.6rem] border p-6 transition duration-300 hover:-translate-y-1 ${
                  idx === 1 ? "border-fuchsia-400/14" : "border-cyan-400/12"
                }`}
              >
                <h3 className="mb-3 text-lg font-bold text-white">{item.q}</h3>
                <p className="text-sm leading-7 text-slate-300">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 md:px-6" id="downloads">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="glass rounded-[1.8rem] border border-cyan-400/12 p-7">
              <div className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
                Ownership package
              </div>
              <h2 className="text-3xl font-black tracking-[-0.04em] text-white md:text-5xl">
                Buy the suite. Own the workflow.
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-300 md:text-lg">
                This page should support the premium offer, not flatten it into a raw file dump. Position ownership around
                control, flexibility, and a stronger long-term setup.
              </p>
            </div>
            <div className="grid gap-4">
              {[
                "Run your own P8 workflow",
                "Keep the operation under your brand",
                "Move beyond repeated rental spending",
                "Use Discord as the close and support hub",
              ].map((item, idx) => (
                <div
                  key={item}
                  className={`glass rounded-2xl border p-5 text-sm leading-7 text-slate-300 ${
                    idx % 2 ? "border-fuchsia-400/14" : "border-cyan-400/12"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 md:px-6">
          <div className="grid gap-5 md:grid-cols-3">
            {reviews.map((review, idx) => (
              <div
                key={review.name}
                className={`glass rounded-[1.6rem] border p-6 ${idx === 1 ? "border-fuchsia-400/14" : "border-cyan-400/12"}`}
              >
                <div className="mb-3 tracking-[0.18em] text-yellow-300">★★★★★</div>
                <p className="text-sm leading-7 text-slate-200">“{review.text}”</p>
                <div className="mt-4 text-xs uppercase tracking-[0.18em] text-slate-400">— {review.name} · Sample review</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-20 pt-8 md:px-6">
          <div className="relative overflow-hidden rounded-[2rem] border border-cyan-400/14 bg-[radial-gradient(circle_at_50%_0%,rgba(66,231,255,.14),transparent_32%),linear-gradient(180deg,rgba(10,16,32,.92),rgba(6,10,20,.98))] px-6 py-10 text-center shadow-[0_24px_90px_rgba(0,0,0,.4)] md:px-10 md:py-14">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(66,231,255,.06),transparent_40%,rgba(255,83,223,.07))]" />
            <div className="relative">
              <div className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
                Main contact
              </div>
              <h2 className="text-3xl font-black tracking-[-0.04em] text-white md:text-5xl">
                Talk to Goober_OTF.
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
                If you are ready to buy, compare packages, or ask what fits best, join the Discord and continue the
                conversation inside Hidden Haven.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href={discordUrl}
                  className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-400 px-6 py-4 text-sm font-black uppercase tracking-[0.18em] text-slate-950 shadow-[0_14px_40px_rgba(46,247,176,.22)] transition hover:scale-[1.02]"
                >
                  Join Hidden Haven
                </a>
                <a
                  href="#faq"
                  className="inline-flex items-center justify-center rounded-2xl border border-fuchsia-400/25 bg-fuchsia-500/8 px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:border-fuchsia-300/40 hover:bg-fuchsia-500/12"
                >
                  Read the FAQ
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
