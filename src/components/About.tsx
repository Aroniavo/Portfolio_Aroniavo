import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';
import { SiReact, SiTypescript, SiNextdotjs, SiVuedotjs, SiNodedotjs, SiPhp, SiLaravel, SiCodeigniter, SiMysql, SiMongodb, SiPostgresql, SiGoogle } from 'react-icons/si';

const About: React.FC = () => {
  const skills = [
    { name: 'Frontend Development', level: 80,  icon: Code },
    { name: 'UI/UX Design', level: 75, icon: Palette },
    { name: 'Backend Development', level: 70, icon: Zap }
  ];

  const technologies = [
    { name: 'React', icon: SiReact, color: 'text-cyan-400' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
    { name: 'Vue.js', icon: SiVuedotjs, color: 'text-green-400' },
    { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
    { name: 'PHP', icon: SiPhp, color: 'text-purple-400' },
    { name: 'Laravel', icon: SiLaravel, color: 'text-red-400' },
    { name: 'CodeIgniter', icon: SiCodeigniter, color: 'text-orange-400' },
    { name: 'MySQL', icon: SiMysql, color: 'text-blue-600' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-700' },
    { name: 'API Gemini', icon: SiGoogle, color: 'text-purple-500' }
  ];

  return (
    <section id="about" data-animate="fade-up" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4">
            À Propos de Moi
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Développeur passionné avec 3+ années d'expérience dans la création d'expériences numériques exceptionnelles
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Profile */}
          <div className="space-y-8">
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl relative overflow-hidden">
                <div className="absolute inset-4 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden">
                  <img 
                    src="/moi.png" 
                    alt="Aroniavo Ramanoelison" 
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                {/* Geometric Overlays */}
                <div className="absolute top-4 right-4 w-16 h-16 border-2 border-blue-400/50 rounded-lg rotate-12"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-purple-500/30 rounded-full"></div>
              </div>
            </div>
            
            <div className="text-center lg:text-left space-y-6">
              <h3 className="text-2xl font-bold text-white">Développeur Full Stack & Designer</h3>
              <p className="text-gray-400 leading-relaxed">
                Je suis un développeur full-stack passionné avec une expertise dans les technologies 
                web modernes et un œil aiguisé pour le design. J'aime créer des solutions innovantes 
                qui comblent le fossé entre fonctionnalité et esthétique, repoussant toujours les 
                limites de ce qui est possible dans le développement web.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Quand je ne code pas, vous me trouverez en train d'explorer les dernières tendances 
                technologiques, de contribuer à des projets open-source, ou de mentorer d'autres 
                développeurs dans la communauté.
              </p>
            </div>
          </div>

          {/* Right Side - Skills */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 text-center lg:text-left">Technologies</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {technologies.map((tech, index) => {
                  const IconComponent = tech.icon as React.ElementType;
                  return (
                    <div
                      key={tech.name}
                      className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-3 text-center hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:bg-blue-500/10"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex flex-col items-center gap-2">
                        <IconComponent className={`${tech.color} transition-colors duration-300`} size={24} />
                        <span className="text-gray-300 font-medium text-sm">{tech.name}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Keep the skills section under technologies */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 text-center lg:text-left">Compétences & Expertise</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <IconComponent className="text-blue-400" size={20} />
                          <span className="text-white font-medium">{skill.name}</span>
                        </div>
                        <span className="text-blue-400 font-bold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${index * 200}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;