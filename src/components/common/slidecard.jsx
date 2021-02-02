import React from "react";
import "../slide.css";


function slidecard({img_url}) {
  return (
  
   
        <div className="carousel-item">
              <div class="col-md-4">
                        <div class="card card-body">
                        <img className="d-block w-100" src={img_url} />
                        </div>
        
            </div></div>
   

  );
}

export default slidecard;
