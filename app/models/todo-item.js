import Model, { attr, belongsTo } from '@ember-data/model';

export default Model.extend({
    content: attr('string'),
    todo: belongsTo('todo')
  });