import React from "react";
import "../slide.css";

function slidecard({ img_url }) {
  return (
    <div className="carousel-item">
      <div className="col-md-4">
        <div className="card card-body">
          <img className="d-block w-100" src={img_url} />
        </div>
      </div>
    </div>
  );
}

export default slidecard;
