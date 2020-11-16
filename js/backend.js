'use strict';

const URL_POST = 'https://21.javascript.pages.academy/code-and-magick';
const URL_DATA = 'https://21.javascript.pages.academy/code-and-magick/data';
const StatusCode = {
  OK: 200
};
const TIMEOUT_IN_MS = 10000;

const postErrorMessage = (request, getError) => {
  request.timeout = TIMEOUT_IN_MS;

  request.addEventListener('error', function () {
    getError('Что-то пошло не так... Попробуйте перезагрузить страницу');
  });
  request.addEventListener('timeout', function () {
    getError('Запрос не успел выполниться за ' + request.timeout + 'мс');
  });
};

window.backend = {
  load: (onLoad, onError) => {
    const xhrData = new XMLHttpRequest();
    xhrData.responseType = 'json';

    xhrData.addEventListener('load', function () {
      if (xhrData.status === StatusCode.OK) {
        onLoad(xhrData.response);
      } else {
        onError('Что-то пошло не так... Статус ответа: ' + xhrData.status + ' ' + xhrData.statusText);
      }
    });
    postErrorMessage(xhrData, onError);
    xhrData.open('GET', URL_DATA);
    xhrData.send();
  },

  save: (data, onLoad, onError) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.addEventListener('load', function () {
      if (xhr.status === StatusCode.OK) {
        onLoad(xhr.response);
      } else {
        onError('Что-то пошло не так... Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });
    postErrorMessage(xhr, onError);

    xhr.open('POST', URL_POST);
    xhr.send(data);
  }
};

