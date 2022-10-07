
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import "./add-todo";
import "./todo-item";
import { todoStyles } from './todo.styles';


@customElement('app-todo')
export class Todo extends LitElement {
    constructor() {
        super();
    }
    static styles = [todoStyles];

    onTodoAdded(e: any) {
        this.incompleteTodos = [...this.incompleteTodos, e.detail];
    }

    handleOnComplete(todo: string) {
        this.incompleteTodos = this.incompleteTodos.filter(i => i != todo);
        this.completedTodos = [...this.completedTodos, todo];
    }

    handleOnInComplete(todo: string) {
        this.completedTodos = this.completedTodos.filter(i => i != todo);
        this.incompleteTodos = [...this.incompleteTodos, todo];
    }


    @property({ type: [String] })
    completedTodos = [
        "Wake Up",
    ];

    @property({ type: [String] })
    incompleteTodos = [
        "Read Novel"
    ];

    render() {
        return html`

        <div>
            <h1 class="text-center">Todo</h1>
            <add-todo @onTodoAdded=${this.onTodoAdded} class="text-center"></add-todo>
            <br/>
            <div class="todo-grid">
                <div class="incomplete-list">
                    ${this.incompleteTodos.map(todo => html`<todo-item @onComplete=${() => this.handleOnComplete(todo)} .completed=${false} .todo=${todo}></todo-item>`)
            }
                </div>
                <div class="completed-list">
                    ${this.completedTodos.map(todo => html`<todo-item @onInComplete=${() => this.handleOnInComplete(todo)} .completed=${true} .todo=${todo}></todo-item>`)
            }
                </div>
            </div>
        </div>
    `;
    }
}