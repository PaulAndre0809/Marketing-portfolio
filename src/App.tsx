/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import paulPort from '../paul_port.png';
import resumePdf from '../Paul_Andre_Futol_Resume_Final.pdf';
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
  MessageCircle,
  Star,
} from 'lucide-react';

// ─── DATA ────────────────────────────────────────────────────────────────────

const stats = [
  {
    label: 'Ad Spend Managed',
    value: 'AED 96K+',
    context: 'Across multi-country campaigns',
    icon: <BarChart3 className="w-5 h-5" />,
  },
  {
    label: 'Leads Generated',
    value: '15,675+',
    context: 'From paid ads & automated funnels',
    icon: <Target className="w-5 h-5" />,
  },
  {
    label: 'Facebook Views',
    value: '1M+',
    context: '27.7% month-over-month growth',
    icon: <TrendingUp className="w-5 h-5" />,
  },
  {
    label: 'Website Active Users',
    value: '175K',
    context: 'Tracked in GA4 · 1m 03s avg. engagement',
    icon: <MousePointer2 className="w-5 h-5" />,
  },
  {
    label: 'Avg CPL',
    value: 'AED 6.16',
    context: 'Best: AED 2.90 across all campaigns',
    icon: <Zap className="w-5 h-5" />,
  },
  {
    label: 'Lead Response Time',
    value: '<2 min',
    context: 'Via automation & CRM integration',
    icon: <MessageCircle className="w-5 h-5" />,
  },
];

const services = [
  {
    number: '01',
    title: 'Lead Generation & Paid Ads',
    description:
      'Meta Ads campaign setup, audience targeting, funnel optimization, and creative testing — built to bring in qualified leads at the lowest possible cost.',
    result: 'More qualified leads, lower CPL',
    tools: ['Meta Ads', 'Google Ads', 'A/B Testing', 'Pixel Setup'],
    accent: 'from-sky-500 to-blue-600',
  },
  {
    number: '02',
    title: 'Email Marketing Strategy',
    description:
      'End-to-end email campaign planning and execution — from audience segmentation, trigger-based flows, and scheduling to A/B testing subject lines and creatives that lift open rates and drive conversions.',
    result: 'Higher open rates, measurable revenue',
    tools: ['Brevo', 'Mailchimp', 'HubSpot', 'A/B Testing', 'Segmentation'],
    accent: 'from-rose-500 to-pink-600',
  },
  {
    number: '03',
    title: 'Lead Handling & Automation',
    description:
      'CRM setup, WhatsApp API, and ManyChat automation flows that instantly capture, qualify, and route leads — so no prospect falls through the cracks.',
    result: 'Faster response, zero missed leads',
    tools: ['ManyChat', 'WhatsApp API', 'HubSpot', 'CRM'],
    accent: 'from-emerald-500 to-teal-600',
  },
  {
    number: '04',
    title: 'Content & Creative',
    description:
      'Reels, Stories, ad creatives, and event productions built to stop the scroll and drive action — across multiple brands simultaneously.',
    result: 'Content that earns attention & converts',
    tools: ['CapCut', 'Adobe Suite', 'Canva', 'Video Production'],
    accent: 'from-amber-500 to-orange-600',
  },
  {
    number: '05',
    title: 'Tracking & Optimisation',
    description:
      'GA4, Looker Studio, and Meta Ads Manager dashboards that turn raw data into clear decisions — from killing underperformers to doubling down on winners.',
    result: 'Better decisions, consistently lower CPL',
    tools: ['GA4', 'Looker Studio', 'Meta Ads Manager', 'Reporting'],
    accent: 'from-violet-500 to-fuchsia-600',
  },
];

