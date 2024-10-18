import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap JS with Popper.js
import 'rapidoc'; // Import RapiDoc for API documentation rendering

import { Navbar, Nav, Container, Form, FormControl, Image, FormLabel } from 'react-bootstrap'; // React-Bootstrap components

function App() {
  // State for spec-url, initially showing Core API
  const [specUrl, setSpecUrl] = useState("/v3/api-docs");

  // State for theme, initially "light"
  const [theme, setTheme] = useState("light");

  // Function to update specUrl state when the user selects a different API
  const handleApiChange = (e) => {
    setSpecUrl(e.target.value);
  };

  // Function to toggle between light and dark themes
  const handleThemeToggle = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div style={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column' }}>
      {/* React-Bootstrap Navbar */}
      <Navbar
        collapseOnSelect
        expand="lg"
        bg={theme === "light" ? "light" : "dark"}
        variant={theme === "light" ? "light" : "dark"}
        style={{ paddingLeft: '10px', paddingRight: '10px' }}  // Custom padding for a balanced layout
      >
        <Container fluid style={{ paddingLeft: '0', paddingRight: '0' }}>  {/* Full width container */}
          {/* Add the logo and API title */}
          <Navbar.Brand href="/" className="d-flex align-items-center" style={{ marginLeft: '0' }}>
            <Image
              src="/content/images/logo.png"
              alt="Logo"
              style={{ width: '36px', height: '36px', marginRight: '10px' }}
            />
            <span style={{ fontSize: '18px', color: theme === "light" ? "#333" : "#FFF" }}>
              API Documentation
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto d-flex flex-column flex-lg-row align-items-lg-center justify-content-end w-100 w-lg-auto">
              {/* Home Link */}
              <Nav.Link href="/" className="mb-2 mb-lg-0" style={{ color: theme === "light" ? "#333" : "#FFF" }}>
                Home
              </Nav.Link>

              {/* API Select Label and Dropdown */}
              <Form.Group className="mb-2 mb-lg-0 d-flex flex-row align-items-center ms-lg-3">
                <FormLabel className="me-2 mb-0" style={{ color: theme === "light" ? "#333" : "#FFF", whiteSpace: 'nowrap' }}>
                  Select API
                </FormLabel>
                <FormControl
                  as="select"
                  value={specUrl}
                  onChange={handleApiChange}
                  style={{
                    width: '150px',
                    padding: '5px 10px',
                    backgroundColor: theme === "light" ? "#FFF" : "#333",
                    color: theme === "light" ? "#333" : "#FFF",
                    border: theme === "light" ? "1px solid #ccc" : "1px solid #555",
                    borderRadius: '5px',
                    margin: '0'
                  }}
                >
                  <option value="/v3/api-docs">Core API</option>
                </FormControl>
              </Form.Group>

              {/* Theme Toggle Switch */}
              <Form.Check
                type="switch"
                id="custom-switch"
                label={theme === "light" ? "Light Mode" : "Dark Mode"}
                checked={theme === "dark"}
                onChange={handleThemeToggle}
                className="ms-lg-3 mt-2 mt-lg-0"
                style={{
                  color: theme === "light" ? "#333" : "#FFF",
                  width: 'auto'
                }}
              />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Rapidoc Component */}
      <div style={{ flex: 1 }}>
        <rapi-doc
          spec-url={specUrl}  // Dynamically changing the spec-url based on the selected API
          theme={theme}  // Dynamically changing the theme (light or dark)
          show-header="false"  // Hiding the default Rapidoc header
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
          heading-text="API Documentation"
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
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
