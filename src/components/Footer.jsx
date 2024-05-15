import { useState } from 'react';
import './Footer.css';
export const Footer = () => {
  const [title, setTitle] = useState(true);
  const changeTitle = () => {
    // set lai phu dinh cuar title
    setTitle(!title);
    // true => false
    // fasle => true
  };
  return (
    <div>
      <section className="mountain-banner">
        <div className="overlay-1"></div>
        <div className="overlay-2"></div>
        <div className="container">
          <div className="banner-text">
            <h1>Serenity</h1>
            <p>Lorem ipsum dolor sit amet...</p>
          </div>
        </div>
      </section>
      <footer>
        <div className="info-footer">
          <h6 className="title-ft" onClick={() => changeTitle()}>
            <img
              width="20px"
              height="20px"
              src="./src/assets/mouse-cursor-svgrepo-com.svg"
              alt="mouse"
            />
            {title ? 'Quote of the Day' : 'We are hero'}
          </h6>
          <h6>---***---</h6>
          <p className="info-ft">
            "We are like butterflies who flutter for a day and think it is
            forever."
          </p>
          <p className="author-ft">Carl Sagan</p>
        </div>
      </footer>
    </div>
  );
};
