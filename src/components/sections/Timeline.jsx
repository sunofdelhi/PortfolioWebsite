import { motion } from 'framer-motion';

const arcItems = [
  {
    year: '2004',
    title: 'First International Offshore Delivery Model',
    metric: 'India → UK · Foundational delivery structure',
    body: 'Established the first cross-geography delivery model between India and UK. I defined the team structure, RACI frameworks, and onboarding protocols that became the operating standard.'
  },
  {
    year: '2008',
    title: '₹200M Banking Deal — Cost-Benefit Analysis',
    metric: 'Indian Banking Sector · 16 applications · ₹200M savings',
    body: 'I conducted a cost-benefit analysis for consolidating 16 banking applications at a leading Indian bank. My analysis secured the deal, delivering savings of ₹200M for the client.'
  },
  {
    year: '2017',
    title: 'Enterprise CRM Architecture at Scale',
    metric: 'Accenture · Fortune 500 · 4 geographies',
    body: 'I progressed to Global D365 CRM Architect responsibility across multiple countries and business units at a Fortune 500 automotive client. I led the technical design and delivery governance simultaneously while managing Accenture-side programme delivery.'
  },
  {
    year: '2021',
    title: 'Global CRM Architect — Fortune 500 Automotive',
    metric: 'Accenture · 8 years · 4 geographies',
    body: 'I progressed from Technical Lead to Global D365 CRM Architect for a Fortune 500 automotive client while simultaneously owning Accenture-side delivery management. I designed a scalable CRM architecture across multiple geographies and business units.'
  },
  {
    year: '2022',
    title: '$15M+ Cloud Modernisation Portfolio',
    metric: 'US Insurance · 120–140 resources · 30–35 applications',
    body: 'I jointly governed $15M+ delivery portfolio at a major US insurance group. I led the Azure cloud modernisation for 30–35 enterprise applications including Data Lake implementation. I chaired SteerCo and QBR forums with CXO leadership.'
  },
  {
    year: '2024',
    title: 'Greenfield to $10M — Built from Zero',
    metric: '$30B+ Global Reinsurance Group · 0 → 120+ professionals',
    body: 'I built the account from zero resources to 120+ professionals in under 18 months. I own the $10M+ fixed-price portfolio. I improved the gross margin from 24% to 28%. Expansion roadmap approved to 150+ by Sep 2026.'
  }
];

const Timeline = () => {
  return (
    <section id="timeline" className="py-24 bg-[#0D1117] border-b border-border">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="mb-16 border-b border-border pb-6">
          <div className="font-mono text-xs text-cobalt uppercase tracking-[3px] mb-4">
            02 — Career Arc
          </div>
          <h2 className="font-headline text-3xl md:text-4xl font-semibold text-white">
            A Story of Compounding Impact
          </h2>
        </div>

        <div className="max-w-4xl">
          {arcItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col md:flex-row gap-6 md:gap-12 mb-12 last:mb-0"
            >
              <div className="font-mono text-[16px] text-cobalt font-bold md:w-20 pt-1">
                {item.year}
              </div>
              <div className="bg-surface border border-border p-6 md:p-8 rounded flex-1 group hover:border-slate-500 transition-colors">
                <h4 className="font-bold text-white text-[17px] mb-2">{item.title}</h4>
                <div className="text-amber font-mono text-[13px] mb-4">{item.metric}</div>
                <p className="text-muted text-[15px] leading-relaxed">
                  {item.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
