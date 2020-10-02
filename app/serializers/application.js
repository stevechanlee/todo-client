import JSONAPISerializer from '@ember-data/serializer/json-api';
// import { camelize } from '@ember/string'

export default class ApplicationSerializer extends JSONAPISerializer {
    // keyForAttribute(attr, method) {
    //     console.log('attr', attr)
    //     console.log('method', method)
    //     console.log('camelize', camelize(attr))
    //     return camelize(attr)
    // }
    // normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    //     console.log(payload)
    //     return this._super(store, primaryModelClass, payload, id, requestType);
    // }
}