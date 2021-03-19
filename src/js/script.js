window.addEventListener('DOMContentLoaded', () => {
    const tabs = require('./modules/tabs'),
          modal = require('./modules/modal'),
          calculator = require('./modules/calculator'),
          slider = require('./modules/slider'),
          cards = require('./modules/cards'),
          timer = require('./modules/timer');
    tabs();
    modal();
    calculator();
    slider();
    cards();
    timer();
});