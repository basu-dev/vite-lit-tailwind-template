import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { createRef, ref, Ref } from 'lit/directives/ref.js';
import "../../styles.css";
import { todoStyles } from './todo.styles';

@customElement('add-todo')
export class AddTodo extends LitElement {
    constructor() {
        super();
    }

    static styles = [todoStyles];

    inputRef: Ref<HTMLInputElement> = createRef();

    addTodo() {
        let todo = this.inputRef.value?.value;
        if (todo) {
            this.dispatchEvent(new CustomEvent('onTodoAdded', { detail: todo }));
            this.inputRef.value!.value = "";
        }
    }

    render() {
        return html`
        <form>  
            <input name="todo" ${ref(this.inputRef)}>
            <button type="button" @click=${this.addTodo}>Add</button>
        </form>
    `;
    }
}