// @flow

import React, { Component } from "react";

import RonsHead from "../images/myphoto.PNG";
import "../App.css";

class Title extends Component {
  render() {
    return (
      <div>
        <span className="ui header center aligned">
          <div>
            <img
              src={RonsHead}
              className="ui centered aligned circular image medium"
              id="ron_image"
              alt=""
            />
          </div>
          <h2>Gourav Pandey Quotes</h2>
        </span>
      </div>
    );
  }
}

export default Title;
