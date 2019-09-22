/* eslint-disable consistent-return */
'use strict';

var countObject = 4;
var color = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(0, 0, 0)'];
var eyes = ['black', 'red', 'lue', 'yellow', 'green'];
var firstName = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var lastName = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var getRandomInteger = function (min, max) {
  return Math.floor(min + Math.random() * (max - min + 1));
};

var colorWizard = function () {
  for (var i = 0; i < countObject; i++) {
    return color[getRandomInteger(0, color.length - 1)];
  }
};

var eyesWizard = function () {
  for (var j = 0; j < countObject; j++) {
    return eyes[getRandomInteger(0, eyes.length - 1)];
  }
};

var nameWizard = function () {
  for (var j = 0; j < countObject; j++) {
    var firstItem = firstName[getRandomInteger(0, firstName.length - 1)];
    var secondItem = lastName[getRandomInteger(0, lastName.length - 1)];
    return firstItem + ' ' + secondItem;
  }
};

var wizards = [
  {
    name: nameWizard(),
    coatColor: colorWizard(),
    eyesColor: eyesWizard()
  },
  {
    name: nameWizard(),
    coatColor: colorWizard(),
    eyesColor: eyesWizard()
  },
  {
    name: nameWizard(),
    coatColor: colorWizard(),
    eyesColor: eyesWizard()
  },
  {
    name: nameWizard(),
    coatColor: colorWizard(),
    eyesColor: eyesWizard()
  }
];


var blockSetup = document.querySelector('.setup');
blockSetup.classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

for (var i = 0; i < wizards.length; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
  // wizardElement.querySelector('.wizard-eyes').style.fill = 'red';

  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;


  similarListElement.appendChild(wizardElement);
}
