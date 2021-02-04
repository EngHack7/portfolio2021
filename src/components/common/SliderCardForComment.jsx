import React from "react";

function SliderCardForComment({username,comment}) {
  return (
    <div className="carousel-item">
      <div className="col-md-4">
        <div className="card w-75">
          <div className="card-body">
            <h5 className="card-title">{username}</h5>
            <p className="card-text">
             {comment}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderCardForComment;
