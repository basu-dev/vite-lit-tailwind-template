
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { todoStyles } from './todo.styles';


@customElement('todo-item')
export class TodoItem extends LitElement {
    constructor() {
        super();

    }
    static styles = [todoStyles];

    @property({ type: String })
    todo = "";

    @property({ type: String })
    completed = false;

    onInComplete() {
        this.dispatchEvent(new CustomEvent('onInComplete'));
    }

    onComplete() {
        this.dispatchEvent(new CustomEvent('onComplete'));
    }

    render() {
        return html`<div class="flex gap-3 todo-item"> 
        <div class="item"> 
         ${this.todo}
         </div>
         ${this.completed ? html`
         <button @click=${this.onInComplete} class="button button-green btn-green">
            Mark as Incomplete
         </button>
            `:
                html`
         <button @click=${this.onComplete} class="button button-grey">
            Mark as Complete
         </button>
            `
            }
     </div>
    `;
    }
}