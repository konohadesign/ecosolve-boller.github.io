export default function ServiceCards() {
    const services = [
      { 
        title: 'Restaurants & Gastronomie',
        description: 'Optimierte Energielösungen für Küchen, Kühlung und Klimatisierung.',
        benefits: ['Reduzierte Betriebskosten', 'Optimierte Kühlanlagen', 'Automatisierte Steuerung'],
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=80'
      },
      { 
        title: 'Lebensmitteleinzelhandel',
        description: 'Intelligentes Energiemanagement für Filialbetriebe und Supermärkte.',
        benefits: ['24/7 Monitoring', 'Predictive Maintenance', 'Temperaturüberwachung'],
        image: 'https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=800&auto=format&fit=crop&q=80'
      },
      { 
        title: 'Hotels & Hospitality',
        description: 'Ganzheitliche Energielösungen für maximalen Gästekomfort.',
        benefits: ['Klimasteuerung', 'Beleuchtungsautomation', 'Wartungsoptimierung'],
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=80'
      },
      { 
        title: 'Produktion & Industrie',
        description: 'Skalierbare Systeme für industrielle Anlagen und Produktionsstätten.',
        benefits: ['Prozessoptimierung', 'Lastspitzenmanagement', 'Energiedatenanalyse'],
        image: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?w=800&auto=format&fit=crop&q=80'
      }
    ];
  
    return (
      <section id="services" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">Unsere Branchenlösungen</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Maßgeschneiderte Energiemanagement-Lösungen für Ihre spezifischen Anforderungen.
              Über 500 erfolgreiche Installationen in ganz Europa.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition group">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2 text-[#183956]">{service.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, bidx) => (
                      <li key={bidx} className="text-sm text-gray-600 flex items-center">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className="inline-flex items-center text-green-600 font-medium hover:text-green-700 mt-4 text-sm">
                    Mehr erfahren
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }