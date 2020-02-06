import React from 'react';
import PropTypes from 'prop-types';
import flowRight from 'lodash/flowRight';
import kebabCase from 'lodash/kebabCase';
import { withGoogleSheets } from 'react-db-google-sheets';
import { DataLink, withSection } from '../../components';
import { convertDriveUrlToPhotoUrl } from '../../utils';

import './PeopleTable.css';

const PeopleTable = ({ db: { people } }) => (
  <div className="section ">
    <div className="container clearfix">
      <div className="width_100_percentage">
        {people.map((p, i) => (
          <div
            className="grid grid_3"
            key={p.id}
            style={{ clear: i % 4 === 0 ? 'both' : 'none' }}
          >
            <div className="section">
              <div className="section ">
                <div className="section position_relative">
                  <img
                    alt={p.name}
                    className="section"
                    src={
                      convertDriveUrlToPhotoUrl(p.photo_url) ||
                      '/img/avatar/avatar-chef-5.png'
                    }
                  />

                  <div className="img-div bg_greydark_alpha_gradient position_absolute left_0 height_100_percentage width_100_percentage padding_20 box_sizing_border_box">
                    <div className="position_absolute bottom_20"></div>
                  </div>
                </div>

                <div className="section box_sizing_border_box">
                  <h2 className="people-name">
                    <strong>
                      <DataLink to={`/people/${kebabCase(p.name)}-${p.id}`}>
                        {p.name}
                      </DataLink>
                    </strong>
                  </h2>
                  <div className="section height_10"></div>
                  <h6 className="text_transform_uppercase color_grey designation">
                    {p.designation}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

PeopleTable.propTypes = {
  db: PropTypes.shape({
    people: PropTypes.arrayOf(PropTypes.object)
  })
};

export default flowRight(
  withGoogleSheets('people'),
  withSection('people-table')
)(PeopleTable);
