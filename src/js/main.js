import calc from './modules/calc';
import forms from './modules/forms';
import modals from './modules/modals';
import filter from './modules/filter';
import slider from './modules/sliders';
import phoneMask from './modules/phone-mask';
import showMoreStyles from './modules/show-more-styles';
import checkTextInputs from './modules/check-text-inputs';
import sizeHover from './modules/size-hover';
import accordion from './modules/accordion';
import burger from './modules/burger';
import scrolling from './modules/scrolling';
import dragAndDrop from './modules/drag-n-drop';

window.addEventListener('DOMContentLoaded', () => {
  forms();
  modals();
  filter();
  phoneMask();
  sizeHover();
  scrolling();
  dragAndDrop();

  accordion('.accordion-heading', '.accordion-block');

  burger('.burger', '.burger-menu');

  checkTextInputs('[name="name"]');
  checkTextInputs('[name="message"]');

  showMoreStyles('.button-styles', '.styles-2', '#styles .row');

  slider(
    '.feedback-slider-item',
    'Right',
    'Left',
    '.main-prev-btn',
    '.main-next-btn'
  );
  slider('.main-slider-item', 'Down', 'Up');

  calc('#size', '#material', '#options', '.promocode', '.calc-price');
});
