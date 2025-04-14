import { useIntersectionObserver } from '../utils/useIntersectionObserver';

export function Technology() {
  useIntersectionObserver();

  const technologies = [
    {
      name: 'CUES',
      description: 'Cloud-basierte Energiemanagement-Plattform für Echtzeit-Monitoring und Analyse.',
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" 
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      )
    },
    {
      name: 'Eniscope Air',
      description: 'IoT-Sensoren für präzise Umgebungsüberwachung und Klimasteuerung.',
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" 
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      name: 'Eniscope EMS',
      description: 'Intelligentes Energiemanagementsystem für optimierte Verbrauchssteuerung.',
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" 
            d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  return (
    <section id="technology" className="section-alternate py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 fade-up">
          <h2 className="text-3xl font-semibold mb-4">Unsere Technologien</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Modernste Software und Hardware kombiniert für eines der effektivsten Energiemanagement- und Überwachungssysteme.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {technologies.map((tech, idx) => (
            <div 
              key={tech.name}
              className="card-hover shadow-soft bg-white rounded-xl p-8 fade-up"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="mb-6">
                {tech.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#183956] mb-3">{tech.name}</h3>
              <p className="text-gray-600">{tech.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center fade-up">
          <a
            href="#contact"
            className="btn-primary inline-flex items-center"
          >
            Technologie-Beratung anfragen
          </a>
        </div>
      </div>
    </section>
  );
} 