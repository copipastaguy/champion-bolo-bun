import "../../styles/About.css";
import Articles from "../../components/Articles/Articles.js";

export const ScrollPageDown = () => {
  console.log("page scroll");
  window.scrollBy(0, window.innerHeight);
};

function About() {
  // Page scrolling function

  return (
    <div className="aboutMasthead">
      {/* Add in background image */}
      {/* <img src="https://via.placeholder.com/1080"></img> */}

      {/* Introduction of Champion */}
      <section className="about-intro">
        <div>
          <p>Champion Bolo Bun is the World’s first Bolo Bun Concept Store. </p>
        </div>

        <div>
          <p>
            Our founder’s love for bread brought her to pursue the detailed art
            and craftmanship of Bolo Buns from her shifu (master) in Hong Kong.
            Champion Bolo Bun was founded in 2019 as pop-ups at events. In 2021,
            we established our first flagship store in Singapore.
          </p>
        </div>

        <div>
          <p>
            As a specialty Bolo Bun cafe, we pride ourselves with our creation
            of Bolo Buns, and believe that freshly baked bread is the best way
            to consume our Bolo Buns.
          </p>
        </div>

        <div>
          <p>
            We want our customers to have the best bolo buns, and the best
            experience, and have bolo buns baked freshly on-site every 15
            minutes. <br /> We want our customers to trust us, and the integrity
            of our Bolo Buns.
          </p>
        </div>

        {/* View articles button */}
        <div className="view-articles-btn btn" onClick={ScrollPageDown}>
          View articles
        </div>
      </section>

      {/* Champion articles */}
      <div className="about-articles ">
        <Articles />
      </div>

      {/* <div className="aboutMasthead-parallax">parallax</div> */}
    </div>
  );
}

export default About;
