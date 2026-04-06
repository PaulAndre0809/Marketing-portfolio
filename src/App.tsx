/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import paulPort from '../paul_port.png';
import resumePdf from '../Paul_Andre_Futol_CV_Complete.pdf';
import a1 from '../a1.gif';
import a2 from '../a2.gif';
import a3 from '../a3.gif';
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
  CheckCircle2,
  Layers,
  MousePointer2,
  Cpu,
} from 'lucide-react';

// ─── DATA ────────────────────────────────────────────────────────────────────

const stats = [
  { label: 'Ad Spend Managed',  value: 'AED 96K+', icon: <BarChart3 className="w-5 h-5" /> },
  { label: 'Leads Generated',   value: '15,675+',  icon: <Target className="w-5 h-5" /> },
  { label: 'Facebook Views',    value: '1M+',       icon: <TrendingUp className="w-5 h-5" /> },
  { label: 'Website Users',     value: '175K',      icon: <MousePointer2 className="w-5 h-5" /> },
  { label: 'Avg CPL',           value: 'AED 6.16',  icon: <Zap className="w-5 h-5" /> },
];

const caseStudies = [
  {
    id: 'gilani',
    title: 'Gilani Mobility',
    subtitle: 'Multi-brand content & paid strategy across 3 countries',
    problem: 'Managing 6 brand identities simultaneously across UAE, Australia, and New Zealand — with inconsistent content quality and high CPL.',
    strategy: 'Unified content calendar, platform-specific Reels strategy, and A/B-tested Meta Ads — shifting budget from Facebook Reels (CTR 0.96%) to Instagram Stories (CTR 3.65%).',
    results: [
      '100% Instagram views growth · +135% IG link clicks (Jan–May)',
      '1M+ Facebook views · 27.7% month-over-month growth',
      '40% CPL reduction through creative testing & channel shift',
      'IMAGINE Show (DFC Dubai) & AccessAbilities Expo campaigns',
    ],
    tags: ['Content Strategy', 'Meta Ads', 'Multi-Brand', 'Video Production'],
  },
  {
    id: 'we-aspire',
    title: 'We Aspire',
    subtitle: 'Lead generation at scale with verified ROI',
    problem: 'Needed rapid lead volume for vocational training courses while maintaining strict cost targets in a competitive UAE market.',
    strategy: 'Course-specific creative per placement, Instant Form campaigns, and bilingual EN/AR ManyChat automation to qualify and route leads instantly.',
    results: [
      'Best campaign: AED 2.90 CPL · 286 leads · 209K impressions',
      'Welding promo: AED 3.52 CPL · 314 leads',
      'Barista promo: AED 3.48 CPL · 129 leads',
      '5,336 CRM leads · 278 closed sales tracked in Looker Studio',
    ],
    tags: ['Meta Ads', 'Lead Generation', 'ManyChat', 'CRM'],
  },
  {
    id: 'automation',
    title: 'Funnel & Automation',
    subtitle: 'Bilingual lead qualification at zero manual effort',
    problem: 'Manual lead handling across 6 brands caused response delays and pipeline blind spots — especially for Arabic-speaking prospects.',
    strategy: 'Built a bilingual EN/AR ManyChat chatflow integrated with HubSpot and WhatsApp API — automated segmentation by service type, instant routing, and Looker Studio dashboard for the sales team.',
    results: [
      '408 sends · 371 unique contacts · deployed in 3 weeks',
      'Sub-2-min automated response time across all brands',
      '175K website users tracked in GA4 · 1m 03s avg. engagement',
      'Full pipeline visibility: source → lead → closed sale',
    ],
    tags: ['ManyChat', 'WhatsApp API', 'HubSpot', 'Looker Studio'],
  },
];

const studyThemes: Record<string, { gradient: string; glow: string; ring: string; accent: string }> = {
  gilani: {
    gradient: 'from-sky-500 via-cyan-500 to-blue-700',
    glow: 'bg-cyan-300/40',
    ring: 'ring-cyan-200/60',
    accent: 'text-cyan-100',
  },
  'we-aspire': {
    gradient: 'from-emerald-500 via-teal-500 to-lime-600',
    glow: 'bg-emerald-300/40',
    ring: 'ring-emerald-200/60',
    accent: 'text-emerald-100',
  },
  automation: {
    gradient: 'from-violet-500 via-fuchsia-500 to-rose-600',
    glow: 'bg-violet-300/40',
    ring: 'ring-violet-200/60',
    accent: 'text-violet-100',
  },
};

