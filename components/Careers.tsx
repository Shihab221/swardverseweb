"use client";
import { motion, useInView, AnimatePresence } from 'motion/react';
import { useRef, useState } from 'react';
import { Briefcase, MapPin, Clock, DollarSign, ChevronDown, Send } from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

interface JobPosting {
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  gradient: string;
}

interface Department {
  name: string;
  count: number;
  gradient: string;
}

export function Careers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  const departments: Department[] = [
    { name: 'All', count: 6, gradient: 'from-blue-500 to-cyan-500' },
    { name: 'Engineering', count: 3, gradient: 'from-purple-500 to-pink-500' },
    { name: 'Robotics', count: 2, gradient: 'from-orange-500 to-red-500' },
    { name: 'Design', count: 1, gradient: 'from-green-500 to-emerald-500' },
  ];

  const jobPostings: JobPosting[] = [
    {
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'Remote / New York',
      type: 'Full-time',
      salary: '$120k - $160k',
      description: 'We are looking for an experienced Full Stack Developer to join our dynamic engineering team. You will be responsible for building scalable web applications and working with cutting-edge technologies.',
      requirements: [
        '5+ years of experience in full-stack development',
        'Strong proficiency in React, Node.js, and TypeScript',
        'Experience with cloud platforms (AWS, Azure, or GCP)',
        'Knowledge of modern DevOps practices and CI/CD',
        'Excellent problem-solving and communication skills',
      ],
      responsibilities: [
        'Design and develop scalable web applications',
        'Collaborate with cross-functional teams',
        'Write clean, maintainable, and efficient code',
        'Participate in code reviews and technical discussions',
        'Mentor junior developers',
      ],
      benefits: [
        'Competitive salary and equity',
        'Flexible remote work',
        'Health, dental, and vision insurance',
        'Professional development budget',
        'Unlimited PTO',
      ],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Robotics Software Engineer',
      department: 'Robotics',
      location: 'San Francisco',
      type: 'Full-time',
      salary: '$130k - $180k',
      description: 'Join our robotics team to develop innovative automation solutions. You will work on cutting-edge robotics projects involving AI, computer vision, and autonomous systems.',
      requirements: [
        '4+ years of experience in robotics or automation',
        'Strong programming skills in Python and C++',
        'Experience with ROS, OpenCV, or similar frameworks',
        'Knowledge of machine learning and computer vision',
        'BS/MS in Robotics, Computer Science, or related field',
      ],
      responsibilities: [
        'Develop and implement robotics control algorithms',
        'Integrate sensors and actuators with control systems',
        'Optimize performance and reliability of robotic systems',
        'Collaborate with hardware and AI teams',
        'Document technical specifications and processes',
      ],
      benefits: [
        'Competitive compensation package',
        'Work with cutting-edge robotics technology',
        'Relocation assistance',
        'Conference attendance and learning opportunities',
        'Stock options',
      ],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'Frontend Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      salary: '$90k - $130k',
      description: 'We are seeking a talented Frontend Developer to create beautiful, responsive, and performant user interfaces. You will work closely with designers and backend developers to deliver exceptional user experiences.',
      requirements: [
        '3+ years of frontend development experience',
        'Expert knowledge of React, TypeScript, and modern CSS',
        'Experience with Motion/Framer Motion or similar animation libraries',
        'Strong understanding of responsive design and accessibility',
        'Portfolio demonstrating exceptional UI/UX work',
      ],
      responsibilities: [
        'Build responsive and accessible web applications',
        'Implement pixel-perfect designs with smooth animations',
        'Optimize application performance and user experience',
        'Collaborate with designers and backend developers',
        'Stay updated with latest frontend technologies',
      ],
      benefits: [
        'Remote-first company culture',
        'Flexible working hours',
        'Health and wellness benefits',
        'Learning and development budget',
        'Modern tech stack',
      ],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Autonomous Systems Engineer',
      department: 'Robotics',
      location: 'Boston',
      type: 'Full-time',
      salary: '$140k - $190k',
      description: 'Lead the development of autonomous systems for next-generation robotics platforms. Work on perception, planning, and control algorithms for autonomous navigation and manipulation.',
      requirements: [
        '5+ years in autonomous systems or robotics',
        'Strong background in SLAM, path planning, and control theory',
        'Experience with sensor fusion and real-time systems',
        'Proficiency in C++ and Python',
        'PhD or MS in relevant field preferred',
      ],
      responsibilities: [
        'Design and implement autonomous navigation systems',
        'Develop perception and sensor fusion algorithms',
        'Optimize real-time performance of control systems',
        'Conduct field testing and validation',
        'Publish research and technical papers',
      ],
      benefits: [
        'Industry-leading compensation',
        'Research publication opportunities',
        'State-of-the-art lab facilities',
        'Relocation package',
        'Patent bonus program',
      ],
      gradient: 'from-red-500 to-orange-500',
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote / Austin',
      type: 'Full-time',
      salary: '$110k - $150k',
      description: 'Build and maintain our cloud infrastructure and deployment pipelines. Help us scale our applications and ensure high availability and performance.',
      requirements: [
        '4+ years of DevOps or SRE experience',
        'Strong experience with AWS, Docker, and Kubernetes',
        'Proficiency in Infrastructure as Code (Terraform, CloudFormation)',
        'Experience with CI/CD tools (GitHub Actions, Jenkins)',
        'Strong scripting skills (Python, Bash)',
      ],
      responsibilities: [
        'Manage and optimize cloud infrastructure',
        'Build and maintain CI/CD pipelines',
        'Implement monitoring and alerting solutions',
        'Ensure security and compliance',
        'Support development teams with infrastructure needs',
      ],
      benefits: [
        'Competitive salary and benefits',
        'Remote work options',
        'Latest DevOps tools and technologies',
        'Professional certification support',
        'Collaborative team environment',
      ],
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Remote / Los Angeles',
      type: 'Full-time',
      salary: '$95k - $135k',
      description: 'Create beautiful and intuitive user experiences for our web and mobile applications. You will work closely with developers and stakeholders to design pixel-perfect interfaces.',
      requirements: [
        '4+ years of UI/UX design experience',
        'Expert proficiency in Figma and modern design tools',
        'Strong portfolio demonstrating web and mobile design',
        'Understanding of frontend development (HTML, CSS, React)',
        'Experience with design systems and component libraries',
      ],
      responsibilities: [
        'Design user interfaces for web and mobile applications',
        'Create and maintain design systems',
        'Conduct user research and usability testing',
        'Collaborate with developers on implementation',
        'Present designs to stakeholders',
      ],
      benefits: [
        'Flexible remote work',
        'Creative freedom and autonomy',
        'Latest design tools and software',
        'Conference and workshop attendance',
        'Portfolio development opportunities',
      ],
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  const filteredJobs = selectedDepartment === 'All' 
    ? jobPostings 
    : jobPostings.filter(job => job.department === selectedDepartment);

  return (
    <section id="careers" className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,#1e3a8a15,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,#581c8715,transparent_50%)]" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 tracking-wide uppercase text-sm mb-4 block">Join Our Team</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Career Opportunities
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Build the future with us. Explore open positions and find your perfect role.
          </p>
        </motion.div>

        {/* Department Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {departments.map((dept, index) => (
            <motion.button
              key={dept.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setSelectedDepartment(dept.name);
                setExpandedJob(null);
              }}
              className={`relative px-8 py-4 rounded-xl transition-all duration-500 overflow-hidden group ${
                selectedDepartment === dept.name
                  ? 'bg-gradient-to-r ' + dept.gradient
                  : 'bg-gray-800 hover:bg-gray-700'
              }`}
            >
              {selectedDepartment !== dept.name && (
                <div className={`absolute inset-0 bg-gradient-to-r ${dept.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
              )}
              <div className="relative z-10 flex items-center gap-3">
                <span className="text-white">{dept.name}</span>
                <Badge 
                  variant="secondary" 
                  className={`${
                    selectedDepartment === dept.name 
                      ? 'bg-white/20 text-white border-white/30' 
                      : 'bg-gray-700 text-gray-300 border-gray-600'
                  }`}
                >
                  {dept.count}
                </Badge>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Job Listings */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedDepartment}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {filteredJobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-gray-600 transition-all duration-500">
                  {/* Gradient Overlay */}
                  <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${job.gradient} opacity-5 blur-3xl group-hover:opacity-10 transition-opacity duration-500`} />

                  {/* Job Header - Always Visible */}
                  <motion.div
                    className="relative z-10 p-8 cursor-pointer"
                    onClick={() => setExpandedJob(expandedJob === index ? null : index)}
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-start gap-4 mb-4">
                          <div className={`w-14 h-14 bg-gradient-to-br ${job.gradient} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                            <Briefcase className="w-7 h-7 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                              {job.title}
                            </h3>
                            <div className="flex flex-wrap gap-3 text-gray-400">
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                <span>{job.location}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                <span>{job.type}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <DollarSign className="w-4 h-4" />
                                <span>{job.salary}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                          {job.description}
                        </p>
                      </div>

                      <motion.div
                        animate={{ rotate: expandedJob === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                      >
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${job.gradient} flex items-center justify-center`}>
                          <ChevronDown className="w-6 h-6 text-white" />
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Job Details - Expandable */}
                  <AnimatePresence>
                    {expandedJob === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="relative z-10 px-8 pb-8 pt-4 border-t border-gray-700">
                          <div className="grid md:grid-cols-3 gap-8">
                            {/* Requirements */}
                            <motion.div
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: 0.1 }}
                            >
                              <h4 className="text-white mb-4 flex items-center gap-2">
                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${job.gradient}`} />
                                Requirements
                              </h4>
                              <ul className="space-y-2">
                                {job.requirements.map((req, i) => (
                                  <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
                                    className="text-gray-400 text-sm flex items-start gap-2"
                                  >
                                    <span className="text-blue-400 mt-1">•</span>
                                    <span>{req}</span>
                                  </motion.li>
                                ))}
                              </ul>
                            </motion.div>

                            {/* Responsibilities */}
                            <motion.div
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                            >
                              <h4 className="text-white mb-4 flex items-center gap-2">
                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${job.gradient}`} />
                                Responsibilities
                              </h4>
                              <ul className="space-y-2">
                                {job.responsibilities.map((resp, i) => (
                                  <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: 0.15 + i * 0.05 }}
                                    className="text-gray-400 text-sm flex items-start gap-2"
                                  >
                                    <span className="text-purple-400 mt-1">•</span>
                                    <span>{resp}</span>
                                  </motion.li>
                                ))}
                              </ul>
                            </motion.div>

                            {/* Benefits */}
                            <motion.div
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: 0.3 }}
                            >
                              <h4 className="text-white mb-4 flex items-center gap-2">
                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${job.gradient}`} />
                                Benefits
                              </h4>
                              <ul className="space-y-2">
                                {job.benefits.map((benefit, i) => (
                                  <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: 0.2 + i * 0.05 }}
                                    className="text-gray-400 text-sm flex items-start gap-2"
                                  >
                                    <span className="text-green-400 mt-1">•</span>
                                    <span>{benefit}</span>
                                  </motion.li>
                                ))}
                              </ul>
                            </motion.div>
                          </div>

                          {/* Apply Button */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="mt-8 flex justify-center"
                          >
                            <Button
                              className={`bg-gradient-to-r ${job.gradient} hover:opacity-90 transition-opacity px-8 py-6 text-lg group/btn`}
                            >
                              <span>Apply for this position</span>
                              <Send className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                            </Button>
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Jobs Message */}
        {filteredJobs.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <p className="text-gray-400 text-xl">
              No open positions in this department at the moment.
            </p>
            <p className="text-gray-500 mt-2">
              Check back soon or explore other departments.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
