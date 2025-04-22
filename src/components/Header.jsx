import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('de');
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const languages = [
    { code: 'de', label: 'DE' },
    { code: 'en', label: 'EN' },
    { code: 'fr', label: 'FR' },
    { code: 'it', label: 'IT' },
  ];

  const navItems = [
    {
      label: 'Branchen',
      href: '#/industries',
      subItems: [
        { label: 'Restaurants & Gastronomie', href: '#/industries/restaurants' },
        { label: 'Lebensmitteleinzelhandel', href: '#/industries/retail' },
        { label: 'Hotels & Hospitality', href: '#/industries/hotels' },
        { label: 'Produktion & Industrie', href: '#/industries/manufacturing' },
        { label: 'Bildungseinrichtungen', href: '#/industries/education' },
        { label: 'Multi-Site Management', href: '#/industries/multisite' },
      ]
    },
    {
      label: 'Lösungen',
      href: '#solutions',
      subItems: [
        { label: 'Energie Monitoring', href: '#/solutions/monitoring' },
        { label: 'Energy Management', href: '#/solutions/management' },
      ]
    },
    {
      label: 'Technologie',
      href: '#technologies',
      subItems: [
        { label: 'CUES', href: '#/technologies/cues' },
        { label: 'Eniscope Air', href: '#/technologies/eniscope-air' },
        { label: 'Eniscope EMS', href: '#/technologies/eniscope-ems' },
      ]
    },
    { label: 'Über uns', href: '#about' },
    { label: 'Kontakt', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = currentScrollPos > prevScrollPos;
      
      setVisible(!isScrollingDown || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      visible ? 'translate-y-0' : '-translate-y-full'
    } ${
      prevScrollPos > 10 ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <nav className="flex items-center justify-between">
          <a href="#/" className="text-xl font-bold text-[#183956] flex items-center gap-2">
            <svg className="w-8 h-8 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Ecosolve
          </a>

          {/* Desktop Navigation */}
          <div className="hidden min-[920px]:flex items-center gap-8">
            <div className="flex gap-6">
              {navItems.map((item) => (
                <div key={item.label} className="relative group">
                  <a
                    href={item.href}
                    className="text-gray-600 hover:text-[#183956] transition-colors flex items-center gap-1"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                  >
                    {item.label}
                    {item.subItems && (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </a>
                  {item.subItems && activeDropdown === item.label && (
                    <div 
                      className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-md py-2 mt-1"
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {item.subItems.map((subItem) => (
                        <a
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-[#183956] transition-colors whitespace-nowrap"
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 border-l pl-6">
              <div className="relative group">
                <button
                  onClick={() => setActiveDropdown(activeDropdown === 'languages' ? null : 'languages')}
                  className={`lang-selector px-2 py-1 text-sm rounded-md transition-colors flex items-center gap-1 ${
                    currentLang === 'de'
                      ? 'lang-active text-[#183956] font-medium'
                      : 'lang-inactive text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {languages.find(lang => lang.code === currentLang)?.label}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === 'languages' && (
                  <div 
                    className="absolute top-full right-0 w-20 bg-white shadow-lg rounded-md py-2 mt-1"
                    onMouseEnter={() => setActiveDropdown('languages')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setCurrentLang(lang.code);
                          setActiveDropdown(null);
                        }}
                        className={`block w-full px-4 py-1 text-sm text-left transition-colors ${
                          currentLang === lang.code
                            ? 'text-[#183956] font-medium'
                            : 'text-gray-500 hover:text-gray-700'
                        }`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="min-[920px]:hidden p-2 text-gray-600 hover:text-[#183956] transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`min-[920px]:hidden fixed inset-x-0 bg-white shadow-xl transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'top-[73px] opacity-100' : '-top-96 opacity-0'
          }`}
        >
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <div key={item.label}>
                <div className="flex items-center justify-between">
                  <a
                    href={item.href}
                    onClick={() => !item.subItems && setIsMobileMenuOpen(false)}
                    className="block py-2 text-gray-600 hover:text-[#183956] transition-colors flex-1"
                  >
                    {item.label}
                  </a>
                  {item.subItems && (
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                      className="p-2 text-gray-600 hover:text-[#183956] transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  )}
                </div>
                {item.subItems && activeDropdown === item.label && (
                  <div className="pl-4 space-y-2">
                    {item.subItems.map((subItem) => (
                      <a
                        key={subItem.label}
                        href={subItem.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-2 text-gray-500 hover:text-[#183956] transition-colors"
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {/* Mobile Menu Language Selector */}
            <div className="border-t pt-4">
              <div className="flex gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setCurrentLang(lang.code)}
                    className={`lang-selector-mobile px-3 py-1 text-sm rounded-md transition-colors ${
                      currentLang === lang.code
                        ? 'lang-active text-[#183956] font-medium'
                        : 'lang-inactive text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}