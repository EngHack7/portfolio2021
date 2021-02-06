import React from "react";

function Dialog({ hideDialog, style, name }) {
  return (
    <>
      <div style={style}>
        <div style={{ display: "block" }} className="modal-header">
          <button
            onClick={hideDialog}
            type="button"
            className="close"
            data-dismiss="modal"
          >
            &times;
          </button>
          <h4 className="modal-title">Mr. {name}.</h4>
        </div>
        <div className="modal-body">
          <p>thanks you very much 💜</p>
        </div>
        <div className="modal-footer">
          <button
            onClick={hideDialog}
            type="button"
            className="btn btn-default"
            data-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
}

export default Dialog;
