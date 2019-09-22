'use strict';

var WIZARDS_COUNT = 4;
var COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(0, 0, 0)'];
var EYES = ['black', 'red', 'lue', 'yellow', 'green'];
var NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var getRandomElement = function (arr) {
  return arr[window.getRandomInteger(0, arr.length - 1)];
};

var generateWizardWithRandomOptions = function () {
  return {
    name: getRandomElement(NAMES) + ' ' + getRandomElement(SURNAMES),
    coatColor: getRandomElement(COLORS),
    eyesColor: getRandomElement(EYES),
  };
};

document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

for (var i = 0; i < WIZARDS_COUNT; i++) {
  var wizard = generateWizardWithRandomOptions();

  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard[i].name;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard[i].eyesColor;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard[i].coatColor;

  similarListElement.appendChild(wizardElement);
}
