import React, { Component } from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  useRouteMatch,
  useParams,
} from "react-router-dom";

//Pages
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import AdsPage from "./pages/AdsPage";
import AboutPage from "./pages/AboutPage";
import CarsPage from "./pages/CarsPage";
import UsedCarsPage from "./pages/UsedCarsPage";
import NewCarPage from "./pages/NewCarPage";
import UsedCarPage from "./pages/UsedCarPage";
import LogoutPage from "./pages/LogoutPage";
import UsersPage from "./pages/UsersPage";
import CreateAdPage from "./pages/CreateAdPage";

import { I18nProvider, LOCALES } from "./i18n";
import { FormattedMessage } from "react-intl";
import translate from "./i18n/translate";

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  state = {
    locales: [LOCALES.ENGLISH, LOCALES.GERMAN],
    name: 0
  };

  updateData2 = (value) => {};

  updateData = (value) => {
    if (this.state.name != value) {
    this.setState({ name: value })
    }
  };

  componentDidUpdate() {
     //alert("2" + this.state.name);
  }

  render() {
    return (
      <I18nProvider locale={this.state.locales[this.state.name]}>
        <Router>
            <Switch>
          <Route exact path="/login">
            <LoginPage updateData2={this.updateData2} />
          </Route>

          <Route exact path="/users">
            <UsersPage users={this.state.name} updateData={this.updateData}/>
          </Route>

          <Route exact path="/logout">
            <LogoutPage />
          </Route>

          <Route exact path="/">
            <HomePage updateData={this.updateData} />
          </Route>

          {/* <Switch> */}
            <Route exact path="/ads">
              <CarsPage />
            </Route>
            <Route
              path="/ads/view/:id"
              component={(props) => (
                <NewCarPage {...props} inputDisabled={true} pageMode="view" />
              )}
            />
            {/* <Route path="/ads/create"
                           component={(props) => <NewCarPage {...props} inputDisabled={false} pageMode="create"/>}
                    /> */}
            <Route path="/ads/create">
              <CreateAdPage />
            </Route>
            <Route
              path="/ads/edit/:id"
              component={(props) => (
                <NewCarPage {...props} inputDisabled={false} pageMode="edit" />
              )}
            />
          {/* </Switch> */}

          {/* <Switch>
          <Route exact path="/ads/usedcars">
            <UsedCarsPage />
          </Route>
          <Route path="/ads/usedcars/:id">
            <UsedCarPage />
          </Route>
        </Switch> */}

          <Route exact path="/about">
            <AboutPage />
          </Route>

          <Route exact path="/404">
            <NotFoundPage />
          </Route>
          <Redirect to="/404" />
          </Switch>
        </Router>
      </I18nProvider>
    );
  }
}

export default App;
