import filter from 'lodash/filter';
import isUndefined from 'lodash/isUndefined';

export const filterDatabaseByType = (db, type, index) =>
  isUndefined(index)
    ? filter(db, d => d.type === type)
    : filter(db, d => d.type === type)[index];
