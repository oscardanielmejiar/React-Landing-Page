import React from "react";

import Bazel from "../../img/BazelBoy.jpg"

const ActualCard = () => {
  return (
    <div className="container-fluid">
      <div className="card">
      <img src={Bazel} className="card-img-top" id="BazelPic" alt="Card image cap">
			</img>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <div className="card-footer">
             <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
      </div>
    </div>
  );
};

export { ActualCard };
