import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import "./components/counter";
import "./components/home";

@customElement('my-app')
export class MyApp extends LitElement {

  @property({ type: Number })
  count = 0;

  render() {
    return html`
    <app-home></app-home>
    <app-counter></app-counter>

    `;
  }
}