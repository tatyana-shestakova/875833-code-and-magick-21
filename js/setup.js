'use strict';

(function () {
  window.dialog.setup.querySelector('.setup-similar').classList.remove('hidden');

  const submitHandler = (evt) => {
    window.backend.save(new FormData(window.validation.setupForm), function () {
      window.dialog.setup.classList.add('hidden');
    }, window.ErrorHandler);

    evt.preventDefault();
  };

  window.validation.setupForm.addEventListener('submit', submitHandler);

})();
