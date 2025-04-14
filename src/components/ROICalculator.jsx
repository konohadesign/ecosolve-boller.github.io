import { useState } from 'react';

export default function ROICalculator() {
  const [values, setValues] = useState({
    energyBill: 10000,
    buildingSize: 1000,
  });

  const averageSavings = 0.1152; // 11.52% from case study
  const annualSavings = values.energyBill * averageSavings;
  const co2Reduction = (values.energyBill * 0.0002); // Approximate CO2 reduction per Euro

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({
      ...prev,
      [name]: parseFloat(value) || 0
    }));
  };

  return (
    <section id="roi-calculator" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">Sparpotenzial berechnen</h2>
            <p className="text-gray-600">
              Berechnen Sie Ihr individuelles Einsparpotenzial basierend auf unseren Durchschnittswerten.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Jährliche Energiekosten (€)
                </label>
                <input
                  type="number"
                  name="energyBill"
                  value={values.energyBill}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  min="0"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gebäudefläche (m²)
                </label>
                <input
                  type="number"
                  name="buildingSize"
                  value={values.buildingSize}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  min="0"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-green-50 rounded-lg p-6">
                <div className="text-green-600 text-sm font-medium mb-1">Jährliche Einsparung</div>
                <div className="text-2xl font-bold text-green-700">
                  {annualSavings.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}
                </div>
                <div className="text-green-600 text-sm mt-1">pro Jahr</div>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="text-blue-600 text-sm font-medium mb-1">Einsparung in %</div>
                <div className="text-2xl font-bold text-blue-700">
                  {(averageSavings * 100).toFixed(2)}%
                </div>
                <div className="text-blue-600 text-sm mt-1">durchschnittlich</div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-gray-600 text-sm font-medium mb-1">CO₂ Reduktion</div>
                <div className="text-2xl font-bold text-gray-700">
                  {co2Reduction.toFixed(1)} t
                </div>
                <div className="text-gray-600 text-sm mt-1">pro Jahr</div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-[#183956] text-white font-medium rounded-lg hover:bg-[#10263a] transition-colors"
              >
                Kostenloses Beratungsgespräch
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 