'use strict';

const WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
const WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
const WIZARD_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
const WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
const FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

const similarWizardsList = document.querySelector('.setup-similar-list');
const wizardsTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

const setup = document.querySelector('.setup');
const openSetup = document.querySelector('.setup-open');
const closeSetup = document.querySelector('.setup-close');

const form = setup.querySelector('.setup-wizard-form');

const userNameInput = form.querySelector('.setup-user-name');

const coatColorUser = document.querySelector('.setup-wizard .wizard-coat');
const eyesColorUser = document.querySelector('.setup-wizard .wizard-eyes');
const fireballColorUser = document.querySelector('.setup-fireball-wrap');

setup.querySelector('.setup-similar').classList.remove('hidden');

// Валидация

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

// События закрытия/открытия настройки персонажа

const escKeydownHandler = (evt) => {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    closePopup();
  }
};

const openPopup = () => {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', escKeydownHandler);
};

const closePopup = () => {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', escKeydownHandler);
};

openSetup.addEventListener('click', function () {
  openPopup();
});

openSetup.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    openPopup();
  }
});

closeSetup.addEventListener('click', function () {
  closePopup();
});

closeSetup.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    closePopup();
  }
});

// Рендер волшебников

const indexRandomizer = (variable) => {
  let randomIndex = variable[Math.floor(Math.random() * variable.length)];
  return randomIndex;
};

const wizards = [
  {
    name: indexRandomizer(WIZARD_NAMES) + ' ' + indexRandomizer(WIZARD_SURNAMES),
    coatColor: indexRandomizer(WIZARD_COATS),
    eyesColor: indexRandomizer(WIZARD_EYES)
  },
  {
    name: indexRandomizer(WIZARD_NAMES) + ' ' + indexRandomizer(WIZARD_SURNAMES),
    coatColor: indexRandomizer(WIZARD_COATS),
    eyesColor: indexRandomizer(WIZARD_EYES)
  },
  {
    name: indexRandomizer(WIZARD_NAMES) + ' ' + indexRandomizer(WIZARD_SURNAMES),
    coatColor: indexRandomizer(WIZARD_COATS),
    eyesColor: indexRandomizer(WIZARD_EYES)
  },
  {
    name: indexRandomizer(WIZARD_NAMES) + ' ' + indexRandomizer(WIZARD_SURNAMES),
    coatColor: indexRandomizer(WIZARD_COATS),
    eyesColor: indexRandomizer(WIZARD_EYES)
  }
];

const renderWizards = (wizard) => {
  let wizardsElement = wizardsTemplate.cloneNode(true);
  wizardsElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardsElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardsElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardsElement;
};

const renderFragment = (data) => {
  let fragment = document.createDocumentFragment();
  for (let i = 0; i < data.length; i++) {
    fragment.appendChild(renderWizards(data[i]));
    similarWizardsList.appendChild(fragment);
  }
};

renderFragment(wizards);

// Изменение персонажа по клику

const clickcolor = (variable, arr, selector) => {
  let colorValue = indexRandomizer(arr);
  let input = document.querySelector(selector);
  variable.style.fill = colorValue;
  variable.style.background = colorValue;
  input.value = colorValue;
};

coatColorUser.addEventListener('click', function () {
  clickcolor(coatColorUser, WIZARD_COATS, '.setup-player input[name="coat-color"]');
});

eyesColorUser.addEventListener('click', function () {
  clickcolor(eyesColorUser, WIZARD_EYES, '.setup-player input[name="eyes-color"]');
});

fireballColorUser.addEventListener('click', function () {
  clickcolor(fireballColorUser, FIREBALL_COLOR, '.setup-player input[name="fireball-color"]');
});
