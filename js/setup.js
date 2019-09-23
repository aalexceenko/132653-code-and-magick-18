'use strict';

var WIZARDS_COUNT = 4;
var COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(0, 0, 0)'];
var EYES = ['black', 'red', 'lue', 'yellow', 'green'];
var NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var generateWizardWithRandomOptions = function () {
  return {
    name: window.getRandomElement(NAMES) + ' ' + window.getRandomElement(SURNAMES),
    coatColor: window.getRandomElement(COLORS),
    eyesColor: window.getRandomElement(EYES),
  };
};

document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

for (var i = 0; i < WIZARDS_COUNT; i++) {
  var wizard = generateWizardWithRandomOptions();

  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;

  similarListElement.appendChild(wizardElement);
}
