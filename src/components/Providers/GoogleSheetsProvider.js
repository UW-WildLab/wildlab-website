import React, { Component } from 'react';
import PropTypes from 'prop-types';
import flatMap from 'lodash/flatMap';
import Spinner from 'react-spinkit';

class GoogleSheetsProvider extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  static childContextTypes = {
    db: PropTypes.object
  };

  constructor() {
    super();
    this.state = { db: null };
    this.spreadSheetId = '1_qSMIAFS0k_ItwzPXQJg4uU_3F_Vwyz6cOvEuWkor3o';
    this.apiKey = '';
  }

  componentDidMount() {
    fetch(this.getUrl())
      .then(response => response.json())
      .then(data => this.setState({ db: this.processData(data) }))
      .catch(error => console.log(error));
  }

  getChildContext() {
    return { db: this.state.db };
  }

  getUrl = () =>
    `https://sheets.googleapis.com/v4/spreadsheets/${this.spreadSheetId}?includeGridData=true&fields=sheets(data%2FrowData%2Fvalues%2FformattedValue%2Cproperties%2Ftitle)&key=${this.apiKey}`;

  processData = ({ sheets }) => {
    let result = {};

    sheets.forEach(sheet => {
      const {
        properties: { title: id },
        data
      } = sheet;
      let [headerRow, ...records] = data[0].rowData;
      headerRow = flatMap(headerRow.values, row => row.formattedValue);
      result = {
        ...result,
        [id]: records.map(record => {
          let result = {};

          headerRow.forEach((value, index) => {
            result = {
              [value]: record.values[index]
                ? record.values[index].formattedValue
                : null,
              ...result
            };
          });

          return result;
        })
      };
    });

    return result;
  };

  render() {
    return this.state.db ? (
      this.props.children
    ) : (
      <Spinner className="loading" name="wave" color="steelblue" />
    );
  }
}

export default GoogleSheetsProvider;
