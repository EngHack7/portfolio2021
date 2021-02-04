import React from "react";
import './infotable.css'
function InfoTab() {
  return (
    <>
      <table>
        <tbody>

        
        <tr>
          <td>
            <div className="intro">
              <b>Hello I'am hamza kamel</b> <br />
              Simply software engineer <br />
              from Al-hussain bin Tallal <br />
              fresh graduate <br />
              love to learn new technology <br />
              Web developer
            </div>
          </td>
          <td>
            <img src="/images/cat.jpg" />
          </td>
        </tr>

        <tr>
          <td>
            <img src="./images/officeimage.jpg" />
          </td>
          <td>
            <div>
              experience and proven knowledge of data communications, database
              design, and website architecture to successfully fill the BI
              developer role. Frequently praised as diligent by my peers, I can
              be relied upon to help your the company achieves its goals.
            </div>
          </td>
        </tr>
        </tbody>
      </table>
      <div className="t-u-t" > technology used </div>
    </>
  );
}

export default InfoTab;
