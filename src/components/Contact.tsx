import React, { useState } from 'react';
import { Send, Mail, MapPin, Phone, Github, Linkedin, Facebook } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Configuration EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'ramanoelsonaroniavo@gmail.com'
      };

      // Envoyer l'email via EmailJS
      await emailjs.send(
        'service_sw8v5at', // À remplacer par votre Service ID
        'template_43h20n8', // À remplacer par votre Template ID
        templateParams,
        '1Q9VqaO4ttvE13TjZ' // À remplacer par votre Public Key
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ramanoelsonaroniavo@gmail.com',
      href: 'mailto:ramanoelsonaroniavo@gmail.com'
    },
    {
      icon: Phone,
      label: 'Téléphone',
      value: '+261 34 71 625 70',
      href: 'tel:+261347162570'
    },
    {
      icon: MapPin,
      label: 'Localisation',
      value: 'Fianarantsoa',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Aroniavo',
      color: 'hover:text-gray-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/aroniavo-ramano%C3%ABlison-205a77308?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      color: 'hover:text-blue-400'
    },
    {
      icon: Facebook,
      label: 'Facebook',
      href: 'https://www.facebook.com/share/1BD1k9b8dD/',
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <section id="contact" data-animate="fade-up" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4">
            Entrons en Contact
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Vous avez un projet en tête ? Collaborons et créons quelque chose d'extraordinaire ensemble
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Envoyer un Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-gray-300 font-medium">Nom</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                      placeholder="Votre Nom"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-gray-300 font-medium">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-gray-300 font-medium">Sujet</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    placeholder="Demande de Projet"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-gray-300 font-medium">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                    placeholder="Parlez-moi de votre projet..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center gap-3 px-8 py-4 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg ${
                    submitStatus === 'success' 
                      ? 'bg-green-500 hover:bg-green-400 shadow-green-500/25' 
                      : submitStatus === 'error'
                      ? 'bg-red-500 hover:bg-red-400 shadow-red-500/25'
                      : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 shadow-blue-500/25'
                  } text-white`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Envoi en cours...
                    </>
                  ) : submitStatus === 'success' ? (
                    <>
                      <Send size={20} />
                      Message envoyé avec succès!
                    </>
                  ) : submitStatus === 'error' ? (
                    <>
                      <Send size={20} />
                      Erreur - Réessayer
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Envoyer le Message
                    </>
                  )}
                </button>
                
                {submitStatus === 'success' && (
                  <div className="mt-4 p-4 bg-green-500/20 border border-green-500/50 rounded-lg">
                    <p className="text-green-400 text-center">
                      ✅ Votre message a été envoyé avec succès! Je vous répondrai dans les plus brefs délais.
                    </p>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mt-4 p-4 bg-red-500/20 border border-red-500/50 rounded-lg">
                    <p className="text-red-400 text-center">
                      ❌ Une erreur s'est produite. Veuillez réessayer ou me contacter directement par email.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Informations de Contact</h3>
              <div className="space-y-6">
                {contactInfo.map((info) => {
                  const IconComponent = info.icon;
                  return (
                    <a
                      key={info.label}
                      href={info.href}
                      className="flex items-center gap-4 p-4 bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-lg hover:border-blue-500/50 transition-all duration-300 hover:scale-105 group"
                    >
                      <div className="p-3 bg-blue-500/20 rounded-xl group-hover:bg-blue-500/30 transition-colors duration-300">
                        <IconComponent className="text-blue-400" size={24} />
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm">{info.label}</div>
                        <div className="text-white font-medium">{info.value}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Suivez-moi</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:scale-110 text-gray-400 ${social.color} group`}
                    >
                      <IconComponent size={24} />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-blue-500/10 to-purple-600/10 border border-blue-500/20 rounded-xl">
              <h4 className="text-xl font-bold text-white mb-3">Travaillons Ensemble</h4>
              <p className="text-gray-400 mb-4">
                Je suis toujours ouvert à discuter de nouvelles opportunités, projets créatifs et idées innovantes.
              </p>
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm font-medium">Disponible pour de nouveaux projets</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;