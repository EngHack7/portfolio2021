import React from "react";

function Nav() {
  return (
    <React.Fragment>
      <nav>
        <div className="title">hamza kamel</div>
        <h3>
          <a style={{color : 'blue'}} href="faceBook.com">faceBook</a>
        </h3>
        <h3>
          <a href="linkedIn">linkedIn</a>
        </h3>
        <h3>
          <a href="github">github</a>
        </h3>
      </nav>
    </React.Fragment>
  );
}

export default Nav;
