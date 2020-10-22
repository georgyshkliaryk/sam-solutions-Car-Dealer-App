import React from "react";
import { Link } from "react-router-dom";
import WOW from "wowjs";
import { deleteAd } from "../../services/RestService";
import { BrowserRouter as Router } from "react-router-dom";

import SearchButton from "../buttons/SearchButton/SearchButton";
import "./CarAd.scss";

import SaveCancel from "../SaveCancel/SaveCancel";
import EditButton from "../buttons/EditButton/EditButton";

const CarAd = (props: any) => {
  function handleDelete(path) {
    try {
      deleteAd(path);
      alert("Ad was successfully deleted!");
    } catch (error) {
      alert("Error deleting ad!");
    }
    const createHistory = require("history").createBrowserHistory;
    let history = createHistory();
    history.push("/ads");
    let pathUrl = window.location.href;
    window.location.href = pathUrl;
  }
  return (
    <div>
      <div className={"car__container"}>
        <div className="car__image">
          <img src={props.image} alt="car image" />
        </div>

        <div className="car__info">
          <div className="car__title">
            {" "}
            <input
              className="car__title-input"
              type="text"
              value={props.title}
              disabled={props.inputs}
              placeholder="car brand and model"
            />{" "}
          </div>
          <div className="car__description">
            <textarea
              className="car__description-input"
              value={props.description}
              disabled={props.inputs}
              placeholder="short description"
            />
          </div>

          <div className={"car__info carflex"}>
            <div>
              <img
                title="Brand"
                src={
                  "https://www.carlogos.org/logo/Eagle-automobile-logo-black-3000x2500.png"
                }
              />
            </div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
            <input
              className="car__info-input"
              type="text"
              value={props.model}
              disabled={props.inputs}
              placeholder="car brand"
            />
          </div>
          <br />
          <div className={"car__info carflex"}>
            <div>
              <img
                title="Year"
                src={
                  "https://freeiconshop.com/wp-content/uploads/edd/calendar-solid.png"
                }
              />
            </div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
            <input
              className="car__info-input"
              type="text"
              value={props.year}
              disabled={props.inputs}
              placeholder="car year"
            />
          </div>
          <br />
          <div className={"car__info carflex"}>
            <div>
              <img
                title="Usage"
                src={"https://cdn.onlinewebfonts.com/svg/img_230655.png"}
              />
            </div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
            <input
              className="car__info-input"
              type="text"
              value={props.used}
              disabled={props.inputs}
              placeholder="car used"
            />
          </div>
          <br />
          <div className={"car__info carflex"}>
            <div>
              <img
                title="Type"
                src={"https://image.flaticon.com/icons/png/512/55/55308.png"}
              />
            </div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
            <input
              className="car__info-input"
              type="text"
              value={props.type} //sedan coupe etc
              disabled={props.inputs}
              placeholder="car type"
            />
          </div>
          <br />
          <div className={"car__info carflex"}>
            <div>
              <img
                title="Price"
                src={
                  "https://www.koenvandieren.com/wp-content/uploads/2019/06/icon-logo-price-dark.png"
                }
              />
            </div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
            <input
              className="car__info-input"
              type="text"
              value={props.price}
              disabled={props.inputs}
              placeholder="car price"
            />
            <div>$</div>
          </div>
          <br />
          <div className={"car__info carflex"}>
            <div>
              <img
                title="Mileage"
                src={
                  "https://obhajiwala.com/assets/less/icons/ionicons/png/512/ios7-speedometer.png"
                }
              />
            </div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
            <input
              className="car__info-input"
              type="text"
              value={props.mileage}
              disabled={props.inputs}
              placeholder="car mileage"
            />
            <div>km</div>
          </div>
          <br />
          <div className={"car__info carflex"}>
            <div>
              <img
                title="Fuel Consumption"
                src={
                  "https://www.iconfinder.com/data/icons/wpzoom-developer-icon-set/500/132-512.png"
                }
              />
            </div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
            <input
              className="car__info-input"
              type="text"
              value={props.fuel}
              disabled={props.inputs}
              placeholder="fuel consumption"
            />
            <div>liters/100km</div>
          </div>
          <br />
          <div className={"car__info carflex"}>
            <div>
              <img
                title="Max Speed"
                src={
                  "https://icons-for-free.com/iconfiles/png/512/performance+speed+icon-1320183237988780008.png"
                }
              />
            </div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
            <input
              className="car__info-input"
              type="text"
              value={props.maxspeed}
              disabled={props.inputs}
              placeholder="max speed"
            />
            <div>km/h</div>
          </div>
        </div>
        <br />
        <div className="car__description full">
          <textarea
            className="car__description-input full2"
            value={props.fulldescription}
            disabled={props.inputs}
            placeholder="full description"
          />
        </div>
        <br />
        <div className={"car__btn"}>
          {/* {props.mode === "edit" ? (
            <SaveCancel save="Save changes" cancel="Cancel" />
          ) : props.mode == "view" ? (
            <EditButton content="Edit" linkTo={props.id} />
          ) : (
            <SaveCancel save="Apply" cancel="Cancel" />
          )} */}
          <button
            className="button red"
            onClick={() => {
              handleDelete(`http://localhost:5000/api/ads/${props.id}`);
            }}
          >
            Delete ad
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarAd;
