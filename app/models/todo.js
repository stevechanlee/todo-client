import Model, { attr, hasMany } from '@ember-data/model';


export default Model.extend({
    title: attr('string'),
    todoItems: hasMany('todoItem')
  });