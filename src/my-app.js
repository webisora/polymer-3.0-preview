import {Element as PolymerElement}
    from '../node_modules/@polymer/polymer/polymer-element.js';

export class MyApp extends PolymerElement {

  // Define a string template instead of a `<template>` element.
  static get template() {
    return `<div>This is my first [[name]] app.</div>`
  }

  constructor() {
    super();
    this.name = 'Polymer 3.0 preview';
  }

  // properties, observers, etc. are identical to 2.x
  static get properties() {
    name: {
      Type: String
    }
  }
}

customElements.define('my-app', MyApp);