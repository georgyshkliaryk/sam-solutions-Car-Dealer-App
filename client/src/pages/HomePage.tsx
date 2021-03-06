import React from "react";

import Slider, { IProps } from "../components/Slider/Slider";
import Welcome from "../components/Welcome/Welcome";
import MapComponent from "../components/MapComponent/MapComponent";
import Contacts from "../components/Contacts/Contacts";
import Ads from "../components/CarAds/Ads";
import Loading from "../components/Loading/Loading";

import { IAd } from "../models/IAd";

import RestService from "../services/RestService";
import AdService from "../services/AdsService";

import WOW from "wowjs";

import translate from "../i18n/translate";
import withBasicLayout from "../hoc/withBasicLayout";

interface IState {
  ads: IAd[];
  startAds: IAd[];
  isLoaded: boolean;
}

interface IAdQueryParams {
  carModel: string;
  carType: string;
  carName: string;
  carUsed: string;
  min_price: string;
  max_price: string;
}

class HomePage extends React.Component<any, {}> {
  adService: AdService;
  state: IState = {
    ads: [],
    startAds: [],
    isLoaded: false,
  };

  constructor(props: IProps) {
    super(props);

    const restService = new RestService();
    this.adService = new AdService(restService);

    this.state = {
      ads: [],
      startAds: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    new WOW.WOW().init();
    this.fetchAds({} as any);
  }

  fetchAds(queryParams: IAdQueryParams) {
    this.adService
      .getAllAds(queryParams)
      .then((data) => {
        this.setState({ ads: data, isLoaded: true });
        if (this.state.ads.length == 0) {
          this.setState({
            startAds: [],
          });
        } else {
          let newArr: IAd[] = [];
              newArr = this.state.ads.slice(0, 3);
          this.setState({
            startAds: newArr,
          });
        }
      })
      .catch((data) => {
        alert(data);
        this.setState({ isLoaded: false });
      });
  }

  render() {
    return (
      <>
        {this.state.isLoaded ? (
          <Slider ads={this.state.startAds} />
        ) : (
          <Loading loadingTitle={translate("popularCars")} />
        )}

        {this.state.isLoaded ? (
          <Ads ads={this.state.startAds} title={translate("availableCars")} />
        ) : (
          <Loading loadingTitle="Available cars" />
        )}

        <Welcome ads={this.state.ads} />
        <Contacts />
        <MapComponent />
      </>
    );
  }
}

export default withBasicLayout(HomePage);
