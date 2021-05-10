import React from "react";
import "./Social.css";

const SocialItem = [
  {
    cName: "fab fa-facebook-f fb",
  },
  {
    cName: "fab fa-twitter tw",
  },
  {
    cName: "fab fa-instagram insta",
  },
  {
    cName: "fab fa-github git",
  },
];

export const Social = () => {
  return (
    <div>
      <ul className="social-menu">
        {SocialItem.map((item, i) => (
          <li key={i}>
            <a href="#" className="social-link">
              <i class={item.cName}></i>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
