import JSONAPIAdapter from '@ember-data/adapter/json-api';
import { computed } from '@ember/object';

export default class ApplicationAdapter extends JSONAPIAdapter {
    namespace = 'api'
    host = 'http://localhost:8000'
    headers = computed(function() {
        return {
            'Access-Control-Allow-Origin': '*'
        }
    })
}