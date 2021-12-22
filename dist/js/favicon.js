class FavIcon extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <link rel="apple-touch-icon" sizes="180x180" href="https://res.cloudinary.com/abhinithame/image/upload/v1640096730/younique/apple-touch-icon.png">
  	<link rel="icon" type="image/png" sizes="32x32" href="https://res.cloudinary.com/abhinithame/image/upload/v1640096730/younique/favicon-32x32.png">
  	<link rel="icon" type="image/png" sizes="16x16" href="https://res.cloudinary.com/abhinithame/image/upload/v1640096730/younique/favicon-16x16.png">
  	`
  }
}
customElements.define('unq-favicon', FavIcon);
