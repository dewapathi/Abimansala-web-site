import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with parallax effect */}
        <div className="absolute inset-0">
          <Image
            src="/images/IMG_5105.jpg"
            alt="Abhimansala Wedding Service"
            fill
            priority
            className="object-cover opacity-60"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>

        {/* Floating elements for depth */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-yellow-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-6 h-6 bg-yellow-300 rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute top-1/2 left-20 w-3 h-3 bg-yellow-200 rounded-full opacity-50 animate-ping"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="w-full max-w-sm mx-auto lg:mx-0">
                <Image
                  src="/images/IMG_5102.png"
                  alt="Abhimansala Wedding Service"
                  width={400}
                  height={200}
                  className="w-full h-auto"
                  priority
                />
              </div>

              <div className="space-y-6 text-center lg:text-left">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  Crafting{" "}
                  <span className="text-yellow-300 bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                    royal moments
                  </span>{" "}
                  for your forever.
                </h1>
                
                <p className="text-lg sm:text-xl text-gray-200 leading-relaxed max-w-2xl">
                  Experience timeless Sri Lankan elegance with Abhimansala Wedding Service. 
                  From royal groom outfits to complete wedding planning, we bring your 
                  dream celebration to life.
                </p>

                {/* Enhanced CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link
                    href="#contact"
                    className="px-8 py-4 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold text-lg hover:from-yellow-300 hover:to-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-yellow-500/25"
                  >
                    Book Your Royal Date
                  </Link>
                  <a
                    href="https://wa.me/94719358925"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 rounded-full border-2 border-yellow-400 text-yellow-300 font-semibold text-lg hover:bg-yellow-400/10 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <span>💬</span> WhatsApp Consultation
                  </a>
                </div>

                {/* Enhanced Contact Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                  <div className="text-center lg:text-left">
                    <p className="font-semibold text-yellow-300 mb-2">Call Us Directly</p>
                    <div className="space-y-1">
                      <p className="text-white hover:text-yellow-300 transition-colors cursor-pointer">071 935 8925</p>
                      <p className="text-white hover:text-yellow-300 transition-colors cursor-pointer">074 197 6569</p>
                    </div>
                  </div>
                  <div className="text-center lg:text-left">
                    <p className="font-semibold text-yellow-300 mb-2">Based In</p>
                    <p className="text-white">Gampaha, Sri Lanka</p>
                    <p className="text-gray-300 text-sm">Serving Nationwide</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="hidden lg:block">
              <div className="bg-black/40 backdrop-blur-sm rounded-3xl p-8 border border-yellow-400/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">50+</div>
                    <div className="text-gray-300">Weddings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">100%</div>
                    <div className="text-gray-300">Happy Couples</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">5★</div>
                    <div className="text-gray-300">Rated Service</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">24/7</div>
                    <div className="text-gray-300">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-black to-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Our <span className="text-yellow-300">Signature</span> Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              From the first "yes" to the final goodbye, we handle every royal detail 
              with precision and passion, ensuring your day is absolutely perfect.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Full Wedding Planning",
                desc: "End-to-end wedding coordination including concept design, vendor management, timeline creation, and on-day execution.",
                features: ["Concept Design", "Vendor Coordination", "Timeline Management", "Day-of Coordination"],
                icon: "👑"
              },
              {
                title: "Groom & Nilame Outfits",
                desc: "Authentic traditional royal Nilame attire and contemporary groom styling, custom-fitted for perfection.",
                features: ["Traditional Attire", "Modern Styling", "Custom Fitting", "Accessory Coordination"],
                icon: "🎩"
              },
              {
                title: "Homecoming Styling",
                desc: "Complete styling solutions for your homecoming celebration, ensuring elegance and seamless flow.",
                features: ["Outfit Coordination", "Venue Styling", "Event Flow", "Photography Setup"],
                icon: "🏡"
              },
            ].map((service, index) => (
              <div
                key={service.title}
                className="group relative bg-gradient-to-br from-neutral-900 to-black rounded-3xl border border-neutral-800 p-8 hover:border-yellow-400/50 transition-all duration-500 hover:transform hover:-translate-y-2"
              >
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-yellow-300 group-hover:text-yellow-200 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.desc}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-400">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 pt-6 border-t border-neutral-800">
                  <button className="text-yellow-300 hover:text-yellow-200 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                    Learn More 
                    <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Featured Weddings */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Stories We&apos;ve <span className="text-yellow-300">Celebrated</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A glimpse into the love stories styled and coordinated by Abhimansala — 
              each one unique, timeless and deeply personal.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                couple: "Sachini & Dilshan",
                date: "23 Oct 2025",
                type: "Kandyan Ceremony",
                image: "/images/IMG_5103.jpg"
              },
              {
                couple: "Dulmini & Ravindu",
                date: "23 Oct 2025",
                type: "Wedding & Reception",
                image: "/images/IMG_5104.jpg"
              },
              {
                couple: "Roshana & Navodi",
                date: "25 Aug 2025",
                type: "Classic Elegance",
                image: "/images/IMG_5107.jpg"
              },
            ].map((wedding, index) => (
              <div
                key={wedding.couple}
                className="group relative bg-neutral-950 rounded-3xl overflow-hidden border border-neutral-800 hover:border-yellow-400/50 transition-all duration-500 hover:transform hover:-translate-y-2"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={wedding.image}
                    alt={wedding.couple}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* Overlay content */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {wedding.couple}
                    </h3>
                    <p className="text-yellow-300 text-sm">{wedding.type}</p>
                    <p className="text-gray-300 text-sm">{wedding.date}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <button className="w-full py-3 px-6 border border-yellow-400 text-yellow-300 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300 font-semibold">
                    View Full Story
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <button className="px-8 py-4 border-2 border-yellow-400 text-yellow-300 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300 font-semibold text-lg">
              View All Wedding Stories
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-neutral-950 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                  Let&apos;s Plan Your <span className="text-yellow-300">Perfect Day</span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Share your wedding vision with us. We&apos;ll get back to you with 
                  availability, personalized package details, and a complimentary consultation.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-neutral-900/50 rounded-2xl border border-neutral-800 hover:border-yellow-400/30 transition-colors">
                  <div className="text-2xl">📞</div>
                  <div>
                    <h3 className="font-semibold text-yellow-300 mb-2">Phone & WhatsApp</h3>
                    <div className="space-y-1 text-gray-300">
                      <p className="hover:text-white transition-colors cursor-pointer">071 935 8925</p>
                      <p className="hover:text-white transition-colors cursor-pointer">074 197 6569</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-neutral-900/50 rounded-2xl border border-neutral-800 hover:border-yellow-400/30 transition-colors">
                  <div className="text-2xl">📍</div>
                  <div>
                    <h3 className="font-semibold text-yellow-300 mb-2">Location</h3>
                    <p className="text-gray-300">Gampaha, Sri Lanka</p>
                    <p className="text-gray-400 text-sm">Serving couples nationwide</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-neutral-900/50 rounded-2xl border border-neutral-800 hover:border-yellow-400/30 transition-colors">
                  <div className="text-2xl">🌐</div>
                  <div>
                    <h3 className="font-semibold text-yellow-300 mb-2">Social Media</h3>
                    <p className="text-gray-300">Facebook: Abhimansala Wedding Service</p>
                    <p className="text-gray-300">Instagram: @abhimansala_weddings</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-neutral-900/30 rounded-3xl p-8 border border-neutral-800">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
                      placeholder="07X XXX XXXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Wedding Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors resize-none"
                    placeholder="Tell us about your dream wedding..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold rounded-xl hover:from-yellow-300 hover:to-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-yellow-500/25"
                >
                  Send Your Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-neutral-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-32 mx-auto mb-6">
              <Image
                src="/images/IMG_5102.png"
                alt="Abhimansala Wedding Service"
                width={160}
                height={80}
                className="w-full h-auto"
              />
            </div>
            
            <p className="text-gray-400 mb-6">
              Crafting royal moments for your forever journey
            </p>
            
            <div className="flex justify-center space-x-6 mb-6">
              <a href="#" className="text-gray-400 hover:text-yellow-300 transition-colors">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-300 transition-colors">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-300 transition-colors">
                WhatsApp
              </a>
            </div>
            
            <p className="text-gray-500 text-sm">
              © 2024 Abhimansala Wedding Service. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}