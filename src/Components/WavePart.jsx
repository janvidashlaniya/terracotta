import React from "react";
import './WavesPart.css';
const WavePart = () => {
  return (
    <>
      <footer>
        <div class="wave-container">
          <svg
            class="waves"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shape-rendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"
              />
            </defs>
            <g class="wave-animation">
              <use
                href="#gentle-wave"
                x="48"
                y="0"
                fill="rgba(255,255,255,0.7)"
              />
              <use
                href="#gentle-wave"
                x="48"
                y="3"
                fill="rgba(255,255,255,0.5)"
              />
              <use
                href="#gentle-wave"
                x="48"
                y="5"
                fill="rgba(255,255,255,0.3)"
              />
              <use href="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
        </div>
        <div class="footer-content">
          <p>© 2024 Your Website. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default WavePart;
