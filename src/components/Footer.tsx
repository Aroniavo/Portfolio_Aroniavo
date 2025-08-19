import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Accueil', href: '#hero' },
    { label: 'À propos', href: '#about' },
    { label: 'Projets', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 border-t border-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <button 
              onClick={scrollToTop}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent hover:from-blue-300 hover:to-purple-500 transition-all duration-300"
            >
            Aroniavo RAMANOELISON 
            </button>
            <p className="text-gray-400 leading-relaxed">
              Développeur Full Stack passionné par la création d'expériences numériques innovantes 
              avec des technologies de pointe et des principes de design modernes.
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <span>Fait avec</span>
              <Heart className="text-red-500 animate-pulse" size={16} />
              <span>et beaucoup de café</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Liens Rapides</h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:translate-x-2 transform"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Entrons en Contact</h3>
            <div className="space-y-2 text-gray-400">
              <p>Andrainjato-Tranomora P74, Fianarantsoa</p>
              <a 
                href="mailto:ramanoelsonaroniavo@gmail.com" 
                className="block hover:text-blue-400 transition-colors duration-300"
              >
                ramanoelsonaroniavo@gmail.com
              </a>
              <a 
                href="tel:+261347162570" 
                className="block hover:text-blue-400 transition-colors duration-300"
              >
                +261 34 71 625 70
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} Aroniavo Ramanoelison. Tous droits réservés.
            </div>
            
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <button className="hover:text-blue-400 transition-colors duration-300">
                Politique de Confidentialité
              </button>
              <button className="hover:text-blue-400 transition-colors duration-300">
                Conditions d'Utilisation
              </button>
              <button 
                onClick={scrollToTop}
                className="px-4 py-2 border border-slate-700 hover:border-blue-500 rounded-lg hover:text-blue-400 transition-all duration-300 hover:scale-105"
              >
                Retour en Haut
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;