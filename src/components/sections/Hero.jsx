import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { trackEvent } from '../../utils/analytics';

// Quick counter hook for stat animation
const useCounter = (end, duration = 1200) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // ease-out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return count;
};

const AnimatedStat = ({ end, prefix = "", suffix = "", label, delay = 0 }) => {
  const [startAnim, setStartAnim] = useState(false);
  const count = useCounter(startAnim ? end : 0, 1200);

  useEffect(() => {
    const timer = setTimeout(() => setStartAnim(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className="bg-[#0A1628] border border-border p-6 rounded text-center h-full">
      <div className="text-3xl lg:text-4xl text-cobalt font-bold font-mono mb-1">
        {prefix}{count}{suffix}
      </div>
      <div className="text-[11px] text-muted uppercase tracking-[1px] mt-2">
        {label}
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center pt-24 pb-12 overflow-hidden bg-[#0D1117]">
      <div className="absolute inset-0 noise-overlay z-0"></div>
      
      <div className="max-w-6xl mx-auto px-6 lg:px-12 w-full relative z-10 flex flex-col justify-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary-text mb-6 leading-[1.1]">
            I build delivery organisations from zero.<br/>
            <span className="text-muted font-normal italic">Then I scale them.</span>
          </h1>
          
          <p className="font-body text-lg md:text-xl text-muted max-w-2xl leading-relaxed mb-12">
            Senior Delivery Director · 23 years in enterprise IT · Currently leading $25M+ portfolios at Coforge across US insurance and reinsurance accounts. I&apos;m drawn to hard delivery problems — the ones where the answer isn&apos;t obvious and the stakes are real. If you&apos;re building something at that level, I&apos;d like to hear about it.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-16">
            <button 
              onClick={() => {
                trackEvent('Hero', 'Click', 'See The Work');
                document.getElementById('impact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-cobalt text-white px-8 py-3 md:py-4 font-body font-medium tracking-wide flex items-center gap-2 hover:bg-[#2563EB] transition-colors"
            >
              See the work <span>&rarr;</span>
            </button>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <AnimatedStat end={25} prefix="$" suffix="M+" label="Career Portfolio Led" delay={0.15} />
          <AnimatedStat end={23} label="Years in IT Services" delay={0.30} />
          <AnimatedStat end={140} suffix="+" label="Professionals Led" delay={0.45} />
          <div className="bg-[#0A1628] border border-border p-6 rounded text-center flex flex-col justify-center">
            <div className="text-3xl lg:text-4xl text-cobalt font-bold font-mono mb-1">
              9%
            </div>
            <div className="text-[11px] text-muted uppercase tracking-[1px] mt-2 leading-snug">
              Attrition Rate<br/><span className="text-[10px] text-slate-500 opacity-80 lowercase">Industry avg: 18-22%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
