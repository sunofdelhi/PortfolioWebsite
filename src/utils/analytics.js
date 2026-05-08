import ReactGA from 'react-ga4';

const MEASUREMENT_ID = 'G-477L8NM4MD';

export const initAnalytics = () => {
  // Check if consent has been given before initializing
  const consent = localStorage.getItem('cookieConsent');
  if (consent === 'true') {
    ReactGA.initialize(MEASUREMENT_ID);
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname + window.location.search });
  }
};

export const grantConsentAndInit = () => {
  localStorage.setItem('cookieConsent', 'true');
  ReactGA.initialize(MEASUREMENT_ID);
  ReactGA.send({ hitType: 'pageview', page: window.location.pathname + window.location.search });
};

export const revokeConsent = () => {
  localStorage.setItem('cookieConsent', 'false');
  // Optional: could reload the page or clear cookies here
};

export const hasConsent = () => {
  return localStorage.getItem('cookieConsent') === 'true';
};

export const trackEvent = (category, action, label) => {
  if (hasConsent()) {
    ReactGA.event({
      category: category,
      action: action,
      label: label,
    });
  }
};

export const trackPageView = (path) => {
  if (hasConsent()) {
    ReactGA.send({ hitType: 'pageview', page: path });
  }
};
