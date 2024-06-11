// @flow

import React, { Component } from "react";
import { connect } from "react-redux";

import "../App.css";

type State = {
  activeIndex: number,
  rows: Array<any>
}

type Props = {
  quote: string,
  rate: number
}

export class QuoteRow extends Component<Props, State> {

  constructor() {
    super();
    this.sortBy.bind(this);
    this.compareBy.bind(this);
    this.state = {
      activeIndex: -1,
      rows: [ //setting up default data.  Quotes shouldn't exist in API and therefor will not repeat
        {
          quote:
            "I'm a simple man.  I like pretty, dark-haired women and breakfast food.",
          rate: 10
        },
        {
          quote: "Don’t get emotional Vaughn, you’re embarrassing yourself.",
          rate: 20
        },
        {
          quote:
            "Tom, I took the quiz in your book about what kind of person I am. I’m a Ron.”",
          rate: 2
        }
      ]
    };
  }

  compareBy(key? : string) {
    return function(a : any, b: any) { //either type object with key number (rate) or object with key string (quote)
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  }

  sortBy(key? : string) { //sort the array of rows based on either rate or quote
    let arrayCopy = [...this.state.rows];
    arrayCopy.sort(this.compareBy(key));
    this.setState({ rows: arrayCopy });
  }

  removeRow = (index : number) => () => {
    const rows = [...this.state.rows];
    rows.splice(index, 1); //remove the row based on index
    this.setState({ rows }); //update rows state without the deleted row
  };

  handleSelect = (index : number) => () => {
    this.setState({ activeIndex: index }); //add index to state so ternary operator can to determine if active should be added to tr
  };

  componentWillReceiveProps(newProps : *) { //if new props from state.row appear add them to the rows object on component state
    if (newProps.row !== 0) {
      this.setState({
        rows: [...this.state.rows, newProps.row]
      });
    } else {
      //do nothing
    }
  }

  render() {
    return (
      <div>
        <table className="ui celled padded selectable table">
          <thead>
            <tr>
              <th
                className="ui blue Change"
                onClick={() => this.sortBy("quote")}
              >
                Quote
              </th>
              <th
                className="ui blue Change center aligned"
                onClick={() => this.sortBy("rate")}
              >
                Rating
              </th>
              <th className="ui Change_Red center aligned">Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.rows.map((data, index) => (
              <tr
                key={index}
                onClick={this.handleSelect(index)}
                className={this.state.activeIndex === index ? "active" : ""}
              >
                <td>{this.state.rows[index].quote}</td>
                <td className="center aligned">
                  {this.state.rows[index].rate}
                </td>
                <td className="center aligned">
                  <i
                    className="icon trash alternate outline center"
                    onClick={this.removeRow(index)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    row: state.row //allow row object containing quote and rate to be accessible on props
  };
}

export default connect(
  mapStateToProps
)(QuoteRow);
