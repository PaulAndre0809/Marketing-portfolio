/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import paulPort from '../paul_port.png';
import workGif1 from '../a1.gif';
import workGif2 from '../a2.gif';
import workVideo4 from '../a4.webm';
import { 
  ArrowRight, 
  BarChart3, 
  Target, 
  Zap, 
  TrendingUp, 
  Mail, 
  Phone, 
  Linkedin, 
  ExternalLink,
  ChevronRight,
  CheckCircle2,
  Layers,
  MousePointer2,
  Cpu
} from 'lucide-react';

const stats = [
  { label: 'Ad Spend Managed', value: 'AED 96K+', icon: <BarChart3 className="w-5 h-5" /> },
  { label: 'Leads Generated', value: '15,675+', icon: <Target className="w-5 h-5" /> },
  { label: 'Facebook Views', value: '1M+', icon: <TrendingUp className="w-5 h-5" /> },
  { label: 'Website Users', value: '175K', icon: <MousePointer2 className="w-5 h-5" /> },
  { label: 'Avg CPL', value: 'AED 6.16', icon: <Zap className="w-5 h-5" /> },
];

const caseStudies = [
  {
    id: 'gilani',
    title: 'Gilani Mobility',
    subtitle: 'Scaling Lead Gen for Mobility Solutions',
    problem: 'High CPL and inconsistent lead quality in a niche market.',
    strategy: 'Full-funnel Meta Ads strategy combined with high-intent content and automated lead qualification.',
    results: ['2,579 High-Quality Leads', '1M+ Organic & Paid Views', '35% Reduction in CPL'],
    tags: ['Meta Ads', 'Content Strategy', 'Funnel Optimization'],
    media: workGif1,
    mediaType: 'image'
  },
  {
    id: 'we-aspire',
    title: 'We Aspire',
    subtitle: 'Performance Marketing & Growth',
    problem: 'Need for rapid scaling of lead volume while maintaining strict ROI targets.',
    strategy: 'Aggressive creative testing and audience segmentation across paid channels.',
    results: ['Consistent Month-over-Month Growth', 'Automated Lead Distribution', 'Enhanced Tracking Accuracy'],
    tags: ['Performance Marketing', 'Lead Generation', 'Scaling'],
    media: workGif2,
    mediaType: 'image'
  },
  {
    id: 'automation',
    title: 'Funnel & Automation',
    subtitle: 'Efficiency at Scale',
    problem: 'Manual lead handling causing delays and drop-offs in the sales pipeline.',
    strategy: 'Integrated ManyChat, HubSpot, and Zapier to build a self-optimizing lead ecosystem.',
    results: ['Zero Manual Data Entry', 'Instant Lead Response Time', 'Real-time Pipeline Tracking'],
    tags: ['ManyChat', 'CRM', 'Automation'],
    media: workVideo4,
    mediaType: 'video'
  }
];

const processSteps = [
  {
    title: 'Research & Targeting',
    description: 'Deep dive into audience psychology and competitor landscapes to find untapped opportunities.',
    icon: <Target className="w-6 h-6" />
  },
  {
    title: 'Creative & Launch',
    description: 'Rapid testing of high-impact creatives and copy to identify winning combinations early.',
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: 'Funnel & Automation',
    description: 'Building the infrastructure that converts clicks into qualified leads without manual friction.',
    icon: <Cpu className="w-6 h-6" />
  },
  {
    title: 'Optimize & Scale',
    description: 'Data-driven adjustments to maximize ROI and scale spend profitably across all channels.',
    icon: <TrendingUp className="w-6 h-6" />
  }
];

const tools = [
  'Meta Ads', 'Google Ads', 'GA4', 'Looker Studio', 'ManyChat', 
  'HubSpot', 'Zapier', 'WordPress', 'Canva', 'Adobe Suite'
];

