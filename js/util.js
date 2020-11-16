'use strict';

const ESC_KEYCODE = 27;
const ENTER_KEYCODE = 13;
const WIZARD_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
const WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
const FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];


window.util = {
  isEscKeyCode: (evt, action) => {
    if (evt.keyCode === ESC_KEYCODE) {
      evt.preventDefault();
      action();
    }
  },
  isEnterKeyCode: (evt, action) => {
    if (evt.keyCode === ENTER_KEYCODE) {
      evt.preventDefault();
      action();
    }
  },

  wizardCoats: WIZARD_COATS,
  wizardEyes: WIZARD_EYES,
  fireballsColor: FIREBALL_COLOR,
};

