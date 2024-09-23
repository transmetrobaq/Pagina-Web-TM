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
            <a href="https://es-la.facebook.com/transmetrobaq/" target="_blank">
              <img
                src="https://apiwebtm.com/uploads/facebook_logo_png_794ddb4157.png"
                alt="Facebook"
                style={{ width: '20px', height: '22px' }}
              />
            </a>
          </div>
          <div id="twitter">
            <a
              href="https://twitter.com/transmetrobaq" target="_blank" >
              <img
                src="https://apiwebtm.com/uploads/tw_c5845c0468.png"
                alt="Twitter"
                style={{ width: '30px', height: '20px' }}
              />
              </a>
          </div>
          <div id="youtube">
            <a href="https://www.youtube.com/user/transmetrotv" target="_blank">
             <img
                src="https://apiwebtm.com/uploads/YU_a56ea60f82.png"
                alt="Youtube"
                style={{ width: '30px', height: '29px' }}
              />
            </a>
          </div>
          
          
          <div id="tiktok">
            <a
              href="https://www.tiktok.com/@transmetrobaq?_t=8oeLaV8iPiw&_r=1" target="_blank">
          <img
                src="https://apiwebtm.com/uploads/tiktok_fc55ee1a28.png"
                alt="tiktok"
                style={{ width: '30px', height: '29px' }}
                 />
             </a>
          
          </div>
          <div id="whatsapp">
            <a
              href="https://whatsapp.com/channel/0029VaZZyGw3rZZlXECryC0b" target="_blank">
              <img
                src="https://apiwebtm.com/uploads/WASA_e48162ff17.png"
                alt="Whatsapp"
                style={{ width: '30px', height: '27px' }}

             />
             </a>
          </div>

          <div id="instagram">
            <a
              href="https://www.instagram.com/transmetrobaq/?hl=es" target="_blank">
              <img
                src="https://apiwebtm.com/uploads/INST_acd0f8c309.png"
                alt="Instagram"
                style={{ width: '30px', height: '30px' }}
              />
              </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
