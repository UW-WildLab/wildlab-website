import React, { Component } from 'react';
import PropTypes from 'prop-types';
import flowRight from 'lodash/flowRight';
import { DataLink, withSection } from '../../components';
import { withGoogleSheets } from '../../components';
import { getAuthors } from '../../utils';

class PublicationsTable extends Component {
  static propTypes = {
    db: PropTypes.shape({
      people: PropTypes.arrayOf(PropTypes.object),
      publications: PropTypes.arrayOf(PropTypes.object)
    })
  };

  publications = this.props.db.publications.map(p => ({
    ...p,
    authors: getAuthors(this.props.db.people, p.authors)
  }));

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
              {publications.map((p, i) => (
                <div
                  key={p.id}
                  style={{ clear: i % 3 === 0 ? 'both' : 'none' }}
                  className="width_33_percentage width_100_percentage_responsive float_left"
                >
                  <div className="section padding_15 box_sizing_border_box">
                    <div className="section border_1_solid_grey">
                      <div className="section position_relative">
                        <img
                          alt=""
                          className="section"
                          src="/img/courses/img2.png"
                        />
                        <div className="bg_greydark_alpha position_absolute left_0 height_100_percentage width_100_percentage padding_30 box_sizing_border_box"></div>
                        {p.best_paper === 'Y' && (
                          <DataLink
                            className="position_absolute right_20 top_20 display_inline_block color_white bg_green first_font padding_8 border_radius_3 font_size_13 z_index_9"
                            to={p.url}
                          >
                            BEST PAPER
                          </DataLink>
                        )}
                      </div>

                      <div className="section padding_20 box_sizing_border_box">
                        <h3>
                          <DataLink
                            className="color_greydark first_font"
                            to={p.url}
                          >
                            {p.title}
                          </DataLink>
                        </h3>
                      </div>
                      <div className="section padding_10_20 box_sizing_border_box bg_grey border_top_1_solid_grey text_align_center">
                        {p.authors}
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
  withGoogleSheets('people'),
  withSection('publications-table')
)(PublicationsTable);
