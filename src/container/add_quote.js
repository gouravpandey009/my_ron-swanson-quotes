// @flow

import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchData, addRowReturnNewQuote } from "../actions/action_index";
import "../App.css";

type Props = {
  quote: string,
  addRowReturnNewQuote: any,
  fetchData: any,
  handleSubmit: KeyboardEvent
};
type State = {
  inputValue: any,
}

export class AddQuote extends Component<Props,State> {

  constructor() {
    super();
    this.addRow = this.addRow.bind(this);
    this.updateInputValue= this.updateInputValue.bind(this);
    this.state = {
      inputValue: "", //initialize inputValue to nothing, used to keep track of quote's rating
      quote: ""
    };
  }

  addRow = () => {
    const data = {
      quote: this.props.quote[0], //pulling quote from Redux store
      rate: this.state.inputValue //pulling rate from inputValue on component's state
    };
    this.props.addRowReturnNewQuote(data); //passing to action creator addRowReturnNewQuote, saving on Redux Store to retrieve in sibling component
    this.setState({
      inputValue: ""
    });
  };

  updateInputValue = ({target}: SyntheticInputEvent<>) => {
    this.setState({
      inputValue: target.value
    });
  }

  componentDidMount() {
    this.props.fetchData(); //update the displayed quote
  }

  render() {
    const { handleSubmit } = this.props;
    let rateSuggestion = (Math.floor((Math.random() * 10) + 1));
    return (
      <div>
        <table className="ui celled padded table">
          <tbody>
            <tr>
              <td>{this.props.quote}</td>
              <td className="center aligned">
                <form onSubmit={handleSubmit}>
                  <div className="field">
                    <div>
                      <label>Rate the Quote</label>
                    </div>

                    <div className="ui input focus" id="quote_rating">
                      <input
                        className="center aligned"
                        type="number"
                        placeholder={`maybe a ${rateSuggestion}?`}
                        value={this.state.inputValue}
                        onChange={this.updateInputValue}
                      />
                    </div>
                  </div>
                </form>
              </td>
              <td className="center aligned">
                <button
                  type="submit"
                  className="ui button blue Change"
                  onClick={this.addRow}
                  >
                  Add Quote
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    quote: state.quote //return the quote from the Redux store, and make accessible via props
  };
}

function mapDispatchToProps(dispatch : Dispatch<*>) {
  return bindActionCreators(
    {
      fetchData, //bind the action creator so that fetchData is called every time component mounts
      addRowReturnNewQuote  //bind so that component can send data to this action creator
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddQuote);
