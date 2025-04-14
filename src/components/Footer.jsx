export function Footer() {
    return (
      <footer className="bg-[#183956] text-white px-6 md:px-12 py-10">
        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-4 text-sm">
          <div>
            <h4 className="font-semibold mb-2">Ecosolve</h4>
            <p className="text-gray-300">Nachhaltige Energielösungen für Unternehmen jeder Größe.</p>
          </div>
  
          <div>
            <h4 className="font-semibold mb-2">Links</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline text-gray-300">Lösungen</a></li>
              <li><a href="#" className="hover:underline text-gray-300">Case Studies</a></li>
              <li><a href="#" className="hover:underline text-gray-300">Über uns</a></li>
              <li><a href="#" className="hover:underline text-gray-300">Kontakt</a></li>
            </ul>
          </div>
  
          <div>
            <h4 className="font-semibold mb-2">Rechtliches</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline text-gray-300">Impressum</a></li>
              <li><a href="#" className="hover:underline text-gray-300">Datenschutz</a></li>
            </ul>
          </div>
  
          <div>
            <h4 className="font-semibold mb-2">Folgen Sie uns</h4>
            <div className="flex gap-4 mt-2">
              <a href="#" className="hover:text-blue-300">🔗</a>
              <a href="#" className="hover:text-blue-300">🐦</a>
              <a href="#" className="hover:text-blue-300">📘</a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-400 text-xs mt-10">© {new Date().getFullYear()} Ecosolve. Alle Rechte vorbehalten.</div>
      </footer>
    );
  }
  