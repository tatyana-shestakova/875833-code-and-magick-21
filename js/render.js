'use strict';

(function () {
  const COUNT_WIZARDS = 4;
  const similarWizardsList = document.querySelector('.setup-similar-list');
  const wizardsTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  const coatColorUser = document.querySelector('.setup-wizard .wizard-coat');
  const eyesColorUser = document.querySelector('.setup-wizard .wizard-eyes');
  const fireballColorUser = document.querySelector('.setup-fireball-wrap');

  let newWizards = [];

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

  const renderSimilarWizards = (wizards) => {
    let fragment = document.createDocumentFragment();
    const takeNumber = wizards.length > COUNT_WIZARDS ? COUNT_WIZARDS : wizards.length;
    similarWizardsList.innerHTML = '';
    for (let i = 0; i < takeNumber; i++) {
      fragment.appendChild(renderWizards(wizards[i]));
      similarWizardsList.appendChild(fragment);
    }
  };

  const getRank = (wizard) => {
    let rank = 0;

    if (wizard.colorCoat === window.colorize.sortCoat) {
      rank += 2;
    }
    if (wizard.colorEyes === window.colorize.sortEyes) {
      rank += 1;
    }

    return rank;
  };

  const namesComparator = (a, b) => {
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    } else {
      return 0;
    }
  };

  window.updateWizards = () => {
    renderSimilarWizards(newWizards.sort(function (a, b) {
      let rankDiff = getRank(b) - getRank(a);
      if (rankDiff === 0) {
        rankDiff = namesComparator(a.name, b.name);
      }
      return rankDiff;
    }));
  };

  const successHandler = (data) => {
    newWizards = data;
    window.updateWizards();
  };

  window.errorHandler = (errorMessage) => {
    let node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: white; color: black;';
    node.style.position = 'absolute';
    node.style.left = 10 + '%';
    node.style.top = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.colorize.changeColorCoat(coatColorUser, window.util.wizardCoats);
  window.colorize.changeColorEyes(eyesColorUser, window.util.wizardEyes);
  window.colorize.changeColorFire(fireballColorUser, window.util.fireballsColor, '.setup-player input[name="fireball-color"]');

  window.backend.load(successHandler, window.errorHandler);

})();
