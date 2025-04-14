import { useState } from 'react';
import { useIntersectionObserver } from '../utils/useIntersectionObserver';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  useIntersectionObserver();

  const faqs = [
    {
      question: 'Wie funktioniert das Energiemanagementsystem?',
      answer: 'Unser System kombiniert IoT-Sensoren mit einer cloud-basierten Plattform. Es erfasst Energiedaten in Echtzeit, analysiert Verbrauchsmuster und identifiziert automatisch Einsparpotenziale. Die Implementierung erfolgt ohne Unterbrechung Ihres Geschäftsbetriebs.'
    },
    {
      question: 'Welche Einsparungen kann ich erwarten?',
      answer: 'Basierend auf unseren Erfahrungswerten erreichen unsere Kunden durchschnittlich 11.52% Energieeinsparung. Die genauen Einsparungen hängen von Ihrer aktuellen Situation und den umgesetzten Maßnahmen ab.'
    },
    {
      question: 'Wie lange dauert die Installation?',
      answer: 'Die Installation unserer Hardware erfolgt typischerweise innerhalb eines Tages. Die vollständige Systemintegration und Konfiguration ist in der Regel innerhalb einer Woche abgeschlossen.'
    },
    {
      question: 'Welche Branchen unterstützen Sie?',
      answer: 'Wir unterstützen verschiedene Branchen, darunter Einzelhandel, Gastronomie, Hotels, Bildungseinrichtungen und Industriebetriebe. Unsere Lösungen sind skalierbar und werden an Ihre spezifischen Anforderungen angepasst.'
    },
    {
      question: 'Gibt es staatliche Förderungen?',
      answer: 'Ja, für Energieeffizienzmaßnahmen gibt es verschiedene Förderprogramme. Wir beraten Sie gerne zu den aktuellen Fördermöglichkeiten und unterstützen Sie bei der Antragstellung.'
    }
  ];

  return (
    <section id="faq" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12 fade-up">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Häufig gestellte Fragen</h2>
          <p className="text-gray-600">Finden Sie Antworten auf die wichtigsten Fragen zu unseren Energiemanagement-Systemen</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="card-hover border border-gray-200 rounded-lg overflow-hidden fade-up"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left transition-colors"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                  <span className="text-gray-500 transition-transform duration-300">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </div>
              </button>
              <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                <div className="px-6 py-4 border-t border-gray-100">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center fade-up">
          <p className="text-gray-600 mb-4">
            Haben Sie weitere Fragen?{' '}
          </p>
          <a href="#contact" className="btn-primary">
            Kontaktieren Sie uns
          </a>
        </div>
      </div>
    </section>
  );
} 