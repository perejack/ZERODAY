declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export const useGoogleAds = () => {
  const trackConversion = (event?: string) => {
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-16989747729',
        ...(event && { event_category: event })
      });
    }
  };

  return { trackConversion };
};
