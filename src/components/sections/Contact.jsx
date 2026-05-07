import { motion } from 'framer-motion';
import { trackEvent } from '../../utils/analytics';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-[#0D1117]">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="bg-[#0A1628] border border-border p-10 md:p-16 rounded shadow-xl"
        >
          <div className="font-mono text-xs text-cobalt uppercase tracking-[3px] mb-6">
            06 — Contact
          </div>
          
          <h2 className="font-headline text-3xl md:text-4xl font-semibold text-white mb-8">
            Available for the Right Conversations
          </h2>
          
          <div className="text-[15px] text-muted leading-relaxed space-y-6 max-w-2xl mx-auto mb-12">
            <p>
              I&apos;m drawn to hard delivery problems — the ones where the answer isn&apos;t obvious and the stakes are real. If you&apos;re building something at that level, I&apos;d like to hear about it.
            </p>
            <p>
              The conversations I find most interesting are about delivery at scale, AI enablement in engineering teams, and building organisations from zero. Reach out if any of that overlaps with what you&apos;re working on.
            </p>
            <p>
              Based in Greater Noida, India. Open to the right conversation anywhere.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mt-12 pt-12 border-t border-border/50">
            <a 
              href="mailto:gaurav@gauravsrivastava.com" 
              onClick={() => trackEvent('Contact', 'Click', 'Email')}
              className="font-mono text-[13px] text-white hover:text-cobalt transition-colors inline-flex items-center gap-2"
            >
              <span className="text-muted text-[11px] uppercase tracking-[1px]">Email</span>
              Connect via Mail
            </a>
            <a 
              href="https://linkedin.com/in/srivastavagaurav" 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={() => trackEvent('Social', 'Click', 'LinkedIn')}
              className="font-mono text-[13px] text-white hover:text-cobalt transition-colors inline-flex items-center gap-2"
            >
              <span className="text-muted text-[11px] uppercase tracking-[1px]">LinkedIn</span>
              srivastavagaurav
            </a>
            <a 
              href="https://gauravsmind.substack.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={() => trackEvent('Social', 'Click', 'Substack')}
              className="font-mono text-[13px] text-white hover:text-amber transition-colors inline-flex items-center gap-2"
            >
              <span className="text-muted text-[11px] uppercase tracking-[1px]">Substack</span>
              Read the Journal
            </a>
          </div>

        </motion.div>
        
      </div>
    </section>
  );
};

export default Contact;
