import React from "react";
import "./menu.css";
import menuImg from "../../img/menu1.svg";
import menuImgOne from "../../img/menu22.svg";
import menuImgTwo from "../../img/menu3.svg";
import menuImgThree from "../../img/menu4.svg";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { BsFillBasket2Fill } from "react-icons/bs";

function Menu() {
  return (
    <div id="menu">
      <div className="container">
        <div className="menu">
          <h1>Menu</h1>
          <div className="menuBlocks">
            <div className="menuBlock">
              <img src={menuImg} alt="" />
              <h2>shawarma</h2>
              <h4>5$</h4>
              <div className="menuBtns">
                <button className="edit">
                  <MdEdit />
                </button>
                <button className="delet">
                  <MdDelete />
                </button>
                <button className="basket">
                  <BsFillBasket2Fill />
                </button>
              </div>
            </div>
            <div className="menuBlock">
              <img src={menuImgOne} alt="" />
              <h2 className="salad">salad</h2>
              <h4>10$</h4>
              <div className="menuBtns">
                <button className="edit">
                  <MdEdit />
                </button>
                <button className="delet">
                  <MdDelete />
                </button>
                <button className="basket">
                  <BsFillBasket2Fill />
                </button>
              </div>
            </div>
            <div className="menuBlock">
              <img src={menuImgTwo} alt="" />
              <h2 className="sushi">sushi and rolls</h2>
              <h4 className="price12">12.5$</h4>
              <div className="menuBtns">
                <button className="edit">
                  <MdEdit />
                </button>
                <button className="delet">
                  <MdDelete />
                </button>
                <button className="basket">
                  <BsFillBasket2Fill />
                </button>
              </div>
            </div>
            <div className="menuBlock">
              <img src={menuImgThree} alt="" />
              <h2 className="cappuccino">cappuccino</h2>
              <h4>3.5$</h4>
              <div className="menuBtns">
                <button className="edit">
                  <MdEdit />
                </button>
                <button className="delet">
                  <MdDelete />
                </button>
                <button className="basket">
                  <BsFillBasket2Fill />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
