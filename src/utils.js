import React from 'react';
import filter from 'lodash/filter';
import kebabCase from 'lodash/kebabCase';
import orderBy from 'lodash/orderBy';
import isUndefined from 'lodash/isUndefined';
import moment from 'moment';
import { DataLink } from './components';

export const filterDatabaseByType = (db, type, index) =>
  isUndefined(index)
    ? filter(db, d => d.type === type)
    : filter(db, d => d.type === type)[index];

export const getDataByForeignKey = (table, ids) => {
  ids = ids == null || ids.trim() === '' ? '[]' : ids;

  return JSON.parse(ids)
    .map(id => table.find(t => t.id === id.toString()))
    .filter(f => f);
};

export const getAuthors = (people, ids = [], component = true) =>
  getDataByForeignKey(people, ids).map(d =>
    component ? (
      <DataLink key={d.id} to={`/people/${kebabCase(d.name.trim())}-${d.id}`}>
        {d.name.trim()}
      </DataLink>
    ) : (
      d.name.trim()
    )
  );

export const getPublications = (publications = [], ids) =>
  getDataByForeignKey(publications, ids).map(d => d.title.trim());

export const formatPublicationsTitle = publications =>
  publications.map(p => ({
    ...p,
    fullTitle: `${p.title} (${p.conference}'${p.year})`
  }));

export const getDataById = (table, field, id) =>
  table.filter(t => JSON.parse(t[field] || '[]').includes(parseInt(id)));

export const displayAuthors = authors =>
  authors.length > 0 ? (
    authors.map((a, i) => {
      let joiner = '';

      if (authors.length > 1) {
        if (authors.length === 2 && i === 0) {
          joiner = ' and ';
        } else if (i < authors.length - 2) {
          joiner = ', ';
        } else if (i !== authors.length - 1) {
          joiner = ', and ';
        }
      }

      return (
        <span key={i} style={{ color: '#999' }}>
          {a}
          {joiner}
        </span>
      );
    })
  ) : (
    <span style={{ color: '#999' }}>No authors found</span>
  );

export const orderByDate = (data, key = 'date') =>
  orderBy(
    data.map(n => {
      const date = moment(n[key], 'MM/DD/YYYY');

      return {
        ...n,
        date: date.format('Do MMMM YYYY'),
        timestamp: date.format('x')
      };
    }),
    ['timestamp'],
    ['desc']
  );

export const convertDriveUrlToPhotoUrl = url =>
  url
    ? `http://drive.google.com/uc?export=view&id=${url.split('id=')[1]}`
    : null;

export const getBannerImages = type =>
  require
    .context('../public/banner', true)
    .keys()
    .filter(i => i.includes(type))
    .map(i => i.replace('./', '/banner/'));
