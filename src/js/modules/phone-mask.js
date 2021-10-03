const phoneMask = () => {
  function setCursorPosition(pos, element) {
    element.focus();

    if (element.setSelectionRange) {
      element.setSelectionRange(pos, pos);
    } else if (element.createTextRange) {
      let range = element.createTextRange();

      range.collapse(true);
      range.moveStart('character', pos);
      range.moveEnd('character', pos);
      range.select();
    }
  }

  function createMask(event) {
    let matrix = '+7-(___)-(___)-__-__',
      i = 0,
      def = matrix.replace(/\D/g, ''),
      val = this.value.replace(/\D/g, '');

    if (def.length >= val) {
      val = def;
    }

    this.value = matrix.replace(/./g, (a) => {
      return /[_\d]/.test(a) && i < val.length
        ? val.charAt(i++)
        : i >= val.length
        ? ''
        : a;
    });

    if (event.type === 'blur') {
      if (this.value.length == 2) {
        this.value = '';
      }
    } else {
      setCursorPosition(this.value.length, this);
    }
  }

  const inputs = document.querySelectorAll('[name="phone"]');

  inputs.forEach((input) => {
    input.addEventListener('input', createMask);
    input.addEventListener('focus', createMask);
    input.addEventListener('blur', createMask);
  });
};

export default phoneMask;
