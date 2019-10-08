'use strict';

(function () {

  var setupDialogElement = document.querySelector('.setup');
  var dialogHandler = setupDialogElement.querySelector('.upload');

  var onMouseMove = function (evt) {
    evt.preventDefault();
    window.dragged = true;

    var shift = {
      x: window.startCoords.x - evt.clientX,
      y: window.startCoords.y - evt.clientY
    };

    window.startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    setupDialogElement.style.top = (setupDialogElement.offsetTop - shift.y) + 'px';
    setupDialogElement.style.left = (setupDialogElement.offsetLeft - shift.x) + 'px';

  };

  var onMouseUp = function (evt) {
    evt.preventDefault();

    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);

    if (window.dragged) {
      onClickPreventDefault(evt);
    }

  };
  var onClickPreventDefault = function (evt) {
    evt.preventDefault();
    dialogHandler.removeEventListener('click', onClickPreventDefault);
  };
  dialogHandler.addEventListener('click', onClickPreventDefault);

  dialogHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    window.startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    window.dragged = false;


    onMouseMove(evt);
    onClickPreventDefault(evt);
    onMouseUp(evt);


    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  var left = getComputedStyle(setupDialogElement).getPropertyValue('left');
  var top = getComputedStyle(setupDialogElement).getPropertyValue('top');


  window.change = function () {
    setupDialogElement.style.top = top;
    setupDialogElement.style.left = left;
  };

})();
