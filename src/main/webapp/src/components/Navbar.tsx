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

  // Navbar background color based on theme
  const navbarBgColor = theme === 'light' ? '#F1F1F1' : '#2a2b2c';

  return (
    <BootstrapNavbar
      collapseOnSelect
      expand="lg"
      style={{ backgroundColor: navbarBgColor, paddingLeft: '10px', paddingRight: '10px' }}
    >
      <Container fluid style={{ paddingLeft: '0', paddingRight: '0' }}>
        <BootstrapNavbar.Brand href="/" className="d-flex align-items-center" style={{ marginLeft: '0' }}>
          <Image
            src="/content/images/logo.png"
            alt="Logo"
            style={{ width: '36px', height: '36px', marginRight: '10px' }}
          />
          <span style={{ fontSize: '18px', color: theme === 'light' ? '#333' : '#FFF' }}>
            {t('global.navbarHeadingText')}
          </span>
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="responsive-navbar-nav" />
        <BootstrapNavbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto d-flex flex-column flex-lg-row align-items-lg-center justify-content-end w-100 w-lg-auto">
            <Nav.Link href="/" className="mb-2 mb-lg-0" style={{ color: theme === 'light' ? '#333' : '#FFF' }}>
              {t('global.home')}
            </Nav.Link>

            {/* API Select */}
            <Form.Group className="mb-2 mb-lg-0 d-flex flex-row align-items-center ms-lg-2">
              <FormLabel
                className="me-2 mb-0"
                style={{ color: theme === 'light' ? '#333' : '#FFF', whiteSpace: 'nowrap' }}
              >
                {t('global.selectApi')}
              </FormLabel>
              <Form.Select
                value={specUrl}
                onChange={handleApiChange}
                style={{
                  width: '150px',
                  padding: '5px 10px',
                  backgroundColor: theme === 'light' ? '#FFF' : '#333',
                  color: theme === 'light' ? '#333' : '#FFF',
                  border: theme === 'light' ? '1px solid #ccc' : '1px solid #555',
                  borderRadius: '5px',
                  margin: '0',
                }}
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
              className="ms-lg-2 mt-2 mt-lg-0"
              style={{
                color: theme === 'light' ? '#333' : '#FFF',
                width: 'auto',
              }}
            />
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default NavigationBar;
