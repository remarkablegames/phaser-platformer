/**
 * Global site tag (gtag.js) - Google Analytics
 *
 * https://developers.google.com/analytics/devguides/collection/gtagjs
 */
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

const googleAnalyticsId = import.meta.env.VITE_GOOGLE_ANALYTICS_ID;

(window as unknown as Record<string, boolean>)[
  `ga-disable-${googleAnalyticsId}`
] = import.meta.env.DEV;

const script = document.createElement('script');
script.async = true;
script.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`;
script.onload = () => {
  window.gtag('config', googleAnalyticsId);
};
document.head.appendChild(script);

export const gtag = (...args: unknown[]) => {
  window.gtag(...args);
};
