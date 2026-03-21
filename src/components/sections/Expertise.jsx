import React from 'react';
import { motion } from 'framer-motion';

const enterpriseTags = [
  'Microsoft Dynamics 365 CRM',
  'Power Platform',
  'CRMNEXT',
  'Pivotal CRM'
];

const cloudTags = [
  'Microsoft Azure (AZ-303 / AZ-304 Certified)',
  'AWS',
  'GitHub Copilot',
  'Microsoft Copilot',
  'Agentic AI',
  'Azure DevOps',
  'Azure Logic Apps'
];

const certs = [
  { code: 'AZ-303', desc: 'Microsoft Azure Architect Technologies' },
  { code: 'AZ-304', desc: 'Microsoft Azure Architect Design' },
  { code: 'AZ-900', desc: 'Azure Fundamentals' },
  { code: 'MB-600', desc: 'Dynamics 365 + Power Platform Solution Architect' },
  { code: 'MB-200', desc: 'Microsoft Power Platform + Dynamics 365 Core' },
  { code: '', desc: 'Leading with Analytics & Artificial Intelligence · Kellogg Executive Education (2020)' },
  { code: '', desc: 'Applied Machine Learning & Data Science · IIT Kanpur (2020)' }
];

const Expertise = () => {
  return (
    <section id="expertise" className="py-24 bg-[#0D1117] border-b border-border">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="mb-16 border-b border-border pb-6">
          <div className="font-mono text-xs text-cobalt uppercase tracking-[3px] mb-4">
            04 — Technical Depth
          </div>
          <h2 className="font-headline text-3xl md:text-4xl font-semibold text-white">
            What I Actually Know
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column: Platforms & Tags */}
          <div className="space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-mono text-[14px] text-amber uppercase tracking-[2px] mb-6">
                Enterprise Platforms
              </h3>
              <div className="flex flex-wrap gap-3">
                {enterpriseTags.map((tag, i) => (
                  <span key={i} className="bg-surface border border-border px-4 py-2 font-mono text-[13px] text-white">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="font-mono text-[14px] text-amber uppercase tracking-[2px] mb-6">
                Cloud & AI Platforms
              </h3>
              <div className="flex flex-wrap gap-3">
                {cloudTags.map((tag, i) => (
                  <span key={i} className="bg-surface border border-border px-4 py-2 font-mono text-[13px] text-white">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="font-mono text-[14px] text-cobalt uppercase tracking-[2px] mb-6">
                Certifications
              </h3>
              <ul className="space-y-4">
                {certs.map((cert, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    {cert.code && <span className="font-mono text-[12px] text-cobalt bg-surface px-2 py-1 rounded border border-border min-w-[70px] text-center">{cert.code}</span>}
                    <span className={`text-[14px] text-muted ${cert.code ? 'pt-1' : 'pl-[86px]'}`}>
                      {cert.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right Column: Python Sub-section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-[#0A1628] border border-border border-l-4 border-l-amber p-8 md:p-12 h-fit"
          >
            <div className="font-mono text-xs text-amber uppercase tracking-[2px] mb-6">
              Built With My Own Hands — Not Delegated
            </div>
            <h3 className="font-headline text-2xl font-bold text-white mb-4">
              Python (5+ Years Active)
            </h3>
            <p className="text-[15px] text-muted leading-relaxed mb-8">
              Five years of continuous, self-directed Python development for delivery automation, operational tooling, and data analysis. Every utility below was built and maintained personally.
            </p>
            <ul className="space-y-4 font-mono text-[13px] text-white opacity-90">
              <li className="flex gap-3 items-start relative">
                <span className="text-cobalt mt-0.5">&rarr;</span>
                <span className="leading-relaxed">Automated report generation from multi-source Excel inputs</span>
              </li>
              <li className="flex gap-3 items-start relative">
                <span className="text-cobalt mt-0.5">&rarr;</span>
                <span className="leading-relaxed">Billing invoice validation for T&M engagements (resource add/release reconciliation)</span>
              </li>
              <li className="flex gap-3 items-start relative">
                <span className="text-cobalt mt-0.5">&rarr;</span>
                <span className="leading-relaxed">Late Shift Fee upload-ready file generation for finance operations</span>
              </li>
              <li className="flex gap-3 items-start relative">
                <span className="text-cobalt mt-0.5">&rarr;</span>
                <span className="leading-relaxed">PDF extraction and processing utilities (PyPDF2)</span>
              </li>
              <li className="flex gap-3 items-start relative">
                <span className="text-cobalt mt-0.5">&rarr;</span>
                <span className="leading-relaxed">Data analysis and delivery metrics visualisation (Pandas, Matplotlib, Seaborn)</span>
              </li>
            </ul>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Expertise;
