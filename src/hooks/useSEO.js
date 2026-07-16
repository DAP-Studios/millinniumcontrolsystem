import { useEffect } from 'react';

export default function useSEO({ title, description, keywords, schema }) {
  useEffect(() => {
    // 1. Title
    const defaultTitle = 'Millennium Control System | Factory Automation India';
    document.title = title ? `${title} | Millennium Control System` : defaultTitle;

    // 2. Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    const defaultDesc = 'Millennium Control System Pvt. Ltd. provides cutting-edge factory automation solutions in Pune & India, specializing in Mitsubishi PLCs, VFD inverters, servo motors, and robots.';
    metaDescription.content = description || defaultDesc;

    // 3. Meta Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    const defaultKeywords = 'Factory Automation India, Programmable Logic Controller PLC Pune, Variable Frequency Drives VFD Inverters, Molded Case Circuit Breakers MCCB, AC Servo Motors Drives, e-F@ctory Smart Factory solutions, Graphic Operation Controllers GOC, Mitsubishi Electric';
    metaKeywords.content = keywords || defaultKeywords;

    // 4. Schema JSON-LD
    let scriptTag = null;
    if (schema) {
      scriptTag = document.createElement('script');
      scriptTag.type = 'application/ld+json';
      scriptTag.innerHTML = JSON.stringify(schema);
      document.head.appendChild(scriptTag);
    }

    // Cleanup when component unmounts or changes
    return () => {
      if (scriptTag && document.head.contains(scriptTag)) {
        document.head.removeChild(scriptTag);
      }
    };
  }, [title, description, keywords, schema]);
}
