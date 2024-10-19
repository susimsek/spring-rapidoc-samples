import React, { useEffect } from 'react';
import 'rapidoc';
import {useTranslation} from "react-i18next"; // Importing RapiDoc from CDN

const RapiDocComponent = ({ theme, specUrl }) => {
  const { t } = useTranslation();

  useEffect(() => {
    const rapiDoc = document.querySelector('rapi-doc');
    if (rapiDoc) {
      rapiDoc.setAttribute('spec-url', specUrl);
      rapiDoc.setAttribute('theme', theme);
    }
  }, [specUrl, theme]);

  return (
    <rapi-doc
      spec-url={specUrl}
      theme={theme}
      show-header="false"
      render-style="read"
      primary-color="#4CAF50"
      secondary-color="#FF9800"
      nav-bg-color={theme === "light" ? "#F5F5F5" : "#333"}
      nav-text-color={theme === "light" ? "#333" : "#FFFFFF"}
      nav-hover-bg-color={theme === "light" ? "#E0E0E0" : "#555"}
      nav-accent-color="#4CAF50"
      bg-color={theme === "light" ? "#FFFFFF" : "#000000"}
      text-color={theme === "light" ? "#212121" : "#FFFFFF"}
      font-family="Roboto, Arial, sans-serif"
      heading-text={t('rapidoc.headingText')}
      show-info="true"
      show-components="true"
      allow-authentication="false"
      show-method-in-nav-bar="as-colored-block"
      use-path-in-nav-bar="false"
      default-schema-tab="example"
      regular-font-size="15px"
      mono-font-size="13px"
      max-containers="2"
      style={{ height: '100%', width: '100%' }}
    />
  );
};

export default RapiDocComponent;
