export default function Hero() {
    return (
      <section 
        className="relative py-20 lg:py-32 bg-[url('/images/background_gradient.png')] bg-cover bg-center"
      >
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-7xl mx-auto px-6">
          <div>
            <div className="inline-flex items-center bg-green-50/80 backdrop-blur-sm rounded-full px-4 py-2 text-green-700 text-sm font-medium mb-6">
              <span className="mr-2">✓</span>
              Über 500 Standorte in Europa vertrauen uns
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#183956] mb-6">
              Nachhaltige Energielösungen
              <br className="hidden md:block" />
              für Unternehmen jeder Größe
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-6">
              Reduzieren Sie Ihre Energiekosten mit intelligenter, skalierbarer Technologie. Durchschnittlich <span className="font-semibold text-green-700">11.52% Einsparung</span> durch unsere Lösungen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="btn-primary inline-flex items-center justify-center"
              >
                Jetzt beraten lassen
              </a>
              <a
                href="#services"
                className="btn-secondary inline-flex items-center justify-center"
              >
                Lösungen entdecken
              </a>
            </div>
          </div>
  
          <div className="relative">
            <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80"
                alt="Energieüberwachungssystem in einem modernen Gebäude"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg shadow-xl p-4 flex items-start gap-3">
              <div className="p-2 bg-green-50 rounded-lg">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">2.7M kWh eingespart</p>
                <p className="text-xs text-gray-500">864 Tonnen CO₂ reduziert</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  