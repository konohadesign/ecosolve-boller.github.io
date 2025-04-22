export function CaseStudies() {
  const metrics = [
    { label: 'kWh eingespart', value: '2.700.000', icon: '⚡' },
    { label: 'CO₂ reduziert', value: '864 Tonnen', icon: '🌱' },
    { label: 'Durchschnittliche Einsparung', value: '11.52%', icon: '💰' },
  ];

  return (
    <section id="case-studies" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center bg-blue-50 rounded-full px-4 py-2 text-blue-700 text-sm font-medium mb-6">
              <span className="mr-2">📊</span>
              Erfolgsgeschichte
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#183956] mb-4">
              7-Eleven spart Energie in ganz Dänemark
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              "Mit dem Eniscope-Energiemanagementsystem konnten wir in über 120 Filialen signifikante Einsparungen erzielen. Die Implementierung war reibungslos und die Ergebnisse sprechen für sich."
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              {metrics.map((metric, idx) => (
                <div key={idx} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <span className="text-2xl mb-2 block">{metric.icon}</span>
                  <div className="font-semibold text-xl text-[#183956]">{metric.value}</div>
                  <div className="text-sm text-gray-600">{metric.label}</div>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <img 
                src="/ecosolve-boller.github.io/images/josh-chiodo-F0hD5KVznLQ-unsplash.jpg" 
                alt="7-Eleven Store" 
                className="h-8 w-auto"
              />
              <div>
                <p className="text-sm text-gray-600 italic">7-Eleven Dänemark</p>
                <a href="#contact" className="text-sm text-[#183956] font-medium hover:underline inline-flex items-center mt-1">
                  Vollständige Case Study
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/ecosolve-boller.github.io/images/josh-chiodo-F0hD5KVznLQ-unsplash.jpg"
                alt="7-Eleven Filiale mit Energiemanagementsystem"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">Projektübersicht</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Über 120 Filialen in ganz Dänemark</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Eniscope-Energiemanagementsystem implementiert</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Low-Cost / No-Cost Lösungen umgesetzt</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}