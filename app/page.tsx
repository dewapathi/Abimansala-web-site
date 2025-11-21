import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#story", label: "Our Story" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      {/* Top gradient background */}
      <div className="fixed inset-0 -z-20 bg-gradient-to-b from-black via-neutral-950 to-black" />
      <div className="fixed inset-0 -z-10 opacity-40 bg-[radial-gradient(circle_at_top,_#eab30822,_transparent_60%),radial-gradient(circle_at_bottom,_#a855f722,_transparent_60%)]" />

      {/* Navbar */}
      <header className="sticky top-0 z-30 border-b border-neutral-900/80 bg-black/75 backdrop-blur-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-8 py-3 sm:py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-10 w-10 rounded-full overflow-hidden border border-yellow-400/60">
              <Image
                src="/images/IMG_5105.jpg"
                alt="Abhimansala Wedding Service"
                fill
                className="object-cover"
              />
            </div>
            <div className="leading-tight">
              <p className="font-semibold text-sm sm:text-base">
                Abhimansala
              </p>
              <p className="text-[11px] sm:text-xs text-gray-400">
                Wedding Service · Sri Lanka
              </p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-yellow-300 transition"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/94719358925"
              target="_blank"
              className="hidden sm:inline-flex px-4 py-2 text-xs sm:text-sm rounded-full border border-yellow-400 text-yellow-300 hover:bg-yellow-400/10 transition"
            >
              WhatsApp
            </a>
            <Link
              href="#contact"
              className="px-4 sm:px-5 py-2 text-xs sm:text-sm rounded-full bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition"
            >
              Book date
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/IMG_5105.jpg"
            alt="Abhimansala Wedding Service"
            fill
            priority
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
          <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-black/70 to-transparent" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-20 sm:py-24 lg:py-32 grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-12 items-center">
          {/* Left */}
          <div className="space-y-8">
            <p className="inline-flex items-center gap-2 text-xs sm:text-sm px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-200 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
              Royal Kandyan styling & full wedding planning
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              Crafting
              <span className="text-yellow-300"> royal moments </span>
              for your forever.
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-xl">
              Abhimansala Wedding Service blends timeless Sri Lankan tradition
              with luxurious, modern elegance — taking care of every detail so
              you can simply live the moment.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              <Link
                href="#contact"
                className="px-6 py-3 rounded-full bg-yellow-400 text-black font-semibold text-sm sm:text-base hover:bg-yellow-300 transition"
              >
                Reserve your date
              </Link>
              <a
                href="https://wa.me/94719358925"
                target="_blank"
                className="px-6 py-3 rounded-full border border-yellow-400/70 text-yellow-300 text-sm sm:text-base hover:bg-yellow-400/10 transition"
              >
                Chat on WhatsApp
              </a>
            </div>

            <div className="flex flex-wrap gap-6 text-xs sm:text-sm text-gray-300">
              <div>
                <p className="font-semibold text-white text-sm">
                  Personal wedding support
                </p>
                <p>From first idea to final dance.</p>
              </div>
              <div>
                <p className="font-semibold text-white text-sm">Based in</p>
                <p>Gampaha, Sri Lanka · Island-wide service</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 text-xs sm:text-sm text-gray-400">
              <div>
                <p className="font-semibold text-white text-sm">Call us</p>
                <p>071 935 8925</p>
                <p>074 197 6569</p>
              </div>
              <div>
                <p className="font-semibold text-white text-sm">WhatsApp</p>
                <p>+94 71 935 8925</p>
              </div>
            </div>
          </div>

          {/* Right – Highlight card */}
          <div className="space-y-6">
            <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg overflow-hidden">
              <div className="relative h-64 sm:h-72">
                <Image
                  src="/images/IMG_5103.jpg"
                  alt="Featured couple"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs sm:text-sm">
                  <div>
                    <p className="font-semibold">Sachini &amp; Dilshan</p>
                    <p className="text-gray-300">
                      Kandyan ceremony · Oct 2025
                    </p>
                  </div>
                  <p className="px-3 py-1 rounded-full bg-black/60 border border-white/15 text-[11px] sm:text-xs">
                    Styled by Abhimansala
                  </p>
                </div>
              </div>

              <div className="p-4 sm:p-6 space-y-3 text-xs sm:text-sm">
                <p className="text-gray-200">
                  “From the first phone call to the last moment on stage,
                  everything felt royal, calm and perfectly coordinated.”
                </p>
                <p className="text-[11px] uppercase tracking-wide text-gray-400">
                  Over 100+ couples guided with care.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 text-center text-xs sm:text-sm">
              <div className="rounded-2xl border border-white/10 bg-white/5 py-3 sm:py-4">
                <p className="text-lg sm:text-xl font-semibold text-yellow-300">
                  100+
                </p>
                <p className="text-[11px] sm:text-xs text-gray-300">
                  Weddings styled
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 py-3 sm:py-4">
                <p className="text-lg sm:text-xl font-semibold text-yellow-300">
                  5★
                </p>
                <p className="text-[11px] sm:text-xs text-gray-300">
                  Couple feedback
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 py-3 sm:py-4">
                <p className="text-lg sm:text-xl font-semibold text-yellow-300">
                  Since
                </p>
                <p className="text-[11px] sm:text-xs text-gray-300">
                  20XX (add year)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="bg-neutral-950/70 border-y border-neutral-900"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-16 sm:py-20 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold">
                Our Signature Services
              </h2>
              <p className="mt-2 text-sm sm:text-base text-gray-300 max-w-xl">
                From the first “yes” to the final goodbye, we design, style and
                coordinate your celebration with royal care.
              </p>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 max-w-sm">
              Choose full planning or only styling — we can tailor every package
              to your venue, budget and traditions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Full Wedding Planning",
                subtitle: "Concept · Vendors · On-day flow",
                desc: "End-to-end planning from ideas, moodboards and budgeting to vendor coordination and on-day management.",
              },
              {
                title: "Groom & Nilame Outfits",
                subtitle: "Royal Kandyan · Modern Groom",
                desc: "Perfectly fitted Nilame and groom attire, accessories and full look coordination for photos and stage.",
              },
              {
                title: "Homecoming Styling",
                subtitle: "Elegant second-day look",
                desc: "Coordinated outfits, subtle decor and smooth programme flow for a warm, stylish homecoming.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="relative rounded-3xl border border-neutral-800/80 bg-gradient-to-b from-neutral-900/70 to-black/90 p-6 sm:p-7 flex flex-col gap-4 group hover:border-yellow-300/70 transition"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none bg-[radial-gradient(circle_at_top,_#facc1530,_transparent_60%)] transition" />
                <div className="relative space-y-2">
                  <h3 className="text-lg sm:text-xl font-semibold text-yellow-300">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400">
                    {item.subtitle}
                  </p>
                  <p className="text-sm sm:text-base text-gray-200">
                    {item.desc}
                  </p>
                </div>
                <div className="relative mt-2 text-xs sm:text-sm text-gray-400 flex items-center justify-between">
                  <p>Custom packages available</p>
                  <Link
                    href="#contact"
                    className="text-yellow-300 hover:text-yellow-200 underline underline-offset-4"
                  >
                    Ask for details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery / Featured Weddings */}
      <section id="gallery" className="bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-16 sm:py-20 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold">
                Stories we&apos;ve celebrated
              </h2>
              <p className="text-sm sm:text-base text-gray-300 max-w-2xl mt-2">
                A glimpse into the love stories styled and coordinated by
                Abhimansala — each one unique, timeless and deeply personal.
              </p>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 max-w-sm">
              Swipe through our social pages or visit us in person to see full
              albums, fittings and behind-the-scenes moments.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                image: "/images/IMG_5103.jpg",
                couple: "Sachini & Dilshan",
                detail: "Kandyan ceremony · 23 Oct 2025",
              },
              {
                image: "/images/IMG_5104.jpg",
                couple: "Dulmini & Ravindu",
                detail: "Wedding & reception · 23 Oct 2025",
              },
              {
                image: "/images/IMG_5107.jpg",
                couple: "Roshana & Navodi",
                detail: "Classic elegance · 25 Aug 2025",
              },
            ].map((card) => (
              <div
                key={card.couple}
                className="relative rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-950 group"
              >
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.couple}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                </div>
                <div className="p-4 sm:p-5 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm sm:text-base font-semibold">
                      {card.couple}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-400">
                      {card.detail}
                    </p>
                  </div>
                  <p className="hidden sm:inline-flex text-[11px] px-3 py-1 rounded-full border border-white/15 text-gray-300">
                    View album in studio
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story / Why us */}
      <section id="story" className="bg-neutral-950 border-y border-neutral-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-16 sm:py-20 grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-10 lg:gap-16 items-center">
          <div className="space-y-5">
            <h2 className="text-2xl sm:text-3xl font-semibold">
              The heart behind Abhimansala
            </h2>
            <p className="text-sm sm:text-base text-gray-300">
              Abhimansala Wedding Service was born from a simple wish: to let
              couples feel calm, royal and truly themselves on the most
              important day of their lives.
            </p>
            <p className="text-sm sm:text-base text-gray-300">
              From Kandyan Nilame outfits to detailed timelines, we walk with
              you through every decision. We listen to your culture, your
              family, your story — and then build a celebration that feels
              naturally “you”.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="font-semibold text-yellow-300 mb-1">
                  Detail-obsessed
                </p>
                <p className="text-gray-300">
                  Seating plans, entrances, timing, photos — we quietly manage
                  it all in the background.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="font-semibold text-yellow-300 mb-1">
                  Family-friendly
                </p>
                <p className="text-gray-300">
                  We work closely with parents, relatives and vendors so
                  everyone feels respected and at ease.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6 space-y-4">
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-gray-400">
                Couples say
              </p>
              <p className="text-sm sm:text-base text-gray-100">
                “We didn&apos;t have to worry about anything. The outfits, the
                timing, the stage — everything looked and felt royal. Our
                families still talk about how smooth the day was.”
              </p>
              <p className="text-xs text-gray-400">
                – Add couple name · Location
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3 text-center text-xs sm:text-sm">
              <div className="rounded-2xl border border-white/10 bg-white/5 py-3 sm:py-4 px-2">
                <p className="font-semibold text-yellow-300">Calm</p>
                <p className="text-[11px] sm:text-xs text-gray-300">
                  You focus on each other. We handle the rest.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 py-3 sm:py-4 px-2">
                <p className="font-semibold text-yellow-300">Cultural</p>
                <p className="text-[11px] sm:text-xs text-gray-300">
                  Deep respect for Sri Lankan traditions.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 py-3 sm:py-4 px-2">
                <p className="font-semibold text-yellow-300">Beautiful</p>
                <p className="text-[11px] sm:text-xs text-gray-300">
                  Every moment ready for the camera.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-16 sm:py-20 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold">
                How we work with you
              </h2>
              <p className="text-sm sm:text-base text-gray-300 max-w-xl mt-2">
                Clear, simple steps — so planning feels exciting, not
                overwhelming.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-5 text-xs sm:text-sm">
            {[
              {
                step: "01",
                title: "First conversation",
                desc: "You share your date, venue, style and dreams. We listen and guide.",
              },
              {
                step: "02",
                title: "Custom proposal",
                desc: "We design a package that fits your budget, traditions and priorities.",
              },
              {
                step: "03",
                title: "Planning & fittings",
                desc: "Outfits, vendors, timelines, rehearsals — we handle the details with you.",
              },
              {
                step: "04",
                title: "The wedding day",
                desc: "We quietly run the show so every moment feels calm, royal and unforgettable.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-3xl border border-neutral-800 bg-neutral-950/70 p-5 flex flex-col gap-3"
              >
                <p className="text-[11px] tracking-[0.25em] text-gray-500 uppercase">
                  Step {item.step}
                </p>
                <p className="font-semibold text-sm sm:text-base">
                  {item.title}
                </p>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="bg-gradient-to-b from-neutral-950 to-black border-t border-neutral-900"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-16 sm:py-20 grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-10 lg:gap-16">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-semibold">
              Let&apos;s plan your day
            </h2>
            <p className="text-sm sm:text-base text-gray-300">
              Share your wedding date, venue and ideas. We&apos;ll respond with
              availability, package suggestions and the next steps.
            </p>

            <div className="space-y-4 text-sm sm:text-base">
              <div>
                <p className="font-semibold text-white">Phone</p>
                <p className="text-gray-200">071 935 8925</p>
                <p className="text-gray-200">074 197 6569</p>
              </div>
              <div>
                <p className="font-semibold text-white">WhatsApp</p>
                <p className="text-gray-200">+94 71 935 8925</p>
              </div>
              <div>
                <p className="font-semibold text-white">Social</p>
                <p className="text-gray-300">
                  Facebook · Abhimansala Wedding Service
                </p>
              </div>
              <div>
                <p className="font-semibold text-white">Based in</p>
                <p className="text-gray-300">
                  Gampaha, Sri Lanka · Available island-wide
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 text-xs sm:text-sm">
              <a
                href="tel:+94719358925"
                className="px-4 py-2 rounded-full border border-white/15 hover:bg-white/10 transition"
              >
                Call now
              </a>
              <a
                href="https://wa.me/94719358925"
                target="_blank"
                className="px-4 py-2 rounded-full border border-green-500/70 text-green-400 hover:bg-green-500/10 transition"
              >
                WhatsApp message
              </a>
            </div>
          </div>

          {/* Simple enquiry form (non-functional UI) */}
          {/* <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg p-5 sm:p-6 space-y-4">
            <p className="text-sm sm:text-base font-semibold">
              Quick enquiry form
            </p>
            <div className="grid gap-3 text-xs sm:text-sm">
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-gray-300">Your name</label>
                  <input
                    className="w-full rounded-xl bg-black/60 border border-white/15 px-3 py-2 text-xs sm:text-sm outline-none focus:border-yellow-300"
                    placeholder="Bride / Groom name"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-gray-300">Phone / WhatsApp</label>
                  <input
                    className="w-full rounded-xl bg-black/60 border border-white/15 px-3 py-2 text-xs sm:text-sm outline-none focus:border-yellow-300"
                    placeholder="+94..."
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-gray-300">Wedding date</label>
                <input
                  type="date"
                  className="w-full rounded-xl bg-black/60 border border-white/15 px-3 py-2 text-xs sm:text-sm outline-none focus:border-yellow-300"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-gray-300">Venue / Location</label>
                <input
                  className="w-full rounded-xl bg-black/60 border border-white/15 px-3 py-2 text-xs sm:text-sm outline-none focus:border-yellow-300"
                  placeholder="Hotel / City"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-gray-300">
                  What are you looking for?
                </label>
                <textarea
                  rows={4}
                  className="w-full resize-none rounded-xl bg-black/60 border border-white/15 px-3 py-2 text-xs sm:text-sm outline-none focus:border-yellow-300"
                  placeholder="Full planning, Nilame outfit, homecoming styling, etc."
                />
              </div>
              <button className="mt-1 w-full rounded-full bg-yellow-400 text-black font-semibold py-2.5 text-sm sm:text-base hover:bg-yellow-300 transition">
                Send enquiry
              </button>
              <p className="text-[11px] text-gray-400">
                We usually respond within 24 hours on WhatsApp or by phone.
              </p>
            </div>
          </div> */}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-900 bg-black py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Abhimansala Wedding Service.</p>
          <p>Designed &amp; developed with love in Sri Lanka.</p>
        </div>
      </footer>

      {/* Floating WhatsApp button (mobile-friendly) */}
      <a
        href="https://wa.me/94719358925"
        target="_blank"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 inline-flex items-center gap-2 px-3 py-2 rounded-full bg-green-500 text-white text-xs sm:text-sm shadow-lg shadow-green-500/30 hover:bg-green-400 transition"
      >
        <span className="h-2 w-2 rounded-full bg-white" />
        <span>Chat on WhatsApp</span>
      </a>
    </main>
  );
}
