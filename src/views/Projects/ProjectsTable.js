import React, { Component } from 'react';
import PropTypes from 'prop-types';
import flowRight from 'lodash/flowRight';
import kebabCase from 'lodash/kebabCase';
import { withGoogleSheets } from 'react-db-google-sheets';
import { DataLink, withSection } from '../../components';
import {
  getAuthors,
  getPublications,
  convertDriveUrlToPhotoUrl
} from '../../utils';

class ProjectsTable extends Component {
  static propTypes = {
    db: PropTypes.shape({
      people: PropTypes.arrayOf(PropTypes.object),
      publications: PropTypes.arrayOf(PropTypes.object),
      projects: PropTypes.arrayOf(PropTypes.object)
    })
  };

  projects = this.props.db.projects
    .map(p => ({
      ...p,
      publications: getPublications(
        this.props.db.publications,
        p.publications || '[]'
      ),
      members: getAuthors(this.props.db.people, p.members || '[]', false)
    }))
    .filter(p => p.id && p.name);

  constructor(props) {
    super(props);
    this.state = {
      projects: this.projects,
      searchQuery: ''
    };
  }

  searchFieldOnChange = value => {
    if (this.state.searchQuery !== value) {
      this.setState({
        projects: this.projects.filter(
          p =>
            p.name.toLowerCase().includes(value) ||
            p.publications.some(a => a.toLowerCase().includes(value)) ||
            p.members.some(a => a.toLowerCase().includes(value))
        ),
        searchQuery: value
      });
    }
  };

  render() {
    const { projects } = this.state;

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
              {projects.reverse().map((p, i) => (
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
                          src={
                            convertDriveUrlToPhotoUrl(p.url) ||
                            '/img/courses/img2.png'
                          }
                        />
                      </div>
                      <div className="section padding_20 box_sizing_border_box text_align_center">
                        <h3>
                          <DataLink
                            className="color_greydark first_font"
                            to={`/projects/${kebabCase(p.name)}-${p.id}`}
                          >
                            {p.name.trim()}
                          </DataLink>
                        </h3>
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
  withGoogleSheets('projects'),
  withGoogleSheets('people'),
  withGoogleSheets('publications'),
  withSection('projects-table')
)(ProjectsTable);
