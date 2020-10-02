import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';



export default class AddtodoComponent extends Component {
    @service store
    @tracked title = '';
    
    @action
    submit() {
        let todo = this.store.createRecord('todo', {
            title: this.title
        })

        console.log('todo-debug', todo)
        todo.save();
    }
}