import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { grantConsentAndInit, hasConsent } from '../../utils/analytics';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if consent has already been given or denied
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    grantConsentAndInit();
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'false');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 z-50 flex flex-col gap-3 p-4 rounded-xl shadow-2xl border border-white/10"
          style={{ backgroundColor: '#1E293B' }} // Surface color
        >
          <div className="flex justify-between items-start">
            <p className="text-sm text-gray-300 pr-4">
              We use minimal cookies (Google Analytics) to understand how visitors interact with the site.
            </p>
            <button 
              onClick={handleDecline}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Close and decline"
            >
              <X size={16} />
            </button>
          </div>
          <div className="flex gap-3 mt-1">
            <button
              onClick={handleAccept}
              className="flex-1 py-2 px-4 rounded-lg text-sm font-medium text-white transition-colors"
              style={{ backgroundColor: '#1B4FD8' }} // Cobalt accent
            >
              Accept
            </button>
            <button
              onClick={handleDecline}
              className="flex-1 py-2 px-4 rounded-lg text-sm font-medium text-gray-300 bg-white/5 hover:bg-white/10 transition-colors"
            >
              Decline
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
