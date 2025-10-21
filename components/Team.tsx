"use client"
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Linkedin, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Badge } from './ui/badge';

interface TeamMember {
  name: string;
  position: string;
  experience: number;
  stacks: string[];
  image: string;
  linkedin: string;
  github: string;
  gradient: string;
}

export function TeamMember() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const teamMembers: TeamMember[] = [
    {
      name: 'Shihab Ahemed',
      position: 'co-founder',
      experience: 3,
      stacks: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker'],
      image: '/shihab.jpg',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Zahid Hasan Rifat',
      position: 'co-founder',
      experience: 4,
      stacks: ['React', 'Next.js', 'Tailwind', 'Motion', 'GraphQL'],
      image: '/rifat.png',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      name: 'Shaikh Jubair',
      position: 'Bacchar Bap',
      experience: 7,
      stacks: ['Python', 'ROS', 'C++', 'TensorFlow', 'OpenCV'],
      image: '/jubair.jpg',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      name: 'Ser Midul',
      position: 'Lagao Expert',
      experience: 5,
      stacks: ['Vue.js', 'Python', 'PostgreSQL', 'Redis', 'Kubernetes'],
      image: '/midul.jpg',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section id="team" className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,#1e3a8a15,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,#581c8715,transparent_50%)]" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-blue-400 tracking-wide uppercase text-sm mb-4 block">Our Team</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Meet The Experts
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Talented individuals driving innovation and excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 p-8 h-full transition-all duration-500 hover:border-gray-600 hover:shadow-2xl hover:shadow-blue-500/10">
                {/* Gradient Overlay */}
                <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${member.gradient} opacity-10 blur-3xl group-hover:opacity-20 transition-opacity duration-500`} />

                <div className="relative z-10">
                  {/* Profile Image */}
                  <div className="flex items-start gap-6 mb-6">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className="relative"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-500`} />
                      <div className="relative w-24 h-24 rounded-xl overflow-hidden border-2 border-gray-700 group-hover:border-gray-600 transition-colors duration-500">
                        <ImageWithFallback
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </motion.div>

                    <div className="flex-1">
                      <h3 className="text-2xl text-white mb-1">
                        {member.name}
                      </h3>
                      <p className={`bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent mb-2`}>
                        {member.position}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {member.experience} years of experience
                      </p>
                    </div>
                  </div>

                  {/* Tech Stacks */}
                  <div className="mb-6">
                    <p className="text-gray-400 text-sm mb-3">Tech Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {member.stacks.map((stack, stackIndex) => (
                        <motion.div
                          key={stackIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.4, delay: index * 0.15 + stackIndex * 0.05 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Badge
                            variant="secondary"
                            className="bg-gray-800/50 text-gray-300 border border-gray-700 hover:border-gray-600 hover:bg-gray-700/50 transition-all duration-300"
                          >
                            {stack}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-3 pt-4 border-t border-gray-700">
                    <motion.a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br ${member.gradient} opacity-80 hover:opacity-100 transition-all duration-300 group/icon`}
                    >
                      <Linkedin className="w-5 h-5 text-white" />
                    </motion.a>
                    <motion.a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-800 border border-gray-700 hover:border-gray-600 hover:bg-gray-700 transition-all duration-300 group/icon"
                    >
                      <Github className="w-5 h-5 text-gray-300 group-hover/icon:text-white transition-colors" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
