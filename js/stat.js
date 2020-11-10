'use strict';

(function () {
  const CLOUD_WIDTH = 420;
  const CLOUD_HEIGHT = 270;
  const GAP = 10;

  const CLOUD_X = 100;
  const CLOUD_Y = 10;
  const FONT_FAMILY = 'PT Mono';
  const FONT_SIZE = 16;
  const BAR_WIDTH = 40;
  const BAR_GAP = 50;
  const BAR_HEIGHT = 150;
  const BAR_GAP_HALF = BAR_GAP / 2;

  const getMaxElement = (arr) => {
    let maxElement = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }
    return maxElement;
  };

  const renderCloud = (ctx, x, y, color) => {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(CLOUD_WIDTH / 2 + x, y + GAP);
    ctx.lineTo(CLOUD_WIDTH + x, y);
    ctx.lineTo(CLOUD_WIDTH + x, CLOUD_HEIGHT + y);
    ctx.lineTo(CLOUD_WIDTH / 2 + x, CLOUD_HEIGHT + y - GAP);
    ctx.lineTo(x, CLOUD_HEIGHT + y);
    ctx.closePath();
    ctx.fill();
  };

  window.renderStatistics = function (ctx, names, times) {
    const maxTime = getMaxElement(times);
    const getSize = (height, elem, maxCount) => {
      return (height * elem) / maxCount;
    };

    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');


    ctx.font = ctx.font = FONT_FAMILY + ' ' + FONT_SIZE + 'px';
    ctx.fillStyle = '#000';
    ctx.fillText('Ура вы победили!', CLOUD_WIDTH / 2 + GAP, CLOUD_Y + BAR_GAP_HALF);
    ctx.fillText('Список результатов:', CLOUD_WIDTH / 2 + GAP, CLOUD_Y + BAR_GAP);

    for (let i = 0; i < names.length; i++) {
      ctx.fillStyle = '#000';
      ctx.fillText(names[i], CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - GAP);
      if (names[i] === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        ctx.fillStyle = 'hsl(240,' + (Math.floor(Math.random() * 100)) + '%, 50%)';
      }
      ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, (CLOUD_HEIGHT - getSize(BAR_HEIGHT, times[i], maxTime)) - BAR_GAP_HALF, BAR_WIDTH, getSize(BAR_HEIGHT, times[i], maxTime));
      ctx.fillStyle = '#000';
      ctx.fillText(Math.floor(times[i]), CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, (CLOUD_HEIGHT - getSize(BAR_HEIGHT, times[i], maxTime)) - BAR_GAP_HALF - GAP);
    }

  };
})();