const processSteps = [
  {
    title: 'Research & Targeting',
    description: 'Audience psychology, competitor content gaps, and platform-specific trends — finding where attention is and how to earn it.',
    icon: <Target className="w-6 h-6" />,
  },
  {
    title: 'Content & Creative',
    description: 'Concept, shoot, edit — Reels, Stories, ad creatives, and event production built to stop the scroll and drive action.',
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: 'Paid & Automation',
    description: 'Meta Ads campaigns paired with ManyChat flows that convert clicks into qualified leads with zero manual friction.',
    icon: <Cpu className="w-6 h-6" />,
  },
  {
    title: 'Analyse & Scale',
    description: 'GA4, Looker Studio, and Meta Ads Manager data drives every decision — from killing underperformers to doubling down on winners.',
    icon: <TrendingUp className="w-6 h-6" />,
  },
];

const tools = [
  'Meta Ads', 'GA4', 'CapCut', 'ManyChat',
  'HubSpot', 'WordPress', 'Canva', 'Adobe Suite', 'Looker Studio', 'WhatsApp API',
];

const stackAccentClasses = [
  'hover:text-sky-500 hover:[text-shadow:0_0_28px_rgba(14,165,233,0.35)]',
  'hover:text-emerald-500 hover:[text-shadow:0_0_28px_rgba(16,185,129,0.35)]',
  'hover:text-amber-500 hover:[text-shadow:0_0_28px_rgba(245,158,11,0.35)]',
  'hover:text-rose-500 hover:[text-shadow:0_0_28px_rgba(244,63,94,0.35)]',
  'hover:text-violet-500 hover:[text-shadow:0_0_28px_rgba(139,92,246,0.35)]',
  'hover:text-cyan-500 hover:[text-shadow:0_0_28px_rgba(6,182,212,0.35)]',
];

