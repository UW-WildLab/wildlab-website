import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import flowRight from 'lodash/flowRight';
import kebabCase from 'lodash/kebabCase';
import {
  withSection,
  withTitle,
  DataLink,
  withGoogleSheets
} from '../../components';
import { getDataById } from '../../utils';

import './PersonInfo.css';

class PersonInfo extends Component {
  static propTypes = {
    db: PropTypes.shape({
      publications: PropTypes.arrayOf(PropTypes.object)
    }),
    person: PropTypes.object.isRequired
  };

  state = { selectedTab: 'projects' };

  selectTab = tab => {
    if (this.state.selectedTab !== tab) {
      this.setState({ selectedTab: tab });
    }
  };

  render() {
    const {
      db: { projects, publications },
      person
    } = this.props;

    const publicationsByAuthor = getDataById(
      publications,
      'authors',
      person.id
    ).reverse();

    const projectsByAuthor = getDataById(
      projects,
      'members',
      person.id
    ).reverse();

    return (
      <div className="section">
        <div className="container clearfix">
          <div className="width_66_percentage width_100_percentage_responsive float_left">
            <div className="section padding_15 box_sizing_border_box">
              <div className="section height_20"></div>
              {person.about && (
                <div className="width_100_percentage width_100_percentage_all_iphone float_left ">
                  <p className="padding_10 padding_0_all_iphone padding_left_0">
                    {person.about}
                  </p>
                </div>
              )}
              <div className="section height_40"></div>
              <div className="section">
                <div className="tabs ui-tabs ui-widget ui-widget-content ui-corner-all">
                  <ul
                    className="list_style_none margin_0 padding_0 section border_bottom_2_solid_grey ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"
                    role="tablist"
                  >
                    <li
                      className={`display_inline_block ui-state-default ui-corner-top ${
                        this.state.selectedTab === 'projects'
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
                          onClick={() => this.selectTab('projects')}
                          tabIndex="-1"
                          id="ui-id-1"
                          role="presentation"
                        >
                          Projects
                        </span>
                        <span
                          className="display_inline_block bg_grey margin_right_20 border_1_solid_grey first_font padding_8 border_radius_3 font_size_13"
                          onClick={() => this.selectTab('projects')}
                        >
                          {projectsByAuthor.length}
                        </span>
                      </h4>
                    </li>
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
                          {publicationsByAuthor.length}
                        </span>
                      </h4>
                    </li>
                  </ul>
                  <div className="section height_20"></div>
                  <div
                    className="section ui-tabs-panel ui-widget-content ui-corner-bottom"
                    id="tabs-projects"
                    aria-labelledby="tabs-projects"
                    role="tabpanel"
                    aria-hidden={!this.state.selectedTab === 'projects'}
                    style={{
                      display:
                        this.state.selectedTab === 'projects' ? 'block' : 'none'
                    }}
                  >
                    <div className="section">
                      <div className="section">
                        {projectsByAuthor.map((project, i) => (
                          <div
                            key={i}
                            style={{ clear: i % 3 === 0 ? 'both' : 'none' }}
                            className="width_33_percentage width_100_percentage_all_iphone padding_20 float_left box_sizing_border_box"
                          >
                            <div className="section box_sizing_border_box">
                              <div className="section position_relative">
                                <img
                                  alt=""
                                  className="section"
                                  src="/img/avatar/avatar-chef-2.png"
                                />
                                <div className="bg_greydark_alpha_gradient_3 position_absolute left_0 height_100_percentage width_100_percentage box_sizing_border_box">
                                  <div className="position_absolute bottom_20 width_100_percentage padding_botttom_0 padding_20 box_sizing_border_box text_align_center">
                                    <h5 className="color_white">
                                      <DataLink
                                        to={`/projects/${kebabCase(
                                          project.name
                                        )}-${project.id}`}
                                      >
                                        <strong style={{ color: 'white' }}>
                                          {project.name}
                                        </strong>
                                      </DataLink>
                                    </h5>
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
                      {publicationsByAuthor.map(p => (
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
            <div className="section height_50"></div>
          </div>
          <div className="width_33_percentage width_100_percentage_responsive float_left">
            <div className="section padding_15 box_sizing_border_box">
              <table className="person-info-table section">
                <tbody>
                  {person.email && (
                    <tr className="border_bottom_2_solid_grey">
                      <td className="padding_20 ">
                        <FontAwesome name="envelope" size="2x" />
                      </td>
                      <td className="padding_20 ">
                        <span className="person-info-table-text text_align_right">
                          <DataLink to={`mailto:${person.email}`}>
                            {person.email}
                          </DataLink>
                        </span>
                      </td>
                    </tr>
                  )}
                  {person.website && (
                    <tr className="border_bottom_2_solid_grey">
                      <td className="padding_20 ">
                        <FontAwesome name="globe" size="2x" />
                      </td>
                      <td className="padding_20 ">
                        <span className="person-info-table-text text_align_right">
                          <DataLink to={person.website}>
                            {person.website}
                          </DataLink>
                        </span>
                      </td>
                    </tr>
                  )}
                  {person.twitter && (
                    <tr className="border_bottom_2_solid_grey">
                      <td className="padding_20">
                        <FontAwesome name="twitter" size="2x" />
                      </td>
                      <td className="padding_20">
                        <span className="person-info-table-text text_align_right">
                          <DataLink
                            to={`https://twitter.com/${person.twitter}`}
                          >
                            {`@${person.twitter}`}
                          </DataLink>
                        </span>
                      </td>
                    </tr>
                  )}
                  {person.linkedin && (
                    <tr className="border_bottom_2_solid_grey">
                      <td className="padding_20 ">
                        <FontAwesome name="linkedin" size="2x" />
                      </td>
                      <td className="padding_20 ">
                        <span className="person-info-table-text text_align_right">
                          <DataLink to={person.linkedin}>
                            {person.linkedin}
                          </DataLink>
                        </span>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <div className="section height_50"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default flowRight(
  withTitle({ path: 'person.name' }),
  withSection('person-info'),
  withGoogleSheets('projects'),
  withGoogleSheets('publications')
)(PersonInfo);
