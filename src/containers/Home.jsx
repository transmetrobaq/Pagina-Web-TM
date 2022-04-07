/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import Info from '../components/Info';
// eslint-disable-next-line arrow-body-style
const Home = () => {
  return (
    <div>
      <Info />
      <div className="container">
        <div className="red">
          <div id="facebook">
            <a
              href="https://es-la.facebook.com/transmetrobaq/"
              className="fab fa-facebook-f"
              alt="Facebook"
              target="_blank"
            />
          </div>
          <div id="youtube">
            <a
              href="https://www.youtube.com/user/transmetrotv"
              className="fab fa-youtube"
              alt="YouTube"
              target="_blank"
            />
          </div>
          <div id="twitter">
            <a
              href="https://twitter.com/transmetrobaq"
              className="fab fa-twitter"
              alt="Twitter"
              target="_blank"
            />
          </div>

          <div id="instagram">
            <a
              href="https://www.instagram.com/transmetrobaq/?hl=es"
              className="fab fa-instagram"
              alt="Instagram"
              target="_blank"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
