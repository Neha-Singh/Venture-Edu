import React from "react";
import "../../styles/Header/breadcrumbs.css"; // Adjust the path as necessary";

const Breadcrumb = ({ links }) => (
  <nav className="breadcrumb">
    {links.map((link, idx) => (
      <React.Fragment key={idx}>
        {link.url ? (
          <a href={link.url} className="breadcrumb__link">
            {link.label}
          </a>
        ) : (
          <span className="breadcrumb__current">{link.label}</span>
        )}
        {idx < links.length - 1 && (
          <span className="breadcrumb__separator">/</span>
        )}
      </React.Fragment>
    ))}
  </nav>
);

export default Breadcrumb;
