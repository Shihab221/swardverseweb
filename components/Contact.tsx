"use client";
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-transparent to-purple-950/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1e3a8a15,transparent_70%)]" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-blue-400 tracking-wide uppercase text-sm mb-4 block">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to bring your vision to life? We're here to help
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2">Name</label>
                  <Input
                    placeholder="Your name"
                    className="bg-gray-800 border-gray-700 text-white focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    className="bg-gray-800 border-gray-700 text-white focus:border-blue-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Subject</label>
                <Input
                  placeholder="Project inquiry"
                  className="bg-gray-800 border-gray-700 text-white focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <Textarea
                  placeholder="Tell us about your project..."
                  rows={6}
                  className="bg-gray-800 border-gray-700 text-white focus:border-blue-500 resize-none"
                />
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 group">
                Send Message
                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl text-white mb-6">
                Let's talk about your project
              </h3>
              <p className="text-gray-400 mb-8">
                Whether you have a question, a project idea, or just want to say hello, we'd love to hear from you. Our team is ready to help bring your digital vision to life.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  title: 'Email',
                  content: 'hello@swarddverse.com',
                },
                {
                  icon: Phone,
                  title: 'Phone',
                  content: '+1 (555) 123-4567',
                },
                {
                  icon: MapPin,
                  title: 'Office',
                  content: 'San Francisco, CA 94102',
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4 p-4 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-blue-500/50 transition-all"
                  >
                    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-white mb-1">{item.title}</h4>
                      <p className="text-gray-400">{item.content}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-white mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {['Twitter', 'LinkedIn', 'GitHub', 'Dribbble'].map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.1, y: -5 }}
                    href="#"
                    className="w-12 h-12 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500/50 transition-all"
                  >
                    {social.charAt(0)}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
