import React from "react";
const we = [
    {pn :'Chat-Rooms',tu:"React, nodeJs express, socketIO,",pu:"https://github.com/EngHack7/Chat-Rooms",pv:"https://first-chat-room.netlify.app/" },
    {pn :'control-flow-graph automated tools',tu:"c# windows Application ,lexical Analyzer,  ",pu:"https://github.com/EngHack7/graduate-project-CFG",pv:"not deployed " },
    {pn:"library-system",tu:"Angular, NodeJs, mySQL",pu : "https://github.com/EngHack7/library-Angular-NodeJS-",pv:"not deployed "},
    {pn : "imstagram",tu : "React, NodeJs Express framework, MongoDb",pu:"soon ...",pv : "soon ..."}
]

function Works() {
  const style = {
    width: "max-content",
    maxWidth  :"100%",
    margin: "auto",
    marginTop: "24px",
    fontSize: "38px",
  };
  const td_style = {
      display : 'table-cell'
  }
  return (
    <React.Fragment>
      <div style={style}> Best of some Works i have</div>
      <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">project </th>
            <th scope="col">technology used </th>
            <th scope="col">github </th>
            <th scope="col">view </th>
          </tr>
        </thead>
      
        <tbody>
            {
                we.map(e => (
                    <tr scope="row" key={e.pn}>
                        <td style ={td_style}>{e.pn}</td>
                        <td style ={td_style}>{e.tu}</td>
                        <td style ={td_style}>
                        <a href={e.pu} >{e.pu}</a>
                     
                        </td>
                        <td style ={td_style}><a href={e.pu}>{e.pv}</a></td>
                    </tr>
                ))
            }
        
        </tbody>
      </table>
      </div>
    </React.Fragment>
  );
}

export default Works;
