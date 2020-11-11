'use strict';

(function () {

  const similarWizardsList = document.querySelector('.setup-similar-list');
  const wizardsTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  const COUNT_WIZARDS = 4;

  window.render = {
    indexRandomizer: (variable) => {
      let randomIndex = variable[Math.floor(Math.random() * variable.length)];
      return randomIndex;
    }
  };

  const renderWizards = (wizard) => {
    let wizardsElement = wizardsTemplate.cloneNode(true);
    wizardsElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardsElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardsElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardsElement;
  };


  const renderWizardsHandler = (wizards) => {
    let fragment = document.createDocumentFragment();
    for (let i = 0; i < COUNT_WIZARDS; i++) {
      fragment.appendChild(renderWizards(window.render.indexRandomizer(wizards)));
      similarWizardsList.appendChild(fragment);
    }
  };

  window.ErrorHandler = (errorMessage) => {
    let node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: white; color: black;';
    node.style.position = 'absolute';
    node.style.left = 10 + '%';
    node.style.top = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backend.load(renderWizardsHandler, window.ErrorHandler);

})();
