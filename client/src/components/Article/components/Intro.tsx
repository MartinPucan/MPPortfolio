import React from 'react';
import {Bounce, Fade, Hinge, Slide} from "react-awesome-reveal";

const Intro = () => {
  return (
    <>
      <Fade direction="down" fraction={0}>
        <section className="intro">
          <div className="intro--container">
            <h2>Article section</h2>
            <p>Something short and leading about the collection below—its contents, the creator, etc. Make it short and
              sweet, but not too short so folks don’t simply skip over it entirely.</p>
          </div>
        </section>
      </Fade>
      <Bounce>
        <section className="intro">
          <div className="intro--container">
            <h2>Article section</h2>
            <p>Something short and leading about the collection below—its contents, the creator, etc. Make it short and
              sweet, but not too short so folks don’t simply skip over it entirely.</p>
          </div>
        </section>
      </Bounce>
      <Hinge>
        <section className="intro">
          <div className="intro--container">
            <h2>Article section</h2>
            <p>Something short and leading about the collection below—its contents, the creator, etc. Make it short and
              sweet, but not too short so folks don’t simply skip over it entirely.</p>
          </div>
        </section>
      </Hinge>
      <Fade direction="down" fraction={0}>
        <section className="intro">
          <div className="intro--container">
            <h2>Article section</h2>
            <p>Something short and leading about the collection below—its contents, the creator, etc. Make it short and
              sweet, but not too short so folks don’t simply skip over it entirely.</p>
          </div>
        </section>
      </Fade>
      <Slide>
        <section className="intro">
          <div className="intro--container">
            <h2>Article section</h2>
            <p>Something short and leading about the collection below—its contents, the creator, etc. Make it short and
              sweet, but not too short so folks don’t simply skip over it entirely.</p>
          </div>
        </section>
      </Slide>
    </>
  );
};

export default Intro;