'use strict';

(function () {

  const similarWizardsList = document.querySelector('.setup-similar-list');
  const wizardsTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  window.render = {
    indexRandomizer: (variable) => {
      let randomIndex = variable[Math.floor(Math.random() * variable.length)];
      return randomIndex;
    }
  };

  const wizards = [
    {
      name: window.render.indexRandomizer(window.util.wizardNames) + ' ' + window.render.indexRandomizer(window.util.wizardSurnames),
      coatColor: window.render.indexRandomizer(window.util.wizardCoats),
      eyesColor: window.render.indexRandomizer(window.util.wizardEyes)
    },
    {
      name: window.render.indexRandomizer(window.util.wizardNames) + ' ' + window.render.indexRandomizer(window.util.wizardSurnames),
      coatColor: window.render.indexRandomizer(window.util.wizardCoats),
      eyesColor: window.render.indexRandomizer(window.util.wizardEyes)
    },
    {
      name: window.render.indexRandomizer(window.util.wizardNames) + ' ' + window.render.indexRandomizer(window.util.wizardSurnames),
      coatColor: window.render.indexRandomizer(window.util.wizardCoats),
      eyesColor: window.render.indexRandomizer(window.util.wizardEyes)
    },
    {
      name: window.render.indexRandomizer(window.util.wizardNames) + ' ' + window.render.indexRandomizer(window.util.wizardSurnames),
      coatColor: window.render.indexRandomizer(window.util.wizardCoats),
      eyesColor: window.render.indexRandomizer(window.util.wizardEyes)
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

})();
