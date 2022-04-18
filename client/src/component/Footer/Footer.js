import React from "react";
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerTop">
        <h2>
          Top companies choose eLearn Business to build in-demand career skills.
        </h2>
        <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-sva-scholarship-20.png"></img>
      </div>
      <div className="footerWrap">
        <div>
          <ul>
            <li>
              <button>Home</button>
            </li>
            <li>
              <button>Suggestion Box</button>
            </li>
          </ul>

          <ul>
            <li>
              <button>Privacy Policy</button>
            </li>
            <li>
              <button>Giveaway</button>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <button>Home</button>
            </li>
            <li>
              <button>Suggestion Box</button>
            </li>
          </ul>

          <ul>
            <li>
              <button>Privacy Policy</button>
            </li>
            <li>
              <button>Giveaway</button>
            </li>
          </ul>
        </div>
      </div>
      <div className="footerLast">
        <h2>eLearn</h2> <p>© 2022 eLearn, Inc</p>
      </div>
    </footer>
  );
};

export default Footer;
