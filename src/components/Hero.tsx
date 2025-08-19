import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, Mail, Github, Linkedin, Facebook } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const greetings = [
    'Bonjour, Hello, Salama leka!',
    'Bienvenue dans mon univers',
    'Welcome to my world',
    'Tonga soa eto aminy tontoloko'
  ];

  useEffect(() => {
    const typeWriter = () => {
      const currentGreeting = greetings[currentIndex];

      if (isTyping) {
        if (currentText.length < currentGreeting.length) {
          setCurrentText(currentGreeting.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsTyping(false), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsTyping(true);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % greetings.length);
        }
      }
    };

    const timer = setTimeout(typeWriter, isTyping ? 100 : 50);
    return () => clearTimeout(timer);
  }, [currentText, isTyping, currentIndex, greetings]);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" data-animate="zoom-in" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top left geometric logo */}
        <div className="absolute top-8 left-8">
          <div className="w-16 h-16 border-2 border-cyan-400/60 rounded-full flex items-center justify-center">
            <div className="w-8 h-8 border border-cyan-400/60 transform rotate-45"></div>
          </div>
        </div>

        {/* Floating elements around the profile */}
        <div className="absolute top-32 right-1/4 w-4 h-4 bg-green-400 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-orange-400 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-1/3 right-1/4 w-5 h-5 bg-purple-400 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-1/2 right-1/5 w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-500"></div>

        {/* Geometric shapes */}
        <div className="absolute top-1/4 right-1/3 w-8 h-8 border-2 border-green-400/60 transform rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-1/4 right-1/3 w-6 h-6 bg-gradient-to-r from-orange-400 to-red-400 transform rotate-12 animate-pulse"></div>

        {/* Curved line element */}
        <div className="absolute bottom-1/4 right-1/6">
          <svg width="60" height="40" viewBox="0 0 60 40" className="text-yellow-400">
            <path d="M10 30 Q 30 10 50 30" stroke="currentColor" strokeWidth="2" fill="none" className="animate-pulse" />
          </svg>
        </div>
      </div>

      {/* Social Media Links - Left Side */}
      <div className="hidden md:flex md:flex-col fixed left-6 top-1/2 transform -translate-y-1/2 z-50 space-y-4">
        <a href="https://github.com/Aroniavo" target="_blank" rel="noopener noreferrer" className="block p-3 bg-blue-600 hover:bg-blue-500 rounded-full transition-all duration-300 hover:scale-110 shadow-lg">
          <Github className="text-white" size={20} />
        </a>
        <a href="https://www.facebook.com/share/1BD1k9b8dD/" className="block p-3 bg-blue-600 hover:bg-blue-500 rounded-full transition-all duration-300 hover:scale-110 shadow-lg">
          <Facebook className="text-white" size={20} />
        </a>
        <a href="https://www.linkedin.com/in/aroniavo-ramano%C3%ABlison-205a77308?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " className="block p-3 bg-blue-700 hover:bg-blue-600 rounded-full transition-all duration-300 hover:scale-110 shadow-lg">
          <Linkedin className="text-white" size={20} />
        </a>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8 order-2 lg:order-1">
            {/* Greeting Bubble */}
            <div className="inline-block">
              <div className="bg-blue-500 text-white px-6 py-3 rounded-full text-sm font-medium relative">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                  {currentText}
                  <span className="animate-pulse">|</span>
                </span>
                <div className="absolute -bottom-2 left-6 w-4 h-4 bg-blue-500 transform rotate-45"></div>
              </div>
            </div>

            {/* Name */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-4xl font-bold text-white leading-tight">
                RAMANOELISON
              </h1>

              <div className="flex items-center gap-4">
                <div className="bg-white text-black px-6 py-2 rounded-lg font-bold text-2xl sm:text-3xl lg:text-4xl">
                  Aroniavo
                </div>
              </div>
              <h2 className="text-2xl sm:text-6xl lg:text-5xl font-bold text-white">
                Obeda Fa Sarobidy
              </h2>
            </div>

            {/* Subtitle */}
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl text-gray-300 font-light">
                &lt; Je suis Développeur Web /&gt;
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                Bienvenue dans mon univers créatif ! Mon ambition est d’aller au-delà de vos attentes en concevant des solutions numériques uniques et impactantes. Si vous recherchez un professionnel alliant créativité et innovation, explorons ensemble les possibilités infinies de votre prochain projet.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={scrollToContact}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2"
              >
                <Mail size={20} />
                Contactez-moi
              </button>
              <a
                href="/CV%20Ramanoelison%20Aroniavo.pdf"
                download="CV_Ramanoelison_Aroniavo.pdf"
                className="px-8 py-4 border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-black font-semibold rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Download size={20} />
                Télécharger mon CV
              </a>
            </div>
          </div>

          {/* Right Side - Profile Image with Floating Elements */}
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2 mt-16 md:mt-0">
            <div className="relative">
              {/* Main Profile Circle */}
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 p-1 relative overflow-hidden">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-4">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-end justify-center">
                    <img
                      src="/moi.png"
                      alt="Aroniavo Ramanoelison"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* Floating Developer Badges */}
              <div className="absolute -top-4 -right-4 bg-white text-black px-4 py-2 rounded-full font-semibold text-sm shadow-lg animate-bounce">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Développeur
                </span>
              </div>

              <div className="absolute bottom-8 -left-8 bg-white text-black px-4 py-2 rounded-full font-semibold text-sm shadow-lg animate-bounce delay-500">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Développeur
                </span>
              </div>

              {/* Floating UI Elements */}
              <div className="absolute top-1/4 -left-12 bg-gradient-to-r from-orange-400 to-red-500 p-3 rounded-lg shadow-lg animate-pulse">
                <div className="w-8 h-6 bg-white/20 rounded"></div>
              </div>

              <div className="absolute top-1/3 -right-8 bg-green-500 p-2 rounded-lg shadow-lg animate-bounce delay-700">
                <div className="w-6 h-6 border-2 border-white rounded"></div>
              </div>

              {/* Compass/Navigation Element */}
              <div className="absolute -top-8 left-1/3 bg-gray-800 p-3 rounded-lg shadow-lg">
                <div className="w-8 h-8 border-2 border-green-400 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={scrollToAbout} className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;