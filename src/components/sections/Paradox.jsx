import { motion } from 'framer-motion';

const Paradox = () => {
  return (
    <section id="paradox" className="py-24 bg-surface border-y border-border">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Narrative */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-3/5"
          >
            <div className="font-mono text-xs text-cobalt uppercase tracking-[3px] mb-6">
              01 — Who I Am
            </div>
            
            <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-semibold mb-10 leading-tight text-white">
              The Delivery Leader Who Never Left the Engine Room
            </h2>
            
            <div className="space-y-6 font-body text-[16px] text-muted leading-relaxed max-w-xl">
              <p>
                Most delivery leaders move away from the technical layer as they rise. I moved differently.
              </p>
              <p>
                For 23 years, I have stayed close to the work — not as a developer, but as someone who understands the technical challenges deeply enough to make better governance decisions. When a senior developer at a $30B global reinsurance group was blocked on an Oracle Insbridge installation, I invested three weeks debugging it myself and built the SOP that now defines the standard across the account. When a production-critical Node.js issue blocked a large-scale cloud migration programme, I stepped in with zero prior Node.js experience and resolved it.
              </p>
              <p>
                This is not a hobby. It is a deliberate leadership philosophy.
              </p>
              <p>
                I own a $25M+ delivery portfolio, lead 140+ professionals across four geographies, and chair SteerCos with CXO stakeholders at global financial institutions. The technical proximity is what makes the governance credible. It is why the attrition is 9% in an industry that averages 18–22%.
              </p>
              <p className="font-semibold text-white">
                I build organisations. Then I build the people inside them.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Visual & Quote */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-2/5 flex flex-col gap-10"
          >
            <div className="relative aspect-[4/5] bg-[#0A1628] border border-border overflow-hidden rounded">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] to-transparent z-10 opacity-60"></div>
              {/* Professional headshot uploaded by Gaurav */}
              <img 
                src="/gaurav.png" 
                alt="Gaurav Srivastava"
                className="w-full h-full object-cover grayscale brightness-90 contrast-110"
              />
            </div>
            
            <blockquote className="pl-6 border-l-4 border-cobalt">
              <p className="font-headline text-xl md:text-2xl text-white leading-snug">
                "I have chaired SteerCos at $30B firms and debugged production code at midnight. I believe each makes me better at the other."
              </p>
            </blockquote>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Paradox;
