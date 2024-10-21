import React from 'react';
import { Navbar as BootstrapNavbar, Nav, Container, Form, Image, FormLabel } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useAppSelector, useAppDispatch } from '../config/store';
import { toggleTheme } from '../reducers/theme';

interface NavigationBarProps {
  specUrl: string;
  handleApiChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ specUrl, handleApiChange }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  // Get the theme from Redux store
  const theme = useAppSelector((state) => state.theme.theme);

  // Function to toggle the theme
  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <BootstrapNavbar
      className={`${theme === 'light' ? 'navbar-light' : 'navbar-dark'} navbar`}
      collapseOnSelect
      expand="lg"
    >
      <Container fluid style={{ paddingLeft: '0', paddingRight: '0' }}>
        <BootstrapNavbar.Brand href="/" className="d-flex align-items-center" style={{marginLeft: '0'}}>
          <Image
            src="/content/images/logo.png"
            alt="Logo"
            className="logo-image"
          />
          <span className={theme === 'light' ? 'text-dark' : 'text-light'} style={{fontSize: '18px'}}>
            {t('global.navbarHeadingText')}
          </span>
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="responsive-navbar-nav"/>
        <BootstrapNavbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto d-flex flex-column flex-lg-row align-items-lg-center justify-content-end w-100 w-lg-auto">
            <Nav.Link href="/" className="mb-2 mb-lg-0" style={{ color: theme === 'light' ? '#333' : '#FFF' }}>
              {t('global.home')}
            </Nav.Link>

            {/* API Select */}
            <Form.Group className="mb-2 mb-lg-0 d-flex flex-row align-items-center ms-lg-2">
              <FormLabel
                className={`me-2 mb-0 ${theme === 'light' ? 'text-dark' : 'text-light'}`}
                style={{ whiteSpace: 'nowrap' }}
              >
                {t('global.selectApi')}
              </FormLabel>
              <Form.Select
                value={specUrl}
                onChange={handleApiChange}
                className={`api-select ${theme === 'light' ? 'select-light' : 'select-dark'}`}
              >
                <option value="/v3/api-docs">Core API</option>
              </Form.Select>
            </Form.Group>

            {/* Theme Toggle Switch */}
            <Form.Check
              type="switch"
              id="custom-switch"
              label={theme === 'light' ? t('global.lightMode') : t('global.darkMode')}
              checked={theme === 'dark'}
              onChange={handleThemeToggle}
              className={`theme-switch ${theme === 'light' ? 'switch-light' : 'switch-dark'} ms-lg-2 mt-2 mt-lg-0`}
            />
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default NavigationBar;
