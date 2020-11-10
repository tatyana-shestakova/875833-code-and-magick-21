'use strict';

(function () {
  const clickcolor = (variable, arr, selector) => {
    let colorValue = window.render.indexRandomizer(arr);
    let input = document.querySelector(selector);
    variable.style.fill = colorValue;
    variable.style.background = colorValue;
    input.value = colorValue;
  };

  window.changeColor = (element, color, part) => {
    element.addEventListener('click', function () {
      clickcolor(element, color, part);
    });
  };

})();
