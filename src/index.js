import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
function reportCard(student) {
  var marksheet = (
    <div className="container">
      <div className="row">
        <div className="col-8 offset-2">
          <div classNme="card">
            <div className="card-header">
              <h1>Mark Sheet</h1>
            </div>
            <div className="card-body">
              <table className="table table-bordered">
                <tr>
                  <th>Name</th>
                  <th>html</th>
                  <th>css</th>
                  <th>js</th>
                  <th>bootstrap</th>
                </tr>
                <tr>
                  <td>{student.Name}</td>
                  <td>{student.html}</td>
                  <td>{student.css}</td>
                  <td>{student.js}</td>
                  <td>{student.bootstrap}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  return marksheet;
}

var student = {
  Name: "jay",
  html: 50,
  css: 60,
  js: 80,
  bootstrap: 60,
};
root.render(reportCard(student));

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// function ReportCard(student)
// {
//     var output = (
//         <div className='container'>
//             <div className='row'>
//                 <div className='col-8 offset-2'>
//                     <div className='card'>
//                         <div className='card-header'>
//                                 <h1>Report card</h1>
//                         </div>
                        // <div className='card-body'>
                        //     <table className='table table-bordered'>
                        //         <tr>
                        //             <th>Name</th>
                        //             <th>HTML</th>
                        //             <th>CSS</th>
                        //             <th>Bootstrap</th>
                        //             <th>Javascript</th>

                        //         </tr>
                        //         <tr>
                        //             <td>{student.name}</td>
                        //             <td>{student.html}</td>
                        //             <td>{student.css}</td>
                        //             <td>{student.bootstrap}</td>
                        //             <td>{student.javascript}</td>
                        //         </tr>
                        //     </table>
                        // </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
//     return output;
// }
// var student = {
//     name: 'Alex',
//     html:55,
//     css:65,
//     javascript:75,
//     bootstrap:85
// };
// root.render(ReportCard(student));
