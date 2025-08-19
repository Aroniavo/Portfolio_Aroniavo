import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Custom cursor effect
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
      position: fixed;
      width: 20px;
      height: 20px;
      background: radial-gradient(circle, rgba(59,130,246,0.6) 0%, transparent 70%);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      transition: transform 0.1s ease;
    `;
    document.body.appendChild(cursor);

    const updateCursor = (e: MouseEvent) => {
      cursor.style.left = e.clientX - 10 + 'px';
      cursor.style.top = e.clientY - 10 + 'px';
    };

    document.addEventListener('mousemove', updateCursor);

    // Intersection Observer for data-animate elements
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const target = entry.target as HTMLElement;
        const animateType = target.dataset.animate || 'fade-in';
        const delay = target.dataset.delay || '0ms';

        const typeToClass: Record<string, string> = {
          'fade-in': 'animate-fade-in',
          'fade-up': 'animate-fade-up',
          'fade-left': 'animate-fade-left',
          'fade-right': 'animate-fade-right',
          'zoom-in': 'animate-zoom-in',
        };

        const className = typeToClass[animateType] || 'animate-fade-in';
        if (delay) {
          target.style.animationDelay = /ms|s$/.test(delay) ? delay : `${delay}ms`;
        }
        target.classList.add(className);

        observer.unobserve(target);
      });
    }, observerOptions);

    // Observe all [data-animate] elements
    const animatedElements = document.querySelectorAll<HTMLElement>('[data-animate]');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.body.removeChild(cursor);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;