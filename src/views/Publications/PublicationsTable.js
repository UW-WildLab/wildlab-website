import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withGoogleSheets } from 'react-db-google-sheets';
import flowRight from 'lodash/flowRight';
import orderBy from 'lodash/orderBy';
import { DataLink, withSection } from '../../components';

import './PublicationsTable.css';

class PublicationsTable extends Component {
  static propTypes = {
    db: PropTypes.shape({
      publications: PropTypes.arrayOf(PropTypes.object)
    })
  };

  publications = orderBy(
    this.props.db.publications,
    ['year', 'conference'],
    ['desc', 'asc']
  );

  constructor(props) {
    super(props);
    this.state = {
      publications: this.publications,
      searchQuery: ''
    };
  }

  searchFieldOnChange = value => {
    if (this.state.searchQuery !== value) {
      this.setState({
        publications: this.publications.filter(
          p =>
            p.title.toLowerCase().includes(value) ||
            p.conference.toLowerCase().includes(value) ||
            p.authors.toLowerCase().includes(value)
        ),
        searchQuery: value
      });
    }
  };

  render() {
    const { publications } = this.state;

    return (
      <div className="section">
        <div className="container clearfix">
          <div className="width_100_percentage">
            <div className="section padding_15 box_sizing_border_box">
              <div className="section box_sizing_border_box float_left position_relative padding_right_20">
                <img
                  alt=""
                  className="position_absolute top_5 left_0 margin_top_5"
                  width="15"
                  src="/img/icons/icon-search-grey.svg"
                />
                <input
                  className="padding_left_25 border_width_2 background_none border_top_width_0 border_right_width_0 border_left_width_0"
                  type="text"
                  placeholder="Search"
                  onChange={e => this.searchFieldOnChange(e.target.value)}
                />
              </div>
            </div>

            <div className="width_100_percentage">
              {publications.map(p => (
                <div className="width_100_percentage_responsive" key={p.id}>
                  <div className="section padding_15 box_sizing_border_box">
                    <div className="section">
                      <div className="section box_sizing_border_box">
                        <h3 style={{ marginBottom: '10px' }}>
                          <DataLink
                            className="color_greydark first_font"
                            to={p.url || '#'}
                          >
                            {`(${p.conference} ${p.year}) ${p.title}`}
                            {p.award && p.award.trim() !== '' && (
                              <span className="paper-award margin_left_10 display_inline_block color_white bg_green first_font padding_8 border_radius_3 font_size_13 z_index_9">
                                {p.award}
                              </span>
                            )}
                          </DataLink>
                        </h3>
                        <div className="publication-authors">{p.authors}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default flowRight(
  withGoogleSheets('publications'),
  withSection('publications-table')
)(PublicationsTable);
