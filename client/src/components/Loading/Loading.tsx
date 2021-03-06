import React from "react";

import "./Loading.scss";
import loading from "../../public/assets/imgs/wheel2.png";

import translate from "../../i18n/translate";

function Loading(props: any) {
  return (
    <div className="loading" data-testid="loading" style={props.loadingStyle}>
      <div className="ads__title">{props.loadingTitle}</div>
      <img className="loading__img" src={loading} alt="loading..." />
      <div>{translate("loading")}</div>
    </div>
  );
}

export default Loading;
