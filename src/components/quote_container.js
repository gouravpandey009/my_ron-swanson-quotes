// @flow

import { Component } from "react";
import * as React from 'react';

import "../App.css";
import QuoteRow from "../container/quote_row";
import AddQuote from "../container/add_quote";

class QuoteContainer extends Component<*> {

  render() {
    return (
      <div className="ui container">
        <div className="four wide column center aligned">
          {/* #FlowExpectError - required property handleSubmit is not passed */}
          <AddQuote />
        </div>
        {/* #FlowExpectError - required property quote is not passed */}
          <QuoteRow />
      </div>
    );
  }
}

export default QuoteContainer;


