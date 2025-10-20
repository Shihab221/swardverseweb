"use client";

import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: 'AI-Powered Analytics Platform',
      category: 'Software Development',
      description: 'Enterprise-level analytics dashboard with real-time data visualization and AI insights.',
      image: 'https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYwODU2NzAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React', 'TypeScript', 'Python'],
    },
    {
      title: 'E-Commerce Excellence',
      category: 'Web Application',
      description: 'Modern e-commerce platform with seamless checkout and inventory management.',
      image: 'https://images.unsplash.com/photo-1558095625-f882e3436125?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzb2Z0d2FyZXxlbnwxfHx8fDE3NjA5NDU3NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Next.js', 'Stripe', 'MongoDB'],
    },
    {
      title: 'Autonomous Navigation Robot',
      category: 'Robotics',
      description: 'Smart robot with computer vision and autonomous pathfinding capabilities.',
      image: 'https://images.unsplash.com/photo-1612338762643-298feee70520?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljcyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYwODg1MzE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['ROS', 'Python', 'OpenCV'],
    },
    {
      title: 'SaaS Management System',
      category: 'Software Development',
      description: 'Complete SaaS solution with multi-tenancy, billing, and analytics.',
      image: 'https://images.unsplash.com/photo-1593720213681-e9a8778330a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzYwODcxNzMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Node.js', 'PostgreSQL', 'Redis'],
    },
  ];

  return (
    <section id="projects" className="py-32 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem]" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-purple-400 tracking-wide uppercase text-sm mb-4 block">Portfolio</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Showcasing our best work across different domains
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative overflow-hidden rounded-2xl bg-gray-800 border border-gray-700 cursor-pointer"
            >
              <div className="aspect-video overflow-hidden relative">
                <motion.div
                  animate={{
                    scale: hoveredIndex === index ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full"
                >
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-center justify-center gap-4"
                >
                  <motion.button
                    initial={{ y: 20, opacity: 0 }}
                    animate={{
                      y: hoveredIndex === index ? 0 : 20,
                      opacity: hoveredIndex === index ? 1 : 0,
                    }}
                    transition={{ delay: 0.1 }}
                    className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 text-white" />
                  </motion.button>
                  <motion.button
                    initial={{ y: 20, opacity: 0 }}
                    animate={{
                      y: hoveredIndex === index ? 0 : 20,
                      opacity: hoveredIndex === index ? 1 : 0,
                    }}
                    transition={{ delay: 0.15 }}
                    className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                  >
                    <Github className="w-5 h-5 text-white" />
                  </motion.button>
                </motion.div>
              </div>

              <div className="p-6">
                <span className="text-sm text-blue-400">{project.category}</span>
                <h3 className="text-2xl text-white mt-2 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
