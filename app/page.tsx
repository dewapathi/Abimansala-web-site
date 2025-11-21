import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          {/* Background hero image – replace with your best couple shot */}
          <Image
            src="/images/IMG_5105.jpg"
            alt="Abhimansala Wedding Service"
            fill
            priority
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-8 py-32 flex flex-col gap-10">
          {/* Logo + tagline */}
          <div className="w-full max-w-xs">
            <Image
              src="/images/IMG_5102.png"
              alt="Abhimansala Wedding Service"
              width={400}
              height={200}
              className="w-full h-auto"
            />
          </div>

          <div className="max-w-2xl space-y-6">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold leading-tight">
              Crafting<span className="text-yellow-300"> royal moments </span>
              for your forever.
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-200">
              Abhimansala Wedding Service brings timeless Sri Lankan elegance to
              your wedding day — from royal groom outfits to complete wedding
              planning and coordination.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="px-6 py-3 rounded-full bg-yellow-400 text-black font-semibold text-sm sm:text-base hover:bg-yellow-300 transition"
              >
                Book your date
              </Link>
              <a
                href="https://wa.me/94719358925"
                target="_blank"
                className="px-6 py-3 rounded-full border border-yellow-400 text-yellow-300 text-sm sm:text-base hover:bg-yellow-400/10 transition"
              >
                Chat on WhatsApp
              </a>
            </div>

            <div className="flex flex-wrap gap-6 text-xs sm:text-sm text-gray-300">
              <div>
                <p className="font-semibold text-white">Call us</p>
                <p>071 935 8925</p>
                <p>074 197 6569</p>
              </div>
              <div>
                <p className="font-semibold text-white">Based in</p>
                <p>Gampaha, Sri Lanka</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="bg-neutral-950 border-t border-neutral-800"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-16 sm:py-24">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold">
                Our Signature Services
              </h2>
              <p className="mt-2 text-sm sm:text-base text-gray-300 max-w-xl">
                From the first “yes” to the final goodbye, we handle every royal
                detail so you can simply enjoy your day.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Full Wedding Planning",
                desc: "Concept, vendors, timelines and on-day coordination tailored to your dream celebration.",
              },
              {
                title: "Groom & Nilame Outfits",
                desc: "Traditional royal Nilame attire and modern groom styling, perfectly fitted and coordinated.",
              },
              {
                title: "Homecoming Styling",
                desc: "Elegant looks, coordinated outfits and smooth flow for your homecoming celebration.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-neutral-800 bg-gradient-to-b from-neutral-900/60 to-black/80 p-6 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-yellow-300">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Weddings */}
      <section className="bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-16 sm:py-24 space-y-10">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl sm:text-3xl font-semibold">
              Stories we&apos;ve celebrated
            </h2>
            <p className="text-sm sm:text-base text-gray-300 max-w-2xl">
              A glimpse into the love stories styled and coordinated by
              Abhimansala — each one unique, timeless and deeply personal.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="relative rounded-3xl overflow-hidden border border-neutral-800">
              <Image
                src="/images/IMG_5103.jpg"
                alt="Sachini & Dilshan"
                width={600}
                height={800}
                className="w-full h-72 object-cover"
              />
              <div className="p-4 bg-neutral-950">
                <p className="text-sm font-semibold">Sachini &amp; Dilshan</p>
                <p className="text-xs text-gray-400">
                  Kandyan ceremony · 23 Oct 2025
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative rounded-3xl overflow-hidden border border-neutral-800">
              <Image
                src="/images/IMG_5104.jpg"
                alt="Dulmini & Ravindu"
                width={600}
                height={800}
                className="w-full h-72 object-cover"
              />
              <div className="p-4 bg-neutral-950">
                <p className="text-sm font-semibold">Dulmini &amp; Ravindu</p>
                <p className="text-xs text-gray-400">
                  Wedding &amp; reception · 23 Oct 2025
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative rounded-3xl overflow-hidden border border-neutral-800">
              <Image
                src="/images/IMG_5107.jpg"
                alt="Roshana & Navodi"
                width={600}
                height={800}
                className="w-full h-72 object-cover"
              />
              <div className="p-4 bg-neutral-950">
                <p className="text-sm font-semibold">Roshana &amp; Navodi</p>
                <p className="text-xs text-gray-400">
                  Classic elegance · 25 Aug 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="bg-gradient-to-b from-neutral-950 to-black border-t border-neutral-800"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-8 py-16 sm:py-24 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              Let&apos;s plan your day
            </h2>
            <p className="text-sm sm:text-base text-gray-300 mb-6">
              Tell us about your wedding date, venue and ideas. We&apos;ll get
              back to you with availability and package details.
            </p>

            <div className="space-y-3 text-sm sm:text-base">
              <div>
                <p className="font-semibold text-white">Phone</p>
                <p>071 935 8925</p>
                <p>074 197 6569</p>
              </div>
              <div>
                <p className="font-semibold text-white">WhatsApp</p>
                <p>+94 71 935 8925</p>
              </div>
              <div>
                <p className="font-semibold text-white">Social</p>
                <p>Facebook · Abhimansala Wedding Service</p>
              </div>
            </div>
          </div>

          <form className="space-y-4 bg-neutral-950/80 border border-neutral-800 rounded-3xl p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-gray-400 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-xl bg-black border border-neutral-700 px-3 py-2 text-sm focus:outline-none focus:border-yellow-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full rounded-xl bg-black border border-neutral-700 px-3 py-2 text-sm focus:outline-none focus:border-yellow-400"
                  placeholder="07X XXX XXXX"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-gray-400 mb-1">
                  Wedding Date
                </label>
                <input
                  type="date"
                  className="w-full rounded-xl bg-black border border-neutral-700 px-3 py-2 text-sm focus:outline-none focus:border-yellow-400"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-1">
                  Venue / City
                </label>
                <input
                  type="text"
                  className="w-full rounded-xl bg-black border border-neutral-700 px-3 py-2 text-sm focus:outline-none focus:border-yellow-400"
                  placeholder="Hotel / city"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-gray-400 mb-1">
                Tell us about your dream day
              </label>
              <textarea
                rows={4}
                className="w-full rounded-xl bg-black border border-neutral-700 px-3 py-2 text-sm focus:outline-none focus:border-yellow-400"
                placeholder="Share your ideas, theme, and services you need..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-yellow-400 text-black font-semibold text-sm sm:text-base hover:bg-yellow-300 transition"
            >
              Send enquiry
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}