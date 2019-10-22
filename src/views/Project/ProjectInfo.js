import React, { Component } from 'react';
import PropTypes from 'prop-types';
import flowRight from 'lodash/flowRight';
import { DataLink, withSection, withTitle } from '../../components';
import { withGoogleSheets } from '../../components';
import { getAuthors, getDataByForeignKey } from '../../utils';

import './ProjectInfo.css';

class ProjectInfo extends Component {
  static propTypes = {
    db: PropTypes.shape({
      people: PropTypes.arrayOf(PropTypes.object),
      publications: PropTypes.arrayOf(PropTypes.object)
    }),
    project: PropTypes.object.isRequired
  };

  state = { selectedTab: 'publications' };

  selectTab = tab => {
    if (this.state.selectedTab !== tab) {
      this.setState({ selectedTab: tab });
    }
  };

  render() {
    const {
      db: { people, publications },
      project
    } = this.props;

    const publicationsByProject = getDataByForeignKey(
      publications,
      project.publications
    ).reverse();

    const authorsByProject = getAuthors(people, project.members);

    return (
      <div className="section">
        <div className="container clearfix">
          <div className="section padding_15 box_sizing_border_box">
            <div className="width_50_percentage width_100_percentage_responsive float_left padding_top_10">
              <div className="section position_relative">
                <img alt="" className="section" src="/img/courses/img1.png" />
              </div>
            </div>

            <div className="width_50_percentage width_100_percentage_responsive float_left padding_left_20">
              <p>{project.description}</p>
            </div>

            <div className="section height_40"></div>

            <div className="section">
              <div className="tabs ui-tabs ui-widget ui-widget-content ui-corner-all">
                <ul
                  className="list_style_none margin_0 padding_0 section border_bottom_2_solid_grey ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"
                  role="tablist"
                >
                  <li
                    className={`display_inline_block ui-state-default ui-corner-top ${
                      this.state.selectedTab === 'publications'
                        ? 'ui-tabs-active ui-state-active'
                        : ''
                    }`}
                    role="tab"
                    tabIndex="0"
                    aria-controls="tabs-2"
                    aria-labelledby="ui-id-2"
                    aria-selected="true"
                    aria-expanded="true"
                  >
                    <h4>
                      <span
                        className="outline_0 padding_20 padding_right_10 display_inline_block first_font color_greydark ui-tabs-anchor"
                        onClick={() => this.selectTab('publications')}
                        tabIndex="-1"
                        id="ui-id-2"
                        role="presentation"
                      >
                        Publications
                      </span>
                      <span
                        className="display_inline_block bg_grey margin_right_20 border_1_solid_grey first_font padding_8 border_radius_3 font_size_13"
                        onClick={() => this.selectTab('publications')}
                      >
                        {publicationsByProject.length}
                      </span>
                    </h4>
                  </li>
                  <li
                    className={`display_inline_block ui-state-default ui-corner-top ${
                      this.state.selectedTab === 'members'
                        ? 'ui-tabs-active ui-state-active'
                        : ''
                    }`}
                    role="tab"
                    tabIndex="-1"
                    aria-controls="tabs-1"
                    aria-labelledby="ui-id-1"
                    aria-selected="false"
                    aria-expanded="false"
                  >
                    <h4>
                      <span
                        className="outline_0 padding_20 padding_right_10 display_inline_block first_font color_greydark ui-tabs-anchor"
                        onClick={() => this.selectTab('members')}
                        tabIndex="-1"
                        id="ui-id-1"
                        role="presentation"
                      >
                        Members
                      </span>
                      <span
                        className="display_inline_block bg_grey margin_right_20 border_1_solid_grey first_font padding_8 border_radius_3 font_size_13"
                        onClick={() => this.selectTab('members')}
                      >
                        {authorsByProject.length}
                      </span>
                    </h4>
                  </li>
                </ul>
                <div className="section height_20"></div>
                <div
                  className="section ui-tabs-panel ui-widget-content ui-corner-bottom"
                  id="tabs-members"
                  aria-labelledby="tabs-members"
                  role="tabpanel"
                  aria-hidden={!this.state.selectedTab === 'members'}
                  style={{
                    display:
                      this.state.selectedTab === 'members' ? 'block' : 'none'
                  }}
                >
                  <div className="section">
                    <div className="section">
                      {authorsByProject.map((author, i) => (
                        <div
                          key={i}
                          style={{ clear: i % 4 === 0 ? 'both' : 'none' }}
                          className="width_25_percentage width_50_percentage_all_iphone padding_20 float_left box_sizing_border_box"
                        >
                          <div className="section box_sizing_border_box">
                            <div className="section position_relative">
                              <img
                                alt=""
                                className="section"
                                src="/img/avatar/avatar-chef-2.png"
                              />
                              <div className="bg_greydark_alpha_gradient_3 position_absolute left_0 height_100_percentage width_100_percentage box_sizing_border_box">
                                <div className="position_absolute bottom_20 width_100_percentage padding_botttom_0 padding_20 box_sizing_border_box text_align_center project-info-author">
                                  {author}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div
                  className="section ui-tabs-panel ui-widget-content ui-corner-bottom"
                  id="tabs-publications"
                  aria-labelledby="tabs-publications"
                  role="tabpanel"
                  aria-hidden={!this.state.selectedTab === 'publications'}
                  style={{
                    display:
                      this.state.selectedTab === 'publications'
                        ? 'block'
                        : 'none'
                  }}
                >
                  <div className="section">
                    {publicationsByProject.map(p => (
                      <div key={p.id} className="person-publications-table">
                        <DataLink to={p.url}>
                          <strong>{p.title.trim()}</strong>
                        </DataLink>
                        <span className="conference-text">
                          {' '}
                          ({p.conference}
                          {"'"}
                          {p.year})
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default flowRight(
  withGoogleSheets('people'),
  withGoogleSheets('publications'),
  withTitle({ path: 'project.name' }),
  withSection('project-info')
)(ProjectInfo);
