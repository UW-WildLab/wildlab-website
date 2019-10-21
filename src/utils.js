import filter from 'lodash/filter';
import isUndefined from 'lodash/isUndefined';

export const filterDatabaseByType = (db, type, index) =>
  isUndefined(index)
    ? filter(db, d => d.type === type)
    : filter(db, d => d.type === type)[index];

export const getDataByForeignKey = (table, ids = []) =>
  JSON.parse(ids)
    .map(id => table.find(t => t.id === id.toString()))
    .filter(f => f);

export const getAuthors = (people, ids = []) => {
  const authors = getDataByForeignKey(people, ids).map(d => d.name.trim());

  if (authors.length === 0) {
    return 'No author found';
  } else if (authors.length === 1) {
    return authors[0];
  } else if (authors.length === 2) {
    return `${authors[0]} and ${authors[1]}`;
  } else {
    return (
      authors.slice(0, authors.length - 1).join(', ') +
      ', and ' +
      authors[authors.length - 1]
    );
  }
};

export const formatPublicationsTitle = publications =>
  publications.map(p => ({
    ...p,
    fullTitle: `${p.title} (${p.conference}'${p.year})`
  }));

export const getDataById = (table, field, id) =>
  table.filter(t => JSON.parse(t[field]).includes(parseInt(id)));
