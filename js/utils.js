'use strict';

(function () {
  window.getRandomElement = function (arr) {
    return arr[window.getRandomInteger(0, arr.length - 1)];
  };

  window.getRandomInteger = function (min, max) {
    return Math.floor(min + Math.random() * (max - min + 1));
  };

  window.getMaxElement = function (arr) {
    var maxElement = arr[0];
    for (var i = 1; i < arr.length; i++) {
      if (maxElement < arr[i]) {
        maxElement = arr[i];
      }
    }
    return maxElement;
  };
})();
