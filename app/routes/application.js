import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'

export default class IndexRoute extends Route {
    // async model() {
    //     let response = await fetch('http://localhost:8000/api/todos')
    //     let parsed = await response.json();
    //     return parsed;
    // }

    @service store;
    
    // async model() {
    //     console.log(this.store.findAll('todo'))
    //     return this.store.findAll('todo');
    // }
}