import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import "./components/todo/todo";

@customElement('my-app')
export class MyApp extends LitElement {

  @property({ type: Number })
  count = 0;

  render() {
    return html`
    <app-todo/>

    `;
  }
}