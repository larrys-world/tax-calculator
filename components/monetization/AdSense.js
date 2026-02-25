import React, { useEffect } from 'react';

/**
 * Google AdSense Ad Component
 * @param {Object} props
 * @param {string} props.client - AdSense publisher ID (e.g., 'ca-pub-XXXXXXXXXXXXXXXX')
 * @param {string} props.slot - Ad unit ID
 * @param {string} props.format - Ad format ('auto', 'fluid', 'rectangle', etc.)
 * @param {boolean} props.responsive - Whether the ad should be responsive
 * @param {Object} props.style - Custom styles for the ad container
 * @param {string} props.className - Custom CSS class
 */
export const AdSenseAd = ({ 
  client, 
  slot, 
  format = 'auto', 
  responsive = true,
  style = {},
  className = ''
}) => {
  useEffect(() => {
    try {
      // Push ads when component mounts
      if (window.adsbygoogle) {
        window.adsbygoogle.push({});
      }
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  if (!client || !slot) {
    console.warn('AdSense: Missing required props (client or slot)');
    return null;
  }

  return (
    <div className={`adsense-container ${className}`} style={style}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', ...style }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive}
      />
    </div>
  );
};

/**
 * Header Ad Component - Full width banner
 */
export const HeaderAd = ({ client, slot, ...props }) => (
  <AdSenseAd
    client={client}
    slot={slot}
    format="horizontal"
    className="header-ad"
    style={{ minHeight: '90px', marginBottom: '20px' }}
    {...props}
  />
);

/**
 * Sidebar Ad Component - Vertical rectangle
 */
export const SidebarAd = ({ client, slot, ...props }) => (
  <AdSenseAd
    client={client}
    slot={slot}
    format="rectangle"
    className="sidebar-ad"
    style={{ minHeight: '250px', marginBottom: '20px' }}
    {...props}
  />
);

/**
 * Footer Ad Component - Full width banner
 */
export const FooterAd = ({ client, slot, ...props }) => (
  <AdSenseAd
    client={client}
    slot={slot}
    format="horizontal"
    className="footer-ad"
    style={{ minHeight: '90px', marginTop: '40px' }}
    {...props}
  />
);

/**
 * In-Content Ad Component - Responsive rectangle
 */
export const InContentAd = ({ client, slot, ...props }) => (
  <AdSenseAd
    client={client}
    slot={slot}
    format="fluid"
    className="in-content-ad"
    style={{ margin: '20px 0' }}
    {...props}
  />
);