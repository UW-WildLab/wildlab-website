import React from 'react';
import PropTypes from 'prop-types';
import flowRight from 'lodash/flowRight';
import kebabCase from 'lodash/kebabCase';
import { withGoogleSheets } from 'react-db-google-sheets';
import { DataLink, withSection } from '../../components';

const Projects = ({ db: { projects } }) => {
  const highlightedProject =
    projects.find(p => p.highlighted === 'Y') || projects[0];

  projects = projects.filter(p => p.id !== highlightedProject.id).slice(0, 4);

  return (
    <div className="section">
      <div className="container clearfix">
        <div className="grid grid_12">
          <h1 className="font_size_50">
            <strong>Our Projects</strong>
          </h1>
        </div>
        <div className="width_50_percentage width_100_percentage_responsive float_left">
          {projects.map((p, i) => (
            <div
              key={p.id}
              style={{ clear: i % 2 === 0 ? 'both' : 'none' }}
              className="width_50_percentage width_100_percentage_all_iphone float_left"
            >
              <div className="section padding_15 box_sizing_border_box">
                <div className="section border_1_solid_grey">
                  <div className="section position_relative">
                    <img
                      alt=""
                      className="section"
                      src="/img/courses/img2.png"
                    />
                  </div>
                  <div className="section padding_20 box_sizing_border_box text_align_center">
                    <h3>
                      <DataLink
                        className="color_greydark first_font"
                        to={`/projects/${kebabCase(p.name)}-${p.id}`}
                      >
                        {p.name}
                      </DataLink>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="width_50_percentage width_100_percentage_responsive float_left">
          <div className="section padding_15 box_sizing_border_box">
            <div className="section border_1_solid_grey">
              <div className="section position_relative">
                <img alt="" className="section" src="/img/courses/img20.png" />
              </div>

              <div className="section padding_20 box_sizing_border_box">
                <h3 style={{ marginBottom: '14px' }}>
                  <DataLink
                    className="color_greydark first_font"
                    to={`/projects/${kebabCase(highlightedProject.name)}-${
                      highlightedProject.id
                    }`}
                  >
                    {highlightedProject.name}
                  </DataLink>
                </h3>
                <p>
                  {highlightedProject.description.substring(0, 175) + '...'}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section text_align_center custom-full-width-element">
          <p>The projects are made possible by the funding from X, Y, Z.</p>
        </div>
        <div className="section text_align_center custom-full-width-element">
          <DataLink
            className="display_inline_block font_size_13 color_white bg_blue first_font padding_8 border_radius_3"
            to="/projects"
          >
            View All Projects
          </DataLink>
        </div>
      </div>
    </div>
  );
};

Projects.propTypes = {
  db: PropTypes.shape({
    projects: PropTypes.arrayOf(PropTypes.object)
  })
};

export default flowRight(
  withGoogleSheets('projects'),
  withSection('projects')
)(Projects);
