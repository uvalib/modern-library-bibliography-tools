import {LitElement, html} from 'lit';

class UVALibResult extends LitElement {
    static properties = {
        item: {type: Object}
    }

    constructor() {
        super();
        this.item = {};
    }

    connectedCallback() {
        super.connectedCallback();
    }

    render() {
        return html`
        <div class="result" >
            <strong>${this.item.type}</strong> <a href="/${this.item.type}/${this.item.id}.html">${this.item.title}</a>
        </div>
        `;
    }
}
customElements.define('uvalib-result', UVALibResult);