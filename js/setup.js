'use strict';

var WIZARDS_COUNT = 4;
var COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(0, 0, 0)'];
var EYES = ['black', 'red', 'lue', 'yellow', 'green'];
var FIREBALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var generateWizardWithRandomOptions = function () {
  return {
    name: window.getRandomElement(NAMES) + ' ' + window.getRandomElement(SURNAMES),
    coatColor: window.getRandomElement(COLORS),
    eyesColor: window.getRandomElement(EYES),
  };
};

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    if (document.querySelector('.setup-user-name') === document.activeElement) {
      return;
    }
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

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


// var wizardCoat = document.querySelector('.setup-player');
document.querySelector('.wizard-coat').addEventListener('click', function () {
  document.querySelector('.wizard-coat').style = 'fill:' + window.getRandomElement(COLORS);
});

document.querySelector('.wizard-eyes').addEventListener('click', function () {

  document.querySelector('.wizard-eyes').style = 'fill:' + window.getRandomElement(EYES);

});

document.querySelector('.setup-fireball-wrap').addEventListener('click', function () {

  document.querySelector('.setup-fireball-wrap').style = 'background:' + window.getRandomElement(FIREBALL);
});


