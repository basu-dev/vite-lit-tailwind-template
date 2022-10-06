import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { homeStyles } from './home.style';
// import "../styles.css";

@customElement('app-home')
export class MyApp extends LitElement {
    constructor() {
        super();
        setTimeout(() => {
            this.name = "Dev Only";
        }, 10000);
    }
    static styles = [homeStyles];

    @property({ type: String })
    name = "Dev";

    render() {
        return html`
     <div > 
        Hello <b>${this.name}</b>.
     </div>
    `;
    }
}