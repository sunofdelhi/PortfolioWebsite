import React from 'react';
import { motion } from 'framer-motion';

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
              The right organisations know what they are looking for. If that is a delivery leader who builds from zero, governs at $25M+ scale, and stays close to the technical layer — let's talk.
            </p>
            <p>
              Open to conversations with organisations building delivery capability, shaping transformation programmes, or seeking leadership at the intersection of delivery governance and AI enablement.
            </p>
            <p>
              Based in Greater Noida, India. Open to relocation for the right role.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mt-12 pt-12 border-t border-border/50">
            <a href="mailto:gaurav@gauravsrivastava.com" className="font-mono text-[13px] text-white hover:text-cobalt transition-colors inline-flex items-center gap-2">
              <span className="text-muted text-[11px] uppercase tracking-[1px]">Email</span>
              Connect via Mail
            </a>
            <a href="https://linkedin.com/in/srivastavagaurav" target="_blank" rel="noopener noreferrer" className="font-mono text-[13px] text-white hover:text-cobalt transition-colors inline-flex items-center gap-2">
              <span className="text-muted text-[11px] uppercase tracking-[1px]">LinkedIn</span>
              srivastavagaurav
            </a>
            <a href="https://gauravsmind.substack.com/" target="_blank" rel="noopener noreferrer" className="font-mono text-[13px] text-white hover:text-amber transition-colors inline-flex items-center gap-2">
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
