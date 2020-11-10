'use strict';

(function () {
  window.dialog.setup.querySelector('.setup-similar').classList.remove('hidden');

  const coatColorUser = document.querySelector('.setup-wizard .wizard-coat');
  const eyesColorUser = document.querySelector('.setup-wizard .wizard-eyes');
  const fireballColorUser = document.querySelector('.setup-fireball-wrap');

  window.changeColor(coatColorUser, window.util.wizardCoats, '.setup-player input[name="coat-color"]');
  window.changeColor(eyesColorUser, window.util.wizardEyes, '.setup-player input[name="eyes-color"]');
  window.changeColor(fireballColorUser, window.util.fireballsColor, '.setup-player input[name="fireball-color"]');

})();
