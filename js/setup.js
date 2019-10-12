'use strict';

(function () {
  var WIZARDS_COUNT = 4;
  var COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(0, 0, 0)'];
  var EYES = ['black', 'red', 'lue', 'yellow', 'green'];
  var FIREBALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;


  var userDialog = document.querySelector('.setup');

  var similarListElement = userDialog.querySelector('.setup-similar-list');

  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

  var renderWizard = function (wizard) {

    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;

    return wizardElement;
  };

  var successHandler = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < WIZARDS_COUNT; i++) {

      fragment.appendChild(renderWizard(window.getRandomElement(wizards)));
    }
    similarListElement.appendChild(fragment);

    userDialog.querySelector('.setup-similar').classList.remove('hidden');
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.load(successHandler, errorHandler);


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
    window.change();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closePopup();
      window.change();
    }
  });


  document.querySelector('.wizard-coat').addEventListener('click', function () {
    document.querySelector('.wizard-coat').style = 'fill:' + window.getRandomElement(COLORS);
  });

  document.querySelector('.wizard-eyes').addEventListener('click', function () {

    document.querySelector('.wizard-eyes').style = 'fill:' + window.getRandomElement(EYES);

  });

  document.querySelector('.setup-fireball-wrap').addEventListener('click', function () {

    document.querySelector('.setup-fireball-wrap').style = 'background:' + window.getRandomElement(FIREBALL);
  });

  var form = userDialog.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    window.save(new FormData(form), function () {
      userDialog.classList.add('hidden');
    });
    evt.preventDefault();
  });


})();

