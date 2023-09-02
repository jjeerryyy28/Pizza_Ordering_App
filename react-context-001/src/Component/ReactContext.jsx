import React, { useState, useContext, createContext } from "react";
import "./index.css";

const ThemeContext = createContext();

function ReactContextApp() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <ThemeContext.Provider
      value={{ isDarkTheme, toggleTheme, activeLink, handleLinkClick }}
    >
      <div style={{padding: 0}}>
      I have changed theme to {isDarkTheme ? 'dark' : 'light'} 
      </div>
      <div
        className={`app-container ${
          isDarkTheme ? "dark-theme" : "light-theme"
        }`}
      >
        <nav>
          <h3 style={{ color: isDarkTheme ? "#79f4cb" : "#000" }}>Geekster</h3>
          <a href="#" onClick={() => handleLinkClick("Home")}>
            Home
          </a>
          <br />
          <a href="#" onClick={() => handleLinkClick("Contact")}>
            Contact
          </a>
          <br />
          <a href="#" onClick={() => handleLinkClick("Service")}>
            Service
          </a>
        </nav>
        <button onClick={toggleTheme}>Toggle Theme to {isDarkTheme ? 'dark' : 'light'}</button>
        <div className="content">
          <Content />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

function Content() {
  const { isDarkTheme, activeLink } = useContext(ThemeContext);
  const fontColor = isDarkTheme ? "#79f4cb" : "#000000";
  const bgColor = isDarkTheme ? "#000" : "#fff";

  const renderContent = () => {
    switch (activeLink) {
      case "Home":
        return (
          <p style={{ color: fontColor }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        );
      case "Contact":
        return (
          <p style={{ color: fontColor, fontWeight: "bold", fontSize: "26px" }}>
            You can mail me help@geekster.in
          </p>
        );
      case "Service":
        return (
          <div>
            <p
              style={{ color: fontColor, fontWeight: "bold", fontSize: "28px" }}
            >
              Our service are not available
            </p>
            <p style={{ color: fontColor, fontSize: "20px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              quae quas aliquid necessitatibus eius voluptate expedita, sed
              esse, minus officia recusandae illo hic commodi aliquam officiis
              culpa sit, modi asperiores?
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return <div style={{ backgroundColor: bgColor }}>{renderContent()}</div>;
}

export default ReactContextApp;
