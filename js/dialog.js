'use strict';

const setup = document.querySelector('.setup');
const openSetup = document.querySelector('.setup-open');
const closeSetup = document.querySelector('.setup-close');
const SETUP_COORDS_X = '50%';
const SETUP_COORDS_Y = '80px';

const escKeydownHandler = (evt) => {
  window.util.isEscKeyCode(evt, closePopup);
};

const openPopup = () => {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', escKeydownHandler);
};

const closePopup = () => {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', escKeydownHandler);
  setup.style.left = SETUP_COORDS_X;
  setup.style.top = SETUP_COORDS_Y;
};

openSetup.addEventListener('click', function () {
  openPopup();
});

openSetup.addEventListener('keydown', function (evt) {
  window.util.isEnterKeyCode(evt, openPopup);
});

closeSetup.addEventListener('click', function () {
  closePopup();
});

closeSetup.addEventListener('keydown', function (evt) {
  window.util.isEnterKeyCode(evt, closePopup);
});

window.dialog = {
  setup: setup
};

const dialogHandle = setup.querySelector('.upload');

dialogHandle.addEventListener('mousedown', function (evt) {
  evt.preventDefault();

  let dragged = false;

  let startCoords = {
    x: evt.clientX,
    y: evt.clientY
  };

  const mouseMoveHandler = (moveEvt) => {
    moveEvt.preventDefault();

    dragged = true;

    let shift = {
      x: startCoords.x - moveEvt.clientX,
      y: startCoords.y - moveEvt.clientY
    };

    startCoords = {
      x: moveEvt.clientX,
      y: moveEvt.clientY
    };

    setup.style.top = (setup.offsetTop - shift.y) + 'px';
    setup.style.left = (setup.offsetLeft - shift.x) + 'px';
  };

  const mouseUpHandler = (upEvt) => {
    upEvt.preventDefault();

    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);

    if (dragged) {
      const clickPreventDefaultHandler = (clickEvt) => {
        clickEvt.preventDefault();
        dialogHandle.removeEventListener('click', clickPreventDefaultHandler);
      };
      dialogHandle.addEventListener('click', clickPreventDefaultHandler);
    }
  };

  document.addEventListener('mousemove', mouseMoveHandler);
  document.addEventListener('mouseup', mouseUpHandler);

});