const testimonials = [
  {
    quote: 'Paul significantly improved our lead generation through optimised Meta Ads and automation. CPL dropped within the first month.',
    author: 'Marketing Director, Gilani Mobility',
  },
  {
    quote: 'He managed our content across two brands, built Reels that consistently outperformed everything before, and delivered reports I could act on.',
    author: 'General Manager, Gilani Group',
  },
];

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function App() {
  const [activeCaseStudy, setActiveCaseStudy] = useState(0);
  const activeStudy = caseStudies[activeCaseStudy];
  const activeTheme = studyThemes[activeStudy.id] ?? studyThemes.gilani;

  const summarize = (text: string, maxChars: number) =>
    text.length > maxChars ? `${text.slice(0, maxChars - 1)}…` : text;

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white">

      {/* ── NAV ── */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-[72px] flex items-center justify-between gap-4">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-sm sm:text-base font-bold tracking-tighter"
          >
            PAUL ANDRE FUTOL
          </motion.span>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-500">
            <a href="#work"      className="hover:text-zinc-900 transition-colors">Work</a>
            <a href="#process"   className="hover:text-zinc-900 transition-colors">Process</a>
            <a href="#portfolio" className="hover:text-zinc-900 transition-colors">Portfolio</a>
            <a href="#about"     className="hover:text-zinc-900 transition-colors">About</a>
            <a
              href="#contact"
              className="px-5 py-2.5 bg-zinc-900 text-white rounded-full hover:bg-zinc-700 transition-all text-sm"
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

        {/* ── HERO ── */}
        <section className="pt-24 sm:pt-32 lg:pt-40 pb-16 lg:pb-0 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-stretch min-h-[auto] lg:min-h-[680px]">

              {/* Left — copy */}
              <div className="flex items-center order-2 lg:order-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="max-w-xl"
                >
                  <span className="inline-block px-3 py-1 rounded-full bg-zinc-100 text-zinc-600 text-[10px] sm:text-xs font-bold uppercase tracking-[0.24em] mb-5 sm:mb-6">
                    Social Media &amp; Marketing Specialist
                  </span>

                  <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-[0.95] mb-5 sm:mb-7 text-balance">
                    Content that <span className="text-zinc-400">connects.</span>{' '}
                    Campaigns that <span className="text-zinc-400">convert.</span>
                  </h1>

                  <p className="text-base sm:text-lg text-zinc-500 leading-relaxed mb-4 sm:mb-5">
                    Dubai-based specialist managing{' '}
                    <span className="text-zinc-900 font-semibold">6 brands across 3 countries</span> —
                    creating content that performs on social and building paid systems that generate{' '}
                    <span className="text-zinc-900 font-semibold">15,675+ leads at AED 6.16 avg. CPL.</span>
                  </p>

                  {/* Brand tags */}
                  <div className="flex flex-wrap gap-1.5 mb-7">
                    {['Gilani Mobility Dubai', 'Gilani Mobility AU', 'Gilani Mobility NZ', 'Gilani Engineering', 'Gilani Motors', 'We Aspire'].map(b => (
                      <span key={b} className="text-[10px] font-semibold px-2.5 py-1 rounded-md bg-zinc-100 text-zinc-500 border border-zinc-200">{b}</span>
                    ))}
                    {['🇦🇪 UAE', '🇦🇺 Australia', '🇳🇿 New Zealand'].map(c => (
                      <span key={c} className="text-[10px] font-semibold px-2.5 py-1 rounded-md bg-blue-50 text-blue-600 border border-blue-100">{c}</span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="#work"
                      className="group px-7 py-3.5 bg-zinc-900 text-white rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-zinc-700 transition-all text-sm"
                    >
                      View Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                      href="#contact"
                      className="px-7 py-3.5 border border-zinc-200 rounded-full font-semibold flex items-center justify-center hover:bg-zinc-50 transition-all text-sm"
                    >
                      Contact Me
                    </a>
                    <a
                      href={resumePdf}
                      download="Paul_Andre_Futol_CV_Complete.pdf"
                      className="px-7 py-3.5 border border-zinc-200 rounded-full font-semibold flex items-center justify-center hover:bg-zinc-50 transition-all text-sm"
                    >
                      ↓ Download CV
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Right — photo */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative order-1 lg:order-2 w-full h-[340px] sm:h-[440px] md:h-[620px] lg:h-full"
              >
                <div className="w-full h-full rounded-3xl overflow-hidden">
                  <img
                    src={paulPort}
                    alt="Paul Andre Futol"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Floating badges */}
                <motion.div
                  className="hidden md:flex absolute top-8 left-6 px-4 py-2 rounded-full bg-emerald-100 border border-emerald-300 text-xs font-bold uppercase tracking-[0.2em] text-emerald-800 shadow-md"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  Create
                </motion.div>
                <motion.div
                  className="hidden md:flex absolute top-24 right-6 px-4 py-2 rounded-full bg-sky-100 border border-sky-300 text-sky-800 text-xs font-bold uppercase tracking-[0.2em] shadow-md"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                >
                  Engage
                </motion.div>
                <motion.div
                  className="hidden md:flex absolute bottom-10 left-10 px-4 py-2 rounded-full bg-amber-100 border border-amber-300 text-xs font-bold uppercase tracking-[0.2em] text-amber-900 shadow-md"
                  animate={{ y: [0, -7, 0] }}
                  transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
                >
                  Convert
                </motion.div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ── METRICS STRIP ── */}
        <section className="py-16 bg-zinc-50 border-y border-zinc-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col"
                >
                  <div className="text-zinc-400 mb-3">{stat.icon}</div>
                  <span className="text-3xl md:text-4xl font-bold tracking-tight mb-1">{stat.value}</span>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SELECTED WORK ── */}
        <section id="work" className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between md:items-end mb-12 sm:mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-4">Selected Work</h2>
                <p className="text-lg sm:text-xl text-zinc-500">Real campaigns, real results — across content, paid media, and automation.</p>
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

            <div className="relative min-h-[auto] lg:min-h-[560px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCaseStudy}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35 }}
                  className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center"
                >
                  {/* Copy */}
                  <div className="order-2 lg:order-1">
                    <div className="flex flex-wrap gap-2 mb-5">
                      {activeStudy.tags.map(tag => (
                        <span key={tag} className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 bg-zinc-100 rounded text-zinc-500">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">{activeStudy.title}</h3>
                    <p className="text-lg text-zinc-400 mb-8 italic">{activeStudy.subtitle}</p>

                    <div className="space-y-7">
                      <div>
                        <h4 className="text-[10px] uppercase tracking-widest font-bold text-zinc-900 mb-2">Problem</h4>
                        <p className="text-zinc-600 leading-relaxed text-sm sm:text-base">{activeStudy.problem}</p>
                      </div>
                      <div>
                        <h4 className="text-[10px] uppercase tracking-widest font-bold text-zinc-900 mb-2">Strategy</h4>
                        <p className="text-zinc-600 leading-relaxed text-sm sm:text-base">{activeStudy.strategy}</p>
                      </div>
                      <div>
                        <h4 className="text-[10px] uppercase tracking-widest font-bold text-zinc-900 mb-3">Results</h4>
                        <ul className="space-y-2.5">
                          {activeStudy.results.map((r, i) => (
                            <li key={i} className="flex items-center gap-3 text-zinc-900 font-medium text-sm sm:text-base">
                              <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                              {r}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Visual card */}
                  <div className="order-1 lg:order-2">
                    <div className={`aspect-[4/3] rounded-3xl overflow-hidden relative bg-gradient-to-br ${activeTheme.gradient}`}>
                      <div className={`absolute -top-10 -right-10 h-44 w-44 rounded-full blur-3xl ${activeTheme.glow}`} />
                      <div className={`absolute -bottom-12 -left-10 h-48 w-48 rounded-full blur-3xl ${activeTheme.glow}`} />

                      <div className="relative h-full p-5 sm:p-6 lg:p-7 text-white flex flex-col justify-between">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-bold text-white/70">Case Architecture</span>
                          <span className={`text-xs sm:text-sm font-semibold ${activeTheme.accent}`}>Live Blueprint</span>
                        </div>

                        <div className="grid grid-cols-3 gap-2 sm:gap-3 text-[10px] sm:text-xs">
                          {activeStudy.tags.map(tag => (
                            <div key={tag} className={`rounded-xl bg-white/15 backdrop-blur-sm ring-1 ${activeTheme.ring} px-2 py-2 text-center font-semibold`}>
                              {tag}
                            </div>
                          ))}
                        </div>

                        <div className="grid grid-cols-3 gap-3 sm:gap-4 items-start">
                          <div className="rounded-2xl bg-white/12 ring-1 ring-white/30 p-3 sm:p-4">
                            <div className="flex items-center gap-2 mb-2">
                              <Target className="w-4 h-4" />
                              <span className="text-[10px] sm:text-xs uppercase tracking-wider font-bold">Problem</span>
                            </div>
                            <p className="text-[11px] sm:text-xs text-white/85 leading-relaxed">{summarize(activeStudy.problem, 62)}</p>
                          </div>
                          <div className="rounded-2xl bg-white/12 ring-1 ring-white/30 p-3 sm:p-4">
                            <div className="flex items-center gap-2 mb-2">
                              <Layers className="w-4 h-4" />
                              <span className="text-[10px] sm:text-xs uppercase tracking-wider font-bold">Strategy</span>
                            </div>
                            <p className="text-[11px] sm:text-xs text-white/85 leading-relaxed">{summarize(activeStudy.strategy, 62)}</p>
                          </div>
                          <div className="rounded-2xl bg-white/12 ring-1 ring-white/30 p-3 sm:p-4">
                            <div className="flex items-center gap-2 mb-2">
                              <TrendingUp className="w-4 h-4" />
                              <span className="text-[10px] sm:text-xs uppercase tracking-wider font-bold">Results</span>
                            </div>
                            <div className="space-y-1.5">
                              {activeStudy.results.slice(0, 3).map(r => (
                                <div key={r} className="rounded-lg bg-white/15 px-2 py-1.5 text-[10px] sm:text-[11px] font-semibold leading-snug">{r}</div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-[10px] sm:text-xs font-semibold text-white/80">
                          <span className="inline-block w-2 h-2 rounded-full bg-lime-300" />
                          Active and delivering results.
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Tab nav — bottom */}
              <div className="flex gap-3 mt-10">
                {caseStudies.map((s, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveCaseStudy(idx)}
                    className={`px-5 py-2 rounded-full text-xs font-semibold border transition-all ${
                      activeCaseStudy === idx
                        ? 'bg-zinc-900 text-white border-zinc-900'
                        : 'bg-white text-zinc-500 border-zinc-200 hover:border-zinc-300'
                    }`}
                  >
                    {s.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section id="process" className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 bg-zinc-900 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mb-12 sm:mb-16 lg:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-4">The Creative System</h2>
              <p className="text-lg sm:text-xl text-zinc-400">How I go from brief to results — across content, paid media, and automation.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
              {processSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="text-zinc-600 text-sm font-mono mb-8">0{i + 1}</div>
                  <div className="mb-6 text-zinc-400">{step.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-zinc-400 leading-relaxed text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TOOLS TICKER ── */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 border-b border-zinc-100 overflow-hidden">
          <div className="max-w-7xl mx-auto mb-10">
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-zinc-400 text-center">The Stack & Infrastructure</h2>
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
            <div className="flex overflow-hidden">
              <motion.div
                className="flex gap-12 whitespace-nowrap py-4"
                animate={{ x: [0, -1920] }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
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

        {/* ── PORTFOLIO ── */}
        <section id="portfolio" className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 bg-zinc-50 border-y border-zinc-100">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10 sm:mb-12">
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-zinc-400">My Work</span>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mt-3">
                View My <span className="text-zinc-400">Portfolio</span>
              </h2>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 p-8 sm:p-10 rounded-3xl border border-zinc-200 bg-white"
            >
              <div className="flex-1">
                <h3 className="text-2xl sm:text-3xl font-bold mb-3">
                  See My Full <span className="text-zinc-400">Portfolio Site</span>
                </h3>
                <p className="text-zinc-500 leading-relaxed mb-5 max-w-lg text-sm sm:text-base">
                  Brand video productions, Meta ad creatives, product photoshoots, Reels, graphic design, and marketing materials — the full range of creative and performance work.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Brand Video', 'Reels & Content', 'Meta Ad Creatives', 'Product Photoshoot', 'Graphic Design', 'Print & Catalogue'].map(tag => (
                    <span key={tag} className="text-xs font-semibold px-3 py-1.5 rounded-full border border-zinc-200 text-zinc-500">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href="https://drive.google.com/drive/folders/1z15Ce8WGwX-rbhyfYy6WGdud0Vy8pMOb"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-8 py-4 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-700 transition-all whitespace-nowrap flex-shrink-0 text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                View Portfolio
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section id="about" className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-start">
              <div className="lg:sticky lg:top-32">
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-6">
                  Creative first.<br />Results always.
                </h2>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/paul-andre-futol-01b7a1253/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full border border-zinc-200 hover:bg-zinc-50 transition-all"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="mailto:5.paulandrefutol@gmail.com" className="p-3 rounded-full border border-zinc-200 hover:bg-zinc-50 transition-all">
                    <Mail className="w-5 h-5" />
                  </a>
                  <a href="tel:+971502315266" className="p-3 rounded-full border border-zinc-200 hover:bg-zinc-50 transition-all">
                    <Phone className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="space-y-8 sm:space-y-10 text-lg sm:text-xl text-zinc-500 leading-relaxed">
                <p>
                  I create content that earns attention — Reels, ad creatives, event productions — and build the paid systems that turn that attention into{' '}
                  <span className="text-zinc-900 font-semibold">qualified leads and measurable ROI.</span>
                </p>
                <p>
                  Based in Dubai, currently managing <span className="text-zinc-900 font-semibold">6 brands across UAE, Australia, and New Zealand</span> — planning, producing, and publishing all social content while running AED 96K+ in Meta Ads simultaneously.
                </p>
                <div className="pt-4 grid sm:grid-cols-2 gap-6">
                  {testimonials.map((t, i) => (
                    <div key={i} className="p-5 rounded-2xl border border-zinc-100 bg-zinc-50">
                      <p className="text-base italic text-zinc-600 mb-3">"{t.quote}"</p>
                      <p className="text-xs uppercase tracking-widest font-bold text-zinc-400">— {t.author}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" className="py-24 sm:py-32 lg:py-40 px-4 sm:px-6 bg-zinc-50">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl md:text-8xl font-bold tracking-tight mb-10 sm:mb-12">
                Let's work<br />together.
              </h2>
              <div className="flex flex-col items-center gap-5 sm:gap-6">
                <a
                  href="mailto:5.paulandrefutol@gmail.com"
                  className="text-base sm:text-2xl md:text-4xl font-medium hover:text-zinc-500 transition-colors flex flex-col sm:flex-row items-center gap-3"
                >
                  <Mail className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0" />
                  5.paulandrefutol@gmail.com
                </a>
                <a
                  href="tel:+971502315266"
                  className="text-lg sm:text-2xl md:text-4xl font-medium hover:text-zinc-500 transition-colors flex flex-col sm:flex-row items-center gap-3"
                >
                  <Phone className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0" />
                  +971 50 231 5266
                </a>
              </div>
              <div className="mt-14 sm:mt-20">
                <p className="text-zinc-400 text-sm uppercase tracking-[0.4em] font-bold mb-8">Dubai, UAE · Available for Remote</p>
                <div className="w-px h-24 bg-zinc-200 mx-auto" />
              </div>
            </motion.div>
          </div>
        </section>

      </main>

      {/* ── FOOTER ── */}
      <footer className="py-10 sm:py-12 px-4 sm:px-6 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 text-center md:text-left text-sm text-zinc-400 font-medium">
          <p>© 2026 Paul Andre Futol. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            <a href="https://www.linkedin.com/in/paul-andre-futol-01b7a1253/" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 transition-colors">LinkedIn</a>
            <a href="https://www.instagram.com/gilanimobilitydubai/" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 transition-colors">Instagram</a>
            <a href="https://drive.google.com/drive/folders/1z15Ce8WGwX-rbhyfYy6WGdud0Vy8pMOb" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 transition-colors">Portfolio</a>
          </div>
        </div>
      </footer>

    </div>
  );
}