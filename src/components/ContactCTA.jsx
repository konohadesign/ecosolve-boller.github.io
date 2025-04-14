export default function ContactCTA() {
    const trustPoints = [
      'Über 500 zufriedene Kunden',
      'Durchschnittlich 11.52% Energieeinsparung',
      'Antwort innerhalb von 24 Stunden',
    ];

    return (
      <section id="contact" className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center bg-green-50 rounded-full px-4 py-2 text-green-700 text-sm font-medium mb-6">
                <span className="mr-2">✓</span>
                Kostenlose Erstberatung
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#183956] mb-4">
                Lassen Sie uns Ihre Energiezukunft gestalten
              </h2>
              <p className="text-gray-700 text-lg mb-8">
                Nehmen Sie Kontakt mit uns auf für eine unverbindliche Beratung zu Ihren individuellen Anforderungen.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
              <div className="grid sm:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 w-full"
                />
                <input
                  type="email"
                  placeholder="E-Mail"
                  className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 w-full"
                />
                <button className="bg-[#183956] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#10263a] transition w-full">
                  Kontakt aufnehmen
                </button>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {trustPoints.map((point, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-6">
              <div className="flex -space-x-2">
                <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=100&auto=format&fit=crop&q=80" alt="User" />
                <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1607083206325-caf1edba7a0f?w=100&auto=format&fit=crop&q=80" alt="User" />
                <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1607083206789-578f21923d21?w=100&auto=format&fit=crop&q=80" alt="User" />
              </div>
              <p className="text-sm text-gray-600">
                Schließen Sie sich <span className="font-medium">500+ zufriedenen Kunden</span> an
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  