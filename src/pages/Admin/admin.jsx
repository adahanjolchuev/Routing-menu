import React from "react";
import "./admin.css";

function Admin() {
  return (
    <div id="admin">
      <div className="container">
        <div className="admin">
          <h1>CREATE PRODUCT</h1>
          <div className="inputs">
            <input type="text" placeholder="image URL" />
            <input type="text" placeholder="food name" />
            <input type="text" placeholder="price" />
          </div>
          <button>create</button>
        </div>
      </div>
    </div>
  );
}

export default Admin;
