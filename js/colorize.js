'use strict';

let colorValue;
let coatColor = 'rgb(101, 137, 164)';
let eyesColor = 'black';

window.colorize = {
  sortCoat: coatColor,
  sortEyes: eyesColor,

  changeColorCoat: (element, color) => {
    element.addEventListener('click', function () {
      colorValue = window.render.indexRandomizer(color);
      element.style.fill = colorValue;
      window.colorize.sortCoat = colorValue;
      window.debounce(window.updateWizards);
    });
  },
  changeColorEyes: (element, color) => {
    element.addEventListener('click', function () {
      colorValue = window.render.indexRandomizer(color);
      element.style.fill = colorValue;
      window.colorize.sortEyes = colorValue;
      window.debounce(window.updateWizards);
    });
  },
  changeColorFire: (element, color, part) => {
    element.addEventListener('click', function () {
      colorValue = window.render.indexRandomizer(color);
      let input = document.querySelector(part);
      input.value = colorValue;
      element.style.background = colorValue;
    });
  }
};