const stackAccentClasses = [
  'hover:text-sky-500 hover:[text-shadow:0_0_28px_rgba(14,165,233,0.35)]',
  'hover:text-emerald-500 hover:[text-shadow:0_0_28px_rgba(16,185,129,0.35)]',
  'hover:text-amber-500 hover:[text-shadow:0_0_28px_rgba(245,158,11,0.35)]',
  'hover:text-rose-500 hover:[text-shadow:0_0_28px_rgba(244,63,94,0.35)]',
  'hover:text-violet-500 hover:[text-shadow:0_0_28px_rgba(139,92,246,0.35)]',
  'hover:text-cyan-500 hover:[text-shadow:0_0_28px_rgba(6,182,212,0.35)]'
];

const testimonials = [
  {
    quote: "Paul transformed our lead generation. Our CPL dropped significantly within the first month.",
    author: "Marketing Director, Gilani Mobility"
  },
  {
    quote: "The automation systems Paul built saved us hours of manual work every single day.",
    author: "Founder, We Aspire"
  }
];

export default function App() {
  const [activeCaseStudy, setActiveCaseStudy] = useState(0);
  const activeStudy = caseStudies[activeCaseStudy];

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 sm:h-20 flex items-center justify-between gap-4">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-[12rem] sm:max-w-none text-sm sm:text-xl font-bold tracking-tighter leading-tight"
          >
            PAUL ANDRE FUTOL
          </motion.span>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
            <a href="#work" className="hover:text-zinc-900 transition-colors">Work</a>
            <a href="#process" className="hover:text-zinc-900 transition-colors">Process</a>
            <a href="#about" className="hover:text-zinc-900 transition-colors">About</a>
            <a 
              href="#contact" 
              className="px-5 py-2.5 bg-zinc-900 text-white rounded-full hover:bg-zinc-800 transition-all"
            >
              Contact Me
            </a>
          </div>
          <a 
            href="#contact" 
            className="md:hidden px-4 py-2 bg-zinc-900 text-white rounded-full text-xs font-semibold uppercase tracking-wider"
          >
            Contact
          </a>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="pt-28 sm:pt-32 lg:pt-40 pb-16 lg:pb-0 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-stretch min-h-[auto] lg:min-h-[700px]">
              <div className="max-w-4xl flex items-center order-2 lg:order-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="inline-block px-3 py-1 rounded-full bg-zinc-100 text-zinc-600 text-[10px] sm:text-xs font-bold uppercase tracking-[0.24em] mb-5 sm:mb-6">
                    Performance Marketing Specialist
                  </span>
                  <h1 className="text-4xl sm:text-5xl md:text-7xl xl:text-8xl font-bold tracking-tight leading-[0.9] mb-6 sm:mb-8 text-balance">
                    I turn ad spend into <span className="text-zinc-400">predictable leads.</span>
                  </h1>
                  <p className="text-base sm:text-lg md:text-2xl text-zinc-500 max-w-2xl leading-relaxed mb-8 sm:mb-12">
                    Dubai-based growth expert managing <span className="text-zinc-900 font-medium">AED 96K+</span> in spend to generate over <span className="text-zinc-900 font-medium">15,000+</span> high-intent leads.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href="#work" 
                      className="group px-8 py-4 bg-zinc-900 text-white rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-zinc-800 transition-all"
                    >
                      View Work
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a 
                      href="#contact" 
                      className="px-8 py-4 border border-zinc-200 rounded-full font-semibold flex items-center justify-center hover:bg-zinc-50 transition-all"
                    >
                      Contact Me
                    </a>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative order-1 lg:order-2 w-full h-[340px] sm:h-[440px] md:h-[640px] lg:h-full overflow-visible"
              >
                <div className="w-full h-full rounded-3xl overflow-hidden">
                  <img
                    src={paulPort}
                    alt="Paul Andre Futol"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <motion.div
                  className="hidden md:flex absolute top-8 left-4 lg:left-6 px-4 py-2 rounded-full bg-emerald-100 border border-emerald-300 text-xs font-bold uppercase tracking-[0.2em] text-emerald-800 shadow-lg"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  Growth
                </motion.div>

                <motion.div
                  className="hidden md:flex absolute top-24 right-4 lg:right-6 px-4 py-2 rounded-full bg-sky-100 border border-sky-300 text-sky-800 text-xs font-bold uppercase tracking-[0.2em] shadow-lg"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
                >
                  Convert
                </motion.div>

                <motion.div
                  className="hidden md:flex absolute bottom-10 left-6 lg:left-10 px-4 py-2 rounded-full bg-amber-100 border border-amber-300 text-xs font-bold uppercase tracking-[0.2em] text-amber-900 shadow-lg"
                  animate={{ y: [0, -7, 0] }}
                  transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
                >
                  Collect Leads
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="py-20 bg-zinc-50 border-y border-zinc-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 md:gap-12">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col"
                >
                  <div className="text-zinc-400 mb-3">{stat.icon}</div>
                  <span className="text-3xl md:text-4xl font-bold tracking-tight mb-1">{stat.value}</span>
                  <span className="text-xs uppercase tracking-widest font-bold text-zinc-400">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Selected Work Section */}
        <section id="work" className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between md:items-end mb-12 sm:mb-16 lg:mb-20 gap-6 sm:gap-8">
              <div className="max-w-2xl">
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-4 sm:mb-6">Selected Work</h2>
                <p className="text-lg sm:text-xl text-zinc-500">A look at how I solve complex growth challenges through data and automation.</p>
              </div>
              <div className="flex gap-2">
                {caseStudies.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveCaseStudy(idx)}
                    className={`w-12 h-1 rounded-full transition-all ${activeCaseStudy === idx ? 'bg-zinc-900' : 'bg-zinc-200'}`}
                  />
                ))}
              </div>
            </div>

            <div className="relative min-h-[auto] lg:min-h-[600px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCaseStudy}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center"
                >
                  <div className="order-2 lg:order-1">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {activeStudy.tags.map(tag => (
                        <span key={tag} className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 bg-zinc-100 rounded text-zinc-500">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{activeStudy.title}</h3>
                    <p className="text-lg sm:text-xl text-zinc-400 mb-8 sm:mb-10 italic">{activeStudy.subtitle}</p>
                    
                    <div className="space-y-8">
                      <div>
                        <h4 className="text-xs uppercase tracking-widest font-bold text-zinc-900 mb-2">Problem</h4>
                        <p className="text-zinc-600 leading-relaxed">{activeStudy.problem}</p>
                      </div>
                      <div>
                        <h4 className="text-xs uppercase tracking-widest font-bold text-zinc-900 mb-2">Strategy</h4>
                        <p className="text-zinc-600 leading-relaxed">{activeStudy.strategy}</p>
                      </div>
                      <div>
                        <h4 className="text-xs uppercase tracking-widest font-bold text-zinc-900 mb-4">Results</h4>
                        <ul className="space-y-3">
                          {activeStudy.results.map((result, i) => (
                            <li key={i} className="flex items-center gap-3 text-zinc-900 font-medium">
                              <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="order-1 lg:order-2">
                    <div className="group aspect-[4/3] rounded-3xl overflow-hidden relative border border-zinc-200/80 bg-zinc-50">
                      <div className="flex h-full w-full items-center justify-center p-5 sm:p-8 lg:p-10">
                        {activeStudy.mediaType === 'video' ? (
                          <video
                            src={activeStudy.media}
                            className="max-h-full w-auto max-w-[88%] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                            autoPlay
                            loop
                            muted
                            playsInline
                          />
                        ) : (
                          <img 
                            src={activeStudy.media}
                            alt={activeStudy.title}
                            className="max-h-full w-auto max-w-[88%] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 bg-zinc-900 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mb-12 sm:mb-16 lg:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-4 sm:mb-6">The Growth System</h2>
              <p className="text-lg sm:text-xl text-zinc-400">A structured approach to turning ad spend into profitable revenue.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
              {processSteps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="text-zinc-500 text-sm font-mono mb-8">0{index + 1}</div>
                  <div className="mb-6 text-zinc-400">{step.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools & Stack */}
        <section className="py-20 sm:py-24 px-4 sm:px-6 border-b border-zinc-100 overflow-hidden">
          <div className="max-w-7xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-zinc-400 text-center">The Stack & Infrastructure</h2>
          </div>
          
          <div className="relative">
            {/* Fading Edges Mask */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
            
            <div className="flex overflow-hidden">
              <motion.div 
                className="flex gap-12 whitespace-nowrap py-4"
                animate={{ x: [0, -1920] }}
                transition={{ 
                  duration: 30, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              >
                {[...tools, ...tools, ...tools].map((tool, idx) => (
                  <span 
                    key={idx} 
                    className={`text-xl sm:text-2xl md:text-4xl font-bold text-zinc-200 transition-all duration-300 cursor-default hover:-translate-y-1 ${stackAccentClasses[idx % stackAccentClasses.length]}`}
                  >
                    {tool}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-start">
              <div className="lg:sticky lg:top-32">
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-6 sm:mb-8">Thinking First, <br />Results Always.</h2>
                <div className="flex gap-4">
                  <a href="#" className="p-3 rounded-full border border-zinc-200 hover:bg-zinc-50 transition-all">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-3 rounded-full border border-zinc-200 hover:bg-zinc-50 transition-all">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="space-y-8 sm:space-y-10 lg:space-y-12 text-lg sm:text-xl md:text-2xl text-zinc-500 leading-relaxed">
                <p>
                  I don't just "run ads." I build automated lead generation systems that work while you sleep. Based in Dubai, I've spent years refining the intersection of <span className="text-zinc-900 font-medium">paid media, creative strategy, and marketing automation.</span>
                </p>
                <p>
                  My approach is rooted in data but driven by human psychology. I focus on the metrics that actually matter: <span className="text-zinc-900 font-medium">Cost Per Lead, Lead Quality, and ROI.</span>
                </p>
                <div className="pt-4 sm:pt-8 grid sm:grid-cols-2 gap-8 sm:gap-12">
                  {testimonials.map((t, i) => (
                    <div key={i} className="space-y-4">
                      <p className="text-lg italic text-zinc-600">"{t.quote}"</p>
                      <p className="text-xs uppercase tracking-widest font-bold text-zinc-400">— {t.author}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 sm:py-32 lg:py-40 px-4 sm:px-6 bg-zinc-50">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl md:text-8xl font-bold tracking-tight mb-10 sm:mb-12">Let's scale <br />your leads.</h2>
              <div className="flex flex-col items-center gap-5 sm:gap-6">
                <a 
                  href="mailto:5.paulandrefutol@gmail.com" 
                  className="max-w-full text-base sm:text-2xl md:text-4xl font-medium hover:text-zinc-500 transition-colors flex flex-col sm:flex-row items-center gap-3 sm:gap-4 break-all"
                >
                  <Mail className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0" />
                  5.paulandrefutol@gmail.com
                </a>
                <a 
                  href="tel:+971502315266" 
                  className="text-lg sm:text-2xl md:text-4xl font-medium hover:text-zinc-500 transition-colors flex flex-col sm:flex-row items-center gap-3 sm:gap-4"
                >
                  <Phone className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0" />
                  +971 502315266
                </a>
              </div>
              <div className="mt-14 sm:mt-20">
                <p className="text-zinc-400 text-sm uppercase tracking-[0.4em] font-bold mb-8">Dubai, UAE</p>
                <div className="w-px h-24 bg-zinc-200 mx-auto" />
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="py-10 sm:py-12 px-4 sm:px-6 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 text-center md:text-left text-sm text-zinc-400 font-medium">
          <p>© 2026 Paul Andre Futol. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            <a href="#" className="hover:text-zinc-900 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-zinc-900 transition-colors">Instagram</a>
            <a href="#" className="hover:text-zinc-900 transition-colors">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
