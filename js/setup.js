'use strict';

const WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
const WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
const WIZARD_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
const WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];

const similarWizardsList = document.querySelector('.setup-similar-list');
const wizardsTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

const userSetup = document.querySelector('.setup');
userSetup.classList.remove('hidden');
userSetup.querySelector('.setup-similar').classList.remove('hidden');

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
