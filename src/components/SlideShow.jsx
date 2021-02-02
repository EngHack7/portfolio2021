import React from "react";
import "./slide.css";
// import "react-slideshow-image/dist/styles.css";
import Slide from "./common/slidecard";

const slideImages = [
  "/images/html.png",
  "/images/sql.png",
  "/images/react.png",
  "/images/css.png",
  "/images/angular.png",
  "/images/Node.png",
  "/images/md.png",
];
function SlideShow() {
  return (
    <React.Fragment>
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    
  <div className="carousel-item active">
              <div class="col-md-4">
                        <div class="card card-body">
      <img src={slideImages[4]} class="d-block w-100" alt="..." />
    </div></div></div>
    {slideImages.map(url => (<Slide key={url} img_url={url} />))}   
    </div>
    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </a>
</div>
    </React.Fragment>
  );
}

export default SlideShow;
