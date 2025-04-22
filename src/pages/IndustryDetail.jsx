import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const industries = [
  {
    id: 'restaurants',
    title: 'Restaurants',
    description: 'Energieoptimierung für Restaurants und Gastronomiebetriebe',
    image: '/images/industries/restaurant.jpg',
    challenges: [
      'Hoher Energieverbrauch durch Küchengeräte',
      'Kühlung und Klimatisierung',
      'Beleuchtung und Lüftung',
      '24/7 Betriebsanforderungen'
    ],
    solutions: [
      'Echtzeit-Energiemonitoring',
      'Intelligente Kühlkettenüberwachung',
      'Automatisierte Beleuchtungssteuerung',
      'Predictive Maintenance'
    ],
    benefits: [
      'Reduzierung der Energiekosten um bis zu 30%',
      'Verbesserte Betriebseffizienz',
      'Proaktive Wartung und Instandhaltung',
      'Nachhaltige Betriebsführung'
    ]
  },
  // ... other industries data ...
];

export function IndustryDetail() {
  const { id } = useParams();
  const industry = industries.find(i => i.id === id);

  if (!industry) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl mb-8">Diese Branche wurde nicht gefunden.</p>
          <Link to="/industries" className="btn-primary">
            Zurück zu den Branchen
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#183956]/90 to-[#183956]/70" />
        <img
          src={industry.image}
          alt={industry.title}
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container-padding max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {industry.title}
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              {industry.description}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container-padding max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Challenges */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Herausforderungen</h2>
              <ul className="space-y-4">
                {industry.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-[#183956] rounded-full mt-2 mr-3"></span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Unsere Lösungen</h2>
              <ul className="space-y-4">
                {industry.solutions.map((solution, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                    <span>{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Benefits */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Ihre Vorteile</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industry.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-[#183956]/10 rounded-full flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-[#183956]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-600">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#183956] text-white py-16">
        <div className="container-padding max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Bereit für die Energiewende?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Kontaktieren Sie uns für eine kostenlose Beratung und erfahren Sie, wie wir Ihnen helfen können.
          </p>
          <Link
            to="/contact"
            className="btn-secondary bg-white text-[#183956] hover:bg-gray-100 inline-block"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </div>
  );
} 