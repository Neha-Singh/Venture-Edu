import React from "react";
import "../../styles/Header/breadcrumbs.css";

const Breadcrumb = ({ links, currentPath }) => (
  <nav className="breadcrumb">
    {links.map((link, idx) => (
      <React.Fragment key={idx}>
        <a
          href={link.url}
          className={`breadcrumb__link${
            currentPath === link.url ? " breadcrumb__current" : ""
          }`}
        >
          {link.label}
        </a>
        {idx < links.length - 1 && (
          <span className="breadcrumb__separator">.</span>
        )}
      </React.Fragment>
    ))}
  </nav>
);

export default Breadcrumb;
