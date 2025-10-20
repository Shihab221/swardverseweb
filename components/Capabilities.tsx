"use client";

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Zap, Shield, Rocket, Users, Award, TrendingUp } from 'lucide-react';

export function Capabilities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const capabilities = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance for the best user experience',
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and 99.9% uptime',
    },
    {
      icon: Rocket,
      title: 'Rapid Development',
      description: 'Agile methodology for quick time-to-market',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Skilled professionals with years of experience',
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'Rigorous testing and quality control',
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Built to grow with your business',
    },
  ];

  return (
    <section id="about" className="py-32 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
      
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-blue-400 tracking-wide uppercase text-sm mb-4 block">Why Choose Us</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Our Capabilities
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We bring together the perfect blend of technology, design, and innovation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gradient-to-br from-gray-800 to-gray-800/50 border border-gray-700 rounded-xl hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl text-white mb-2">
                  {capability.title}
                </h3>
                <p className="text-gray-400">
                  {capability.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-2xl text-white text-center mb-8">
            Technologies We Master
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'React',
              'Next.js',
              'TypeScript',
              'Node.js',
              'Python',
              'TailwindCSS',
              'AWS',
              'Docker',
              'GraphQL',
              'PostgreSQL',
              'ROS',
              'TensorFlow',
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-6 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 hover:border-blue-500/50 hover:text-white transition-all"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
