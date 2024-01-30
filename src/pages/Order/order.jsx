import React from "react";
import "./order.css";
import order from "../../img/order1.svg";
import orderImg from "../../img/menu2.svg";
import { useState } from "react";

function Order() {
  const [count, Setcount] = useState(1);
  let [countone, Setcountone] = useState(1);
  return (
    <div id="order">
      <div className="container">
        <div className="order">
          <h1>Order</h1>
          <div className="orderBlocks">
            <div className="orderBlock">
              <img src={order} alt="" />
              <div className="orderText">
                <h2>cappuccino</h2>
                <h3>{count * 11}$</h3>
              </div>
              <div className="orderBtns">
                <button className="delete">delete order</button>
                <div className="orderCount">
                  <button
                    onClick={() => {
                      if (count > 1) {
                        Setcount(count - 1);
                      }
                    }}
                  >
                    -
                  </button>{" "}
                  <p>{count}x</p>{" "}
                  <button
                    onClick={() => {
                      Setcount(count + 1);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="orderBlock">
              <img src={orderImg} alt="" />
              <div className="orderText">
                <h2>sushi and rolls</h2>
                <h3>{countone * 12.5}$</h3>
              </div>
              <div className="orderBtns">
                <button className="delete">delete order</button>
                <div className="orderCount">
                  <button
                    onClick={() => {
                      if (countone > 1) {
                        Setcountone(countone - 1);
                      }
                    }}
                  >
                    -
                  </button>{" "}
                  <p>{countone}x</p>{" "}
                  <button
                    onClick={() => {
                      Setcountone(countone + 1);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
