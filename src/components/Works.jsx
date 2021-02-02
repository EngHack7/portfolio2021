import React from "react";

function Works() {
  const style = {
    width: "max-content",
    margin: "auto",
    marginTop: "24px",
    fontSize: "38px",
  };
  return (
    <React.Fragment>
      <div style={style}>Works</div>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>project </th>
            <th>github </th>
            <th>view </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>name</td>
            <td>url src</td>
            <td>views</td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default Works;
