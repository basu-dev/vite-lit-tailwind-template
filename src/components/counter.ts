import { html, LitElement } from 'lit';
import tailwind from 'lit-tailwindcss';
import { customElement, property } from 'lit/decorators.js';

@customElement('app-counter')
export class MyApp extends LitElement {
  static styles = [tailwind];

  @property({ type: Number })
  count = 0;

  render() {
    return html`
      <div
        class="flex flex-col justify-center items-center h-screen text-gray-900 font-sans"
      >
        <h1 class="font-bold text-6xl">Count ${this.count}</h1>
        <button
          class="border border-gray-900 p-3 pl-10 pr-10 rounded-full w-52 mt-5"
          @click=${() => this.count--}
        >
          Decrement
        </button>
        <button
          class="border border-gray-900 p-3 pl-10 pr-10 rounded-full w-52 mt-5"
          @click=${() => this.count++}
        >
          Increment
        </button>
      </div>
    `;
  }
}