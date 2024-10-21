import React from 'react';
import 'rapidoc';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../config/store';

interface ApiDocProps {
  specUrl: string;
}

const Apidoc: React.FC<ApiDocProps> = ({ specUrl }) => {
  const { t } = useTranslation();

  // Get the theme from Redux store
  const theme = useAppSelector((state) => state.theme.theme);

  return (
    <rapi-doc
      spec-url={specUrl}
      theme={theme}
      show-header={false}
      render-style="read"
      primary-color="#4CAF50"
      secondary-color="#FF9800"
      nav-bg-color={theme === 'light' ? '#F5F5F5' : '#2a2b2c'}
      nav-text-color={theme === 'light' ? '#333' : '#FFFFFF'}
      nav-hover-bg-color={theme === 'light' ? '#E0E0E0' : '#555'}
      nav-accent-color="#4CAF50"
      bg-color={theme === 'light' ? '#FFFFFF' : '#333'}
      text-color={theme === 'light' ? '#212121' : '#FFFFFF'}
      font-family="Roboto, Arial, sans-serif"
      heading-text={t('rapidoc.headingText')}
      show-info={true}
      show-components={true}
      allow-authentication={false}
      show-method-in-nav-bar="as-colored-block"
      use-path-in-nav-bar={false}
      default-schema-tab="example"
      regular-font-size="15px"
      mono-font-size="13px"
      max-containers={2}
      style={{ height: '100%', width: '100%' }}
    />
  );
};

export default Apidoc;
