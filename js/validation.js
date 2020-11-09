
'use strict';

(function () {

  const form = window.dialog.setup.querySelector('.setup-wizard-form');
  const userNameInput = form.querySelector('.setup-user-name');

  userNameInput.addEventListener('invalid', function () {
    if (userNameInput.validity.tooShort) {
      userNameInput.setCustomValidity('Это не имя, это буква. Давай начнём с 2-х символов?');
    } else if (userNameInput.validity.tooLong) {
      userNameInput.setCustomValidity('Самое длинное слово состоит из 189819 букв, но мы ограничиваемся 25 символами =)');
    } else if (userNameInput.validity.valueMissing) {
      userNameInput.setCustomValidity('Хм, давай что-ниубдь придумаем? Как звали твоего первого питомца?');
    } else {
      userNameInput.setCustomValidity('');
    }
  });

  userNameInput.addEventListener('input', function () {
    userNameInput.reportValidity();
  });

})();
