import React from 'react';
import filter from 'lodash/filter';
import kebabCase from 'lodash/kebabCase';
import isUndefined from 'lodash/isUndefined';
import { DataLink } from './components';

export const filterDatabaseByType = (db, type, index) =>
  isUndefined(index)
    ? filter(db, d => d.type === type)
    : filter(db, d => d.type === type)[index];

export const getDataByForeignKey = (table, ids = []) =>
  JSON.parse(ids)
    .map(id => table.find(t => t.id === id.toString()))
    .filter(f => f);

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

export const getPublications = (publications, ids = []) =>
  getDataByForeignKey(publications, ids).map(d => d.title.trim());

export const formatPublicationsTitle = publications =>
  publications.map(p => ({
    ...p,
    fullTitle: `${p.title} (${p.conference}'${p.year})`
  }));

export const getDataById = (table, field, id) =>
  table.filter(t => JSON.parse(t[field]).includes(parseInt(id)));

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
