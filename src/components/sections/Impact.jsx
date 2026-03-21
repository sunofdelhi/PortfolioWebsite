import { motion } from 'framer-motion';

const impactCards = [
  {
    stat: '0 → 120+',
    title: 'Greenfield Account Build in 18 Months',
    body: 'Built a complete delivery organisation from zero at a $30B+ global reinsurance group — from first hire to 120+ professionals with full P&L accountability. Expansion roadmap approved to 150+ by Sep 2026.'
  },
  {
    stat: '24% → 28%',
    title: 'Gross Margin Improvement — $10M+ Portfolio',
    body: 'Improved gross margin by 4 percentage points on a $10M+ fixed-price portfolio through cost leakage prevention, rate-card optimisation, and pyramid mix realignment. Margin discipline treated as a people and process decision, not just a financial one.'
  },
  {
    stat: '9%',
    title: 'Industry-Low Attrition — Sustained Over 2 Years',
    body: 'Sustained 9% team attrition across 140+ professionals over two years against an industry average of 18–22%. Achieved through structured mentoring, leadership pipeline development, and bench readiness programs — not perks.'
  },
  {
    stat: '30–35',
    title: 'Enterprise Applications Modernised — Azure at Scale',
    body: 'Led Azure cloud modernisation for 30–35 enterprise applications at a major US insurance group, including Data Lake implementation. Governed 120–140 resources across US onshore and India offshore delivery with full SteerCo and QBR accountability.'
  }
];

const Impact = () => {
  return (
    <section id="impact" className="py-24 bg-surface border-b border-border">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="mb-16 border-b border-border pb-6">
          <div className="font-mono text-xs text-cobalt uppercase tracking-[3px] mb-4">
            03 — Proof of Impact
          </div>
          <h2 className="font-headline text-3xl md:text-4xl font-semibold text-white">
            Five Signature Achievements
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {impactCards.map((card, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#0A1628] border border-border p-8 py-10 rounded hover:-translate-y-1 hover:border-cobalt transition-all duration-300 shadow-xl"
            >
              <div className="font-mono text-3xl font-bold text-amber mb-4">{card.stat}</div>
              <h4 className="font-bold text-white text-[16px] mb-4">{card.title}</h4>
              <p className="text-muted text-[14px] leading-relaxed">
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 5th Card, Full Width */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-[#0A1628] border border-border border-l-[4px] border-l-cobalt p-8 md:p-12 rounded shadow-xl"
        >
          <div className="font-mono text-xl font-bold text-[#60A5FA] mb-2 tracking-tight">
            Technical Proximity — Where It Counts
          </div>
          <h4 className="font-bold text-white text-[18px] mb-6 max-w-2xl">
            Two Production-Critical Interventions That Define the Leadership Philosophy
          </h4>
          <div className="text-[15px] space-y-6 max-w-4xl">
            <p className="text-muted leading-relaxed">
              <strong className="text-white font-semibold">Oracle Insbridge — Global Reinsurance Account:</strong> When a senior developer was blocked on installing the Oracle Insbridge Rating Engine across all environments, stepped in directly. Three weeks of systematic debugging. Successful installation achieved. SOP written and now used as the standard reference across the account.
            </p>
            <p className="text-muted leading-relaxed">
              <strong className="text-white font-semibold">Node.js — US Insurance Cloud Migration:</strong> With zero prior Node.js experience, resolved a production-critical cloud migration issue through first-principles debugging. The developer was unblocked. The delivery milestone held.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Impact;