const caseStudies = [
  {
    id: 'gilani',
    title: 'Gilani Mobility',
    subtitle: 'Multi-brand content & paid strategy across 3 countries',
    problem:
      'Managing 6 brand identities simultaneously across UAE, Australia, and New Zealand — with inconsistent content quality and a high CPL that was bleeding budget.',
    solution:
      'Built a unified content calendar, deployed a platform-specific Reels strategy, and ran systematic A/B tests on Meta Ads — shifting budget from Facebook Reels (CTR 0.96%) to Instagram Stories (CTR 3.65%) once data confirmed the winner.',
    results: [
      '100% Instagram views growth · +135% IG link clicks (Jan–May)',
      '1M+ Facebook views · 27.7% month-over-month growth',
      '40% CPL reduction through creative testing & channel shift',
      'IMAGINE Show (DFC Dubai) & AccessAbilities Expo campaigns executed end-to-end',
    ],
    tags: ['Content Strategy', 'Meta Ads', 'Multi-Brand', 'Video Production'],
  },
  {
    id: 'we-aspire',
    title: 'We Aspire',
    subtitle: 'Lead generation at scale with verified ROI',
    problem:
      'Needed rapid lead volume for vocational training courses while hitting strict cost targets in a competitive UAE market — with full CRM traceability from click to closed sale.',
    solution:
      'Built course-specific creatives for each placement, ran Instant Form campaigns, and deployed a bilingual EN/AR ManyChat automation flow to qualify and route leads to the sales team instantly — no manual handling.',
    results: [
      'Best campaign: AED 2.90 CPL · 286 leads · 209K impressions',
      'Welding promo: AED 3.52 CPL · 314 leads',
      'Barista promo: AED 3.48 CPL · 129 leads',
      '5,336 CRM leads · 278 closed sales tracked in Looker Studio',
    ],
    tags: ['Meta Ads', 'Lead Generation', 'ManyChat', 'CRM'],
  },
  {
    id: 'us-client',
    title: 'US-Based Client',
    subtitle: 'Email marketing specialist for a US client',
    problem:
      'A US-based client needed a reliable email marketing partner to improve campaign execution, customer engagement, and conversion performance across key lifecycle communications.',
    solution:
      'Worked as an Email Marketing Specialist managing campaign setup, audience segmentation, automated flows, and performance optimization — making sure messages were sent on time, tailored to the right audience, and aligned with conversion goals.',
    results: [
      'Built and managed email campaigns for a US-based client with a strong emphasis on audience targeting and timing',
      'Improved campaign quality through segmentation, testing, and lifecycle email optimization',
      'Supported lead nurturing and re-engagement efforts with more structured customer journeys',
      'Helped streamline communication workflows for better engagement and conversion opportunities',
    ],
    tags: ['Email Marketing', 'Segmentation', 'Lifecycle Emails', 'Campaign Optimization'],
  },
  {
    id: 'fullbeauty',
    title: 'Fullbeauty Brands',
    subtitle: 'Email marketing at enterprise scale — 3 years, zero missed sends',
    problem:
      'A portfolio of US plus-size fashion e-commerce brands needed high-volume, on-schedule email campaigns that converted across diverse customer segments — with zero tolerance for deployment errors and constant pressure to improve open rates and revenue per send.',
    solution:
      'Managed end-to-end campaign execution using Epsilon as the CRM platform — building audience segments, configuring trigger-based automated flows (cart abandonment, re-engagement, lifecycle nurturing), scheduling across the full send calendar, and running systematic A/B tests on subject lines and creatives to identify what moved the needle per brand and product line.',
    results: [
      '100% on-time deployment across all campaigns — zero missed sends over 3 years',
      '15% increase in email open rates through subject line A/B testing & segmentation',
      'Trigger-based flows built for cart abandonment, re-engagement & lifecycle nurturing',
      'Personalized multi-product-line campaigns driving consistent conversion lifts',
    ],
    tags: ['Email Marketing', 'Epsilon CRM', 'A/B Testing', 'Segmentation'],
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
  'us-client': {
    gradient: 'from-indigo-500 via-violet-500 to-purple-700',
    glow: 'bg-violet-300/40',
    ring: 'ring-violet-200/60',
    accent: 'text-violet-100',
  },
  fullbeauty: {
    gradient: 'from-rose-500 via-pink-500 to-fuchsia-700',
    glow: 'bg-rose-300/40',
    ring: 'ring-rose-200/60',
    accent: 'text-rose-100',
  },
};

const processSteps = [
  {
    title: 'Research & Targeting',
    description:
      'Audience psychology, competitor content gaps, and platform-specific trends — finding where attention is and how to earn it.',
    icon: <Target className="w-6 h-6" />,
  },
  {
    title: 'Content & Creative',
    description:
      'Concept, shoot, edit — Reels, Stories, ad creatives, and event production built to stop the scroll and drive action.',
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: 'Paid & Automation',
    description:
      'Meta Ads campaigns paired with ManyChat flows that convert clicks into qualified leads with zero manual friction.',
    icon: <Cpu className="w-6 h-6" />,
  },
  {
    title: 'Analyse & Scale',
    description:
      'GA4, Looker Studio, and Meta Ads Manager data drives every decision — from killing underperformers to doubling down on winners.',
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
    stars: 5,
  },
  {
    quote: 'He managed our content across two brands, built Reels that consistently outperformed everything before, and delivered reports I could act on.',
    author: 'General Manager, Gilani Group',
    stars: 5,
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
            <a href="#services"  className="hover:text-zinc-900 transition-colors">Services</a>
            <a href="#about"     className="hover:text-zinc-900 transition-colors">About</a>
            <a
              href="https://viber.click/639499315451"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-zinc-900 text-white rounded-full hover:bg-zinc-700 transition-all text-sm flex items-center gap-2"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Viber Me
            </a>
          </div>
          <a
            href="https://viber.click/639499315451"
            target="_blank"
            rel="noopener noreferrer"
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
                    Social Media &amp; Marketing Specialist · Philippines
                  </span>

                  <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[64px] font-bold tracking-tight leading-[0.95] mb-5 sm:mb-7 text-balance">
                    Marketing systems that bring in leads — and turn them into{' '}
                    <span className="text-zinc-400">customers.</span>
                  </h1>

                  <p className="text-base sm:text-lg text-zinc-500 leading-relaxed mb-4 sm:mb-5">
                    I help businesses run ads, automate lead follow-up, and track performance so{' '}
                    <span className="text-zinc-900 font-semibold">nothing slips through the cracks.</span>{' '}
                    Previously managed{' '}
                    <span className="text-zinc-900 font-semibold">6 brands across UAE, Australia, and New Zealand</span>{' '}
                    — generating 15,675+ leads with an average CPL of AED 6.16.
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
                      href="https://viber.click/639499315451"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group px-7 py-3.5 bg-zinc-900 text-white rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-zinc-700 transition-all text-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Viber Me
                    </a>
                    <a
                      href="#work"
                      className="group px-7 py-3.5 border border-zinc-200 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-zinc-50 transition-all text-sm"
                    >
                      See My Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                      href={resumePdf}
                      download="Paul_Andre_Futol_Resume_Final.pdf"
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
                  AED 2.90 Best CPL
                </motion.div>
                <motion.div
                  className="hidden md:flex absolute top-24 right-6 px-4 py-2 rounded-full bg-sky-100 border border-sky-300 text-sky-800 text-xs font-bold uppercase tracking-[0.2em] shadow-md"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                >
                  15,675+ Leads
                </motion.div>
                <motion.div
                  className="hidden md:flex absolute bottom-10 left-10 px-4 py-2 rounded-full bg-amber-100 border border-amber-300 text-xs font-bold uppercase tracking-[0.2em] text-amber-900 shadow-md"
                  animate={{ y: [0, -7, 0] }}
                  transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
                >
                  &lt;2 Min Response
                </motion.div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ── METRICS STRIP ── */}
        <section className="py-16 bg-zinc-50 border-y border-zinc-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 md:gap-10">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex flex-col"
                >
                  <div className="text-zinc-400 mb-3">{stat.icon}</div>
                  <span className="text-2xl md:text-3xl font-bold tracking-tight mb-1">{stat.value}</span>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-900 mb-1">{stat.label}</span>
                  <span className="text-[11px] text-zinc-400 leading-snug">{stat.context}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW I HELP ── */}
        <section id="services" className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mb-12 sm:mb-16">
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-zinc-400">What I Do</span>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mt-3 mb-4">
                How I Help Your <span className="text-zinc-400">Business</span>
              </h2>
              <p className="text-lg sm:text-xl text-zinc-500">
                Every service is built around one thing: measurable outcomes. Not tools. Not tasks. Results.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group p-7 sm:p-8 rounded-3xl border border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-xs font-mono text-zinc-300 font-bold">{service.number}</span>
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-white bg-gradient-to-r ${service.accent}`}>
                      <CheckCircle2 className="w-3 h-3" />
                      {service.result}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-zinc-500 leading-relaxed text-sm sm:text-base mb-5">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.tools.map(tool => (
                      <span key={tool} className="text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 bg-zinc-100 text-zinc-500 rounded-md">
                        {tool}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SELECTED WORK ── */}
        <section id="work" className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 bg-zinc-50 border-y border-zinc-100">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between md:items-end mb-12 sm:mb-16 gap-6">
              <div className="max-w-2xl">
                <span className="text-xs uppercase tracking-[0.3em] font-bold text-zinc-400">Case Studies</span>
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mt-3 mb-4">Selected Work</h2>
                <p className="text-lg sm:text-xl text-zinc-500">Real campaigns. Real results. Every number is verifiable.</p>
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
                        <span key={tag} className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 bg-zinc-200 rounded text-zinc-600">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">{activeStudy.title}</h3>
                    <p className="text-lg text-zinc-400 mb-8 italic">{activeStudy.subtitle}</p>

                    <div className="space-y-7">
                      <div className="pl-4 border-l-2 border-red-200">
                        <h4 className="text-[10px] uppercase tracking-widest font-bold text-red-500 mb-2">The Problem</h4>
                        <p className="text-zinc-600 leading-relaxed text-sm sm:text-base">{activeStudy.problem}</p>
                      </div>
                      <div className="pl-4 border-l-2 border-blue-200">
                        <h4 className="text-[10px] uppercase tracking-widest font-bold text-blue-500 mb-2">What I Built</h4>
                        <p className="text-zinc-600 leading-relaxed text-sm sm:text-base">{activeStudy.solution}</p>
                      </div>
                      <div className="pl-4 border-l-2 border-emerald-300">
                        <h4 className="text-[10px] uppercase tracking-widest font-bold text-emerald-600 mb-3">The Result</h4>
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
                          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-bold text-white/70">Campaign Blueprint</span>
                          <span className={`text-xs sm:text-sm font-semibold ${activeTheme.accent}`}>Live & Verified</span>
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
                              <span className="text-[10px] sm:text-xs uppercase tracking-wider font-bold">Built</span>
                            </div>
                            <p className="text-[11px] sm:text-xs text-white/85 leading-relaxed">{summarize(activeStudy.solution, 62)}</p>
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
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-4">The System</h2>
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
        <section id="portfolio" className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 border-b border-zinc-100">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10 sm:mb-12">
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-zinc-400">Creative Work</span>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mt-3">
                View My <span className="text-zinc-400">Portfolio</span>
              </h2>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 p-8 sm:p-10 rounded-3xl border border-zinc-200 bg-zinc-50"
            >
              <div className="flex-1">
                <h3 className="text-2xl sm:text-3xl font-bold mb-3">
                  See My Full <span className="text-zinc-400">Creative Work</span>
                </h3>
                <p className="text-zinc-500 leading-relaxed mb-5 max-w-lg text-sm sm:text-base">
                  Brand video productions, Meta ad creatives, product photoshoots, Reels, graphic design, and marketing materials — the full range of creative and performance work.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Brand Video', 'Reels & Content', 'Meta Ad Creatives', 'Product Photoshoot', 'Graphic Design', 'Print & Catalogue'].map(tag => (
                    <span key={tag} className="text-xs font-semibold px-3 py-1.5 rounded-full border border-zinc-200 bg-white text-zinc-500">
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
                  Not a task-taker.<br /><span className="text-zinc-400">A results-builder.</span>
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
                  <a href="tel:+639499315451" className="p-3 rounded-full border border-zinc-200 hover:bg-zinc-50 transition-all">
                    <Phone className="w-5 h-5" />
                  </a>
                  <a
                    href="https://viber.click/639499315451"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full border border-zinc-200 hover:bg-zinc-50 transition-all"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="space-y-8 sm:space-y-10 text-lg sm:text-xl text-zinc-500 leading-relaxed">
                <p>
                  I build marketing systems — not just run campaigns. That means ads, automation, CRM, and reporting working together so{' '}
                  <span className="text-zinc-900 font-semibold">every lead is captured, followed up, and tracked to a closed sale.</span>
                </p>
                <p>
                  Based in the Philippines, currently managing <span className="text-zinc-900 font-semibold">6 brands across UAE, Australia, and New Zealand</span> — planning, producing, and publishing all social content while running AED 96K+ in Meta Ads simultaneously.
                </p>
                <p className="text-base sm:text-lg">
                  If you're getting leads but not converting them, or running ads but not tracking what works — that's exactly what I fix.
                </p>
                <div className="pt-4 grid sm:grid-cols-2 gap-6">
                  {testimonials.map((t, i) => (
                    <div key={i} className="p-5 rounded-2xl border border-zinc-100 bg-zinc-50">
                      <div className="flex gap-0.5 mb-3">
                        {Array.from({ length: t.stars }).map((_, s) => (
                          <Star key={s} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
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
        <section id="contact" className="py-24 sm:py-32 lg:py-40 px-4 sm:px-6 bg-zinc-900 text-white">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-3 py-1 rounded-full bg-zinc-800 text-zinc-400 text-[10px] font-bold uppercase tracking-[0.24em] mb-8">
                Ready When You Are
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-8xl font-bold tracking-tight mb-6 sm:mb-8">
                Let's build your<br />lead system.
              </h2>
              <p className="text-zinc-400 text-lg sm:text-xl max-w-xl mx-auto mb-12 sm:mb-14">
                Send me a message and I'll respond within 24 hours. Let's figure out how I can help your business grow.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
                <a
                  href="https://viber.click/639499315451"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-4 bg-white text-zinc-900 rounded-full font-semibold flex items-center gap-3 hover:bg-zinc-100 transition-all text-base"
                >
                  <MessageCircle className="w-5 h-5" />
                  Viber Me
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="mailto:5.paulandrefutol@gmail.com"
                  className="group px-8 py-4 border border-zinc-700 text-white rounded-full font-semibold flex items-center gap-3 hover:border-zinc-500 transition-all text-base"
                >
                  <Mail className="w-5 h-5" />
                  5.paulandrefutol@gmail.com
                </a>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-zinc-500 text-sm">
                <a href="tel:+639499315451" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                  +63 949 931 5451
                </a>
                <span className="hidden sm:block">·</span>
                <span>Philippines · Available for Remote</span>
                <span className="hidden sm:block">·</span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Open to new clients
                </span>
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
            <a href="https://drive.google.com/drive/folders/1z15Ce8WGwX-rbhyfYy6WGdud0Vy8pMOb" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 transition-colors">Portfolio</a>
            <a href="https://viber.click/639499315451" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 transition-colors">Viber</a>
          </div>
        </div>
      </footer>

    </div>
  );
}