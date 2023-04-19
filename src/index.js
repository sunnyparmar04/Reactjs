import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
var page=(
    <div className="container">
        <div className="row">
            <div className="col-4">
                <h1>class topic</h1>
                <ul className="list-group">
                    <li className="list-group-item">HTML</li>
                    <li className="list-group-item">css</li>
                    <li className="list-group-item">bootstrap</li>
                    <li className="list-group-item">java scrit</li>
                    <li className="list-group-item">react</li>
                </ul>

            </div>
        </div>
    </div>
);
root.render(page);
