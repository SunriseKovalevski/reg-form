import React from "react";
import Auth from "./components/Auth";
import Registration from "./components/Registration";

export default class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <h3>Complex State</h3>
        <div className="forms">
          <Auth />
          <Registration />
        </div>
      </div>
    );
  }
}
