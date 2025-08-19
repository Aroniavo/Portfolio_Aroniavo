import React from 'react';
import { ExternalLink, Github, Zap } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'ADE - Assistant Digital Éducatif',
      description: 'Plateforme éducative intelligente avec assistant IA intégré pour l\'accompagnement personnalisé des étudiants. Interface moderne avec chat en temps réel et gestion de contenu pédagogique.',
      image: '/Ade.png',
      technologies: ['Vue.js', 'Node.js', 'MongoDB', 'API Gemini', 'Postman', 'GitLab'],
      liveUrl: 'https://ade.tac-tic-service.com/',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: "Site Web Université de Fianarantsoa",
      description: 'Refonte complète du site institutionnel de l\'Université de Fianarantsoa avec une architecture moderne et mise en place du web radio de l\'Université de Fianarantsoa ',
      image: '/univ.png',
      technologies: ['CodeIgniter', 'HTML/CSS', 'Bootstrap', 'PostgreSQL', 'jQuery'],
      liveUrl: 'https://www.univ-fianarantsoa.mg/',
      githubUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Site E-commerce',
      description: 'Développement d’un site e-commerce moderne avec gestion des produits, panier d’achat, paiement sécurisé et interface utilisateur intuitive.',
      image: '/e-com.png',
      technologies: ['ReactJs', 'Nodejs', 'MongoDB', 'API Swagger'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Gestion de la sortie des bovins',
      description: 'Application web pour la gestion et le suivi de la sortie des bovins, incluant l’enregistrement des mouvements, la génération de rapports et un tableau de bord administratif.',
      image: 'bovin.png',
      technologies: ['Laravel', 'Bootstrap', 'MySQL', 'HTML/CSS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Site d\'Airdrop',
      description: 'Plateforme dédiée aux campagnes d’airdrop permettant la distribution sécurisée de tokens, la vérification des participants et le suivi des récompenses en temps réel.',
      image: 'Airdrop.png',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 6,
      title: '3D animation',
      description: 'Projet d’animation 3D interactive intégrée dans une application web, avec rendu en temps réel et une expérience immersive pour l’utilisateur.',
      image: '3D.png',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ];

  return (
    <section id="projects" data-animate="fade-up" className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4">
            Mes realisations
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Une vitrine de mes derniers travaux, présentant des solutions innovantes et des technologies de pointe
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.filter(p => p.featured).map((project) => (
            <div
              key={project.id}
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <Zap className="text-blue-400" size={24} />
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 pt-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    <ExternalLink size={16} />
                    Démo Live
                  </a>
                  <a
                    href={project.id <= 2 ? "https://github.com/Aroniavo" : project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-slate-600 hover:border-blue-500 text-gray-300 hover:text-blue-400 rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.filter(p => !p.featured).map((project) => (
            <div
              key={project.id}
              className="group relative bg-slate-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              <div className="p-4 space-y-3">
                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* <div className="flex gap-2 pt-2">
                  <a
                    href={project.liveUrl}
                    className="flex-1 flex items-center justify-center gap-1 px-3 py-1 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded text-sm transition-all duration-300"
                  >
                    <ExternalLink size={12} />
                    Live
                  </a>
                  <a
                    href={project.id <= 2 ? "https://github.com/Aroniavo" : project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1 px-3 py-1 border border-slate-600 hover:border-blue-500 text-gray-300 hover:text-blue-400 rounded text-sm transition-all duration-300"
                  >
                    <Github size={12} />
                    Code
                  </a>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;