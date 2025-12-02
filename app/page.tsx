"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Leeftijd from "./components/Leeftijd";
import ContactForm from "./components/Contactform";

export default function GymSite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

const scrollToSection = (id: string) => {
  setMobileMenuOpen(false); // sluit eerst het menu
  setTimeout(() => { // kleine vertraging zodat menu weg is
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = window.innerWidth < 768 ? 88 : 64; // mobiel vs desktop
      const y = element.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, 50); 
};



  const sections = ["home", "over", "aanbod", "openingsuren", "contact"];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header/Nav */}
      <header className="sticky top-0 z-50 bg-black">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-4xl font-black tracking-tighter text-white">
            ROAR.
          </h1>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8">
  {sections.map((section) => (
    <button
      key={section}
      onClick={() => scrollToSection(section)}
      className="relative text-sm font-bold tracking-wide text-gray-400 group"
    >
      {section.toUpperCase()}
      {/* Underline */}
      <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full group-hover:-translate-x-1/2"></span>
    </button>
  ))}
</nav>


          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-yellow-600"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden border-t-4 border-yellow-400 bg-black px-4 py-4 flex flex-col gap-4">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-sm font-bold tracking-wide hover:text-yellow-400 hover:underline underline-offset-4  transition text-left"
              >
                {section.toUpperCase()}
              </button>
            ))}
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="scroll-mt-14 relative min-h-screen bg-black flex items-center justify-center border-b-8 border-gray-600 overflow-hidden px-4"
      >
        {/* Achtergrond decoratie */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-[5%] left-[5%] w-36 h-36 sm:w-52 sm:h-52 md:w-64 md:h-64 border-4 border-yellow-400 rotate-45"></div>
          <div className="absolute bottom-[5%] right-[5%] w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 border-4 border-yellow-400"></div>
        </div>

        {/* Centrum content */}
        <div className="flex flex-col items-center text-center z-10 max-w-3xl">
          <img
            src="./logoroar.png"
            alt="Roar logo"
            className="w-full max-w-[420px] mb-10"
          />
          <p className="text-lg sm:text-2xl md:text-3xl font-bold mb-8 tracking-wide">
            ROAR NOW, MEOW LATER
          </p>
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-yellow-400 text-black px-8 py-3 font-black text-lg tracking-wider hover:bg-white transition"
          >
            START NOW
          </button>
        </div>
      </section>

      {/* Over Section */}
      <section id="over" className="scroll-mt-14 py-20 bg-black border-b-8 border-gray-800 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl sm:text-5xl font-black tracking-tighter mb-12 text-yellow-400 text-center sm:text-left">
            OVER
          </h3>

          <div className="flex flex-col md:flex-row items-start gap-12">
            {/* Linker kolom */}
            <div className="md:w-1/2 space-y-6 text-lg leading-relaxed font-coolvetica">
              <p>Mijn naam is Stijn Dankers en ik ben {Leeftijd()} oud.</p>
              <p>
                Al sinds mijn 13de ben ik gepassioneerd door fitness en een gezonde
                levensstijl. Hierdoor ben ik mezelf door de jaren heen verder gaan
                verdiepen in deze aspecten.
              </p>
              <p>
                Ikzelf, Stijn Dankers, vind dat fitness en gezonde voeding niet
                alleen een impact heeft op mijn lichaam, maar ook mentaal. Het is
                altijd al mijn grote droom geweest om mijn passie en kennis bij te
                brengen aan anderen zodat ze de beste versie van zichzelf kunnen
                bereiken zowel fysiek als mentaal.
              </p>

              <div className="mt-6 w-full max-w-sm mx-auto md:mx-0">
                <img
                  src="/dumbell.png"
                  alt="dumbells"
                  className="w-full filter grayscale"
                />
              </div>
            </div>

            {/* Rechter kolom */}
            <div className="md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
              <img
                src="/meetstijn.png"
                alt="Stijn Dankers"
                className="rounded-lg shadow-lg w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Aanbod Section */}
      <section id="aanbod" className="scroll-mt-14 py-20 bg-black border-b-8 border-gray-800 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl sm:text-5xl font-black tracking-tighter mb-12 text-yellow-400 text-center sm:text-left">
            AANBOD
          </h3>

          <h4 className="text-2xl sm:text-3xl font-black mb-6 font-coolvetica">ABONNEMENTEN</h4>
          <div className="grid gap-6 md:grid-cols-2 mb-12 font-coolvetica">
            {[
              { name: "1 JAAR", price: "€XXX" },
              { name: "6 MAANDEN", price: "€XXX" },
              { name: "3 MAANDEN", price: "€XXX" },
              { name: "1 MAAND", price: "€XXX" },
              { name: "10-BEURTENKAART", price: "€XXX", colSpan: 2 },
            ].map((plan, idx) => (
              <div
                key={idx}
                className={`border-4 border-gray-800 p-6 ${plan.colSpan ? "md:col-span-2" : ""}`}
              >
                <div className="flex justify-between">
                  <p className="font-bold text-xl">{plan.name}</p>
                  <p className="text-xl font-bold text-yellow-400">{plan.price}</p>
                </div>
              </div>
            ))}
          </div>

          <h4 className="text-2xl sm:text-3xl font-black mb-6">PERSONAL COACHING</h4>
          <div className="grid gap-6 md:grid-cols-2 font-coolvetica">
            {[
              { name: "20 LESSEN", price: "€XXX" },
              { name: "10 LESSEN", price: "€XXX" },
              { name: "5 LESSEN", price: "€XXX" },
              { name: "1 LES", price: "€XXX" },
            ].map((plan, idx) => (
              <div key={idx} className="border-4 border-gray-800 p-6">
                <div className="flex justify-between">
                  <p className="font-bold text-xl">{plan.name}</p>
                  <p className="text-xl font-bold text-yellow-400">{plan.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Openingsuren Section */}
      <section id="openingsuren" className="scroll-mt-14 py-20 bg-black border-b-8 border-gray-800 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl sm:text-5xl font-black tracking-tighter mb-12 text-yellow-400 text-center sm:text-left">
            OPENINGSUREN
          </h3>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="border-4 border-gray-800 p-6">
              <h4 className="text-2xl font-black mb-6">WEEKDAGEN</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-coolvetica">MAANDAG - VRIJDAG</span>
                  <span className="font-coolvetica">7U - 23U</span>
                </div>
              </div>
            </div>
            <div className="border-4 border-gray-800 p-6">
              <h4 className="text-2xl font-black mb-6">WEEKENDS</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-bold font-coolvetica">ZATERDAG</span>
                  <span className="font-coolvetica">7U - 18U</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold font-coolvetica">ZONDAG</span>
                  <span className="font-coolvetica">7U - 18U</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gray-900 border-l-4 border-yellow-400 font-coolvetica">
            <p className="text-sm font-bold tracking-wider text-yellow-400">ABONNEMENTEN</p>
            <p className="mt-2">
              Leden kunnen de faciliteit van ROAR. 24/7 toetreden mits toestemming van de fitnesseigenaar.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-14 py-20 bg-black border-b-8 border-yellow-400 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl sm:text-5xl font-black tracking-tighter mb-12 text-yellow-400 text-center sm:text-left">
            CONTACTEER ONS
          </h3>
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-8">
              <div>
                <p className="font-bold text-yellow-400 mb-2">ADRES</p>
                <p className="text-lg font-coolvetica">
                  Nijverheidslaan 8T<br />
                  3200 Aarschot<br />
                  België
                </p>
              </div>
              <div>
                <p className="font-bold text-yellow-400 mb-2">TELEFOON</p>
                <p className="text-lg font-coolvetica">
                  <a href="tel:+32486847377" className="hover:text-yellow-400 transition">
                    +32 486 84 73 77
                  </a>
                </p>
              </div>
              <div>
                <p className="font-bold text-yellow-400 mb-2">EMAIL</p>
                <p className="text-lg font-coolvetica">
                  <a href="mailto:info@roarfitness.com" className="hover:text-yellow-400 transition">
                    info@roarfitness.com
                  </a>
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="w-full h-64 md:h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2511.449656460599!2d4.820487317443858!3d50.9893624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c143d5451192d3%3A0x3ba9309939e6547c!2sRoar.!5e0!3m2!1sen!2sbe!4v1764675116020!5m2!1sen!2sbe"
                  className="w-full h-full border-2 border-yellow-400"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t-4 border-gray-600 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-bold tracking-wider mb-2">ROAR.</p>
          <p className="text-sm text-gray-500">© 2024-{new Date().getFullYear()}. ROAR NOW, MEOW LATER</p>
        </div>
      </footer>
    </div>
  );
}
