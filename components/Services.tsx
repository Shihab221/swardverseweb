"use client";

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Code2, Globe, Bot, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      icon: Code2,
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business needs with cutting-edge technologies and best practices.',
      image: 'https://images.unsplash.com/photo-1558095625-f882e3436125?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzb2Z0d2FyZXxlbnwxfHx8fDE3NjA5NDU3NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Globe,
      title: 'Web Applications',
      description: 'Beautiful, responsive, and performant web applications that deliver exceptional user experiences.',
      image: 'https://images.unsplash.com/photo-1593720213681-e9a8778330a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzYwODcxNzMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Bot,
      title: 'Robotics Development',
      description: 'Innovative robotics solutions combining hardware and software for automation and intelligent systems.',
      image: 'https://images.unsplash.com/photo-1612338762643-298feee70520?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljcyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYwODg1MzE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="services" className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,#1e3a8a15,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,#581c8715,transparent_50%)]" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-blue-400 tracking-wide uppercase text-sm mb-4 block">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            What We Do Best
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We deliver cutting-edge solutions across multiple domains
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 p-8 h-full transition-all duration-500 hover:border-gray-600">
                  {/* Background Image */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Gradient Overlay */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-20 blur-3xl group-hover:opacity-30 transition-opacity duration-500`} />

                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl text-white mb-4">
                      {service.title}
                    </h3>

                    <p className="text-gray-400 mb-6">
                      {service.description}
                    </p>

                    <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                      <span className="mr-2">Learn more</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
