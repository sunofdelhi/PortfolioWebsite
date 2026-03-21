import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const povs = [
  {
    id: 1,
    title: 'AI Enablement in Delivery Teams',
    body: `Most organisations treat AI adoption as a tooling initiative. They measure adoption rates and certification counts. That is the wrong metric.

The right metric is margin. GitHub Copilot has value when it reduces the time to close a sprint, improves code review quality, and allows you to do more with the same pyramid. I position AI as a productivity and margin lever — not a transformation programme.

The teams that win with AI are not the ones with the most tools. They are the ones with the clearest guardrails, the best-defined use cases, and a leader who has actually used the tools themselves.`
  },
  {
    id: 2,
    title: 'Building Accounts from Zero',
    body: `Greenfield accounts are won on trust before they are won on capability. The client has no prior reference for how you operate. Everything you do in the first 90 days becomes the permanent standard they measure you against.

I have built a $10M+ account from zero at a $30B+ global reinsurance group in under 18 months. The first decision I make on any greenfield is the governance model — RAID, escalation paths, financial controls. Not the team size.

The account that is tightly governed from week one grows faster than the account that grows first and governs later. Margin discipline is much easier to install at the beginning than to recover after the fact.`
  },
  {
    id: 3,
    title: 'Why Margin Discipline Is a People Decision',
    body: `Most delivery leaders treat margin as a finance problem. They optimise rate cards and billing cycles. That recovers 1–2 points at best.

The real margin lever is pyramid mix. The ratio of seniors to juniors on a programme, the cost of attrition-driven replacement, the billable utilisation of bench resources — these are people decisions, not finance decisions. I improved gross margin from 24% to 28% on a $10M+ portfolio. The largest driver was pyramid realignment, not rate negotiation.

Attrition at 9% versus an industry average of 18–22% is not a culture initiative. It is a margin strategy. Every avoided replacement saves one to two months of productivity, onboarding cost, and client relationship risk.`
  }
];

const ThoughtLeadership = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section id="thought-leadership" className="py-24 bg-surface border-b border-border">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="mb-16 border-b border-border pb-6">
          <div className="font-mono text-xs text-cobalt uppercase tracking-[3px] mb-4">
            05 — How I Think
          </div>
          <h2 className="font-headline text-3xl md:text-4xl font-semibold text-white">
            Three POV Statements
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Tabs */}
          <div className="lg:w-1/3 flex flex-col gap-4">
            {povs.map(pov => (
              <button
                key={pov.id}
                onClick={() => setActiveTab(pov.id)}
                className={`text-left font-mono text-[13px] uppercase tracking-[1px] p-6 border ${activeTab === pov.id ? 'bg-[#0A1628] border-cobalt text-white' : 'border-border text-muted hover:text-white hover:border-slate-500'} transition-all duration-300`}
              >
                {pov.title}
              </button>
            ))}
          </div>

          {/* Expanded Content */}
          <div className="lg:w-2/3 bg-[#0A1628] border border-border p-8 md:p-12 min-h-[350px]">
            <AnimatePresence mode="wait">
              {povs.map(pov => pov.id === activeTab && (
                <motion.div
                  key={pov.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="h-full flex flex-col justify-between"
                >
                  <div className="text-[16px] text-muted leading-relaxed space-y-6 mb-12" style={{ whiteSpace: 'pre-line' }}>
                    {pov.body}
                  </div>
                  
                  <div>
                    {/* Placeholder Substack link */}
                    <a 
                      href="https://gauravsmind.substack.com/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[2px] text-amber hover:text-white transition-colors py-2"
                    >
                      Read the full thinking on Substack &rarr;
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ThoughtLeadership;
