import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export function Industries() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  }, []);

  const industries = [
    {
      id: 'restaurants',
      title: 'Restaurants & Gastronomie',
      description: 'Optimierte Energielösungen für Küchen, Kühlung und Klimatisierung.',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=80',
      benefits: ['Reduzierte Betriebskosten', 'Optimierte Kühlanlagen', 'Automatisierte Steuerung']
    },
    {
      id: 'retail',
      title: 'Lebensmitteleinzelhandel',
      description: 'Intelligentes Energiemanagement für Filialbetriebe und Supermärkte.',
      image: 'https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=800&auto=format&fit=crop&q=80',
      benefits: ['24/7 Monitoring', 'Predictive Maintenance', 'Temperaturüberwachung']
    },
    {
      id: 'hotels',
      title: 'Hotels & Hospitality',
      description: 'Ganzheitliche Energielösungen für maximalen Gästekomfort.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=80',
      benefits: ['Klimasteuerung', 'Beleuchtungsautomation', 'Wartungsoptimierung']
    },
    {
      id: 'manufacturing',
      title: 'Produktion & Industrie',
      description: 'Skalierbare Systeme für industrielle Anlagen und Produktionsstätten.',
      image: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?w=800&auto=format&fit=crop&q=80',
      benefits: ['Prozessoptimierung', 'Lastspitzenmanagement', 'Energiedatenanalyse']
    },
    {
      id: 'education',
      title: 'Bildungseinrichtungen',
      description: 'Energieeffiziente Lösungen für Schulen, Universitäten und Verwaltungsgebäude.',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=80',
      benefits: ['Klimatisierung', 'Beleuchtungssysteme', 'Energieverbrauchsanalyse']
    },
    {
      id: 'multisite',
      title: 'Multi-Site Management',
      description: 'Zentrale Steuerung und Überwachung von mehreren Standorten.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80',
      benefits: ['Standortübergreifendes Monitoring', 'Zentrale Steuerung', 'Einheitliche Berichte']
    }
  ];

  return (
    <section id="industries" className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Unsere Branchenlösungen</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entdecken Sie, wie wir spezifische Energiemanagement-Lösungen für verschiedene Branchen entwickeln.
            Über 500 erfolgreiche Installationen in ganz Europa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry) => (
            <Link
              key={industry.id}
              to={`/ecosolve-boller.github.io/industries/${industry.id}`}
              className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{industry.title}</h2>
                <p className="text-gray-600 mb-4">{industry.description}</p>
                <ul className="space-y-2">
                  {industry.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-[#183956] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Bereit für die Energiewende?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Kontaktieren Sie uns für eine kostenlose Beratung und erfahren Sie, wie wir Ihnen helfen können.
          </p>
          <Link
            to="/ecosolve-boller.github.io/contact"
            className="inline-block bg-white text-[#183956] px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </section>
  );
} 