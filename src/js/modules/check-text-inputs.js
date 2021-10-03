const checkTextInputs = (selector) => {
  const inputs = document.querySelectorAll(selector);

  inputs.forEach((input) => {
    const regexp = /[^а-яё 0-9]/gi;

    input.addEventListener('keypress', (e) => {
      if (e.key.match(regexp)) e.preventDefault();
    });
    input.addEventListener('input', (e) => {
      if (input.value.match(regexp))
        input.value = input.value.replace(regexp, '');
    });
  });
};

export default checkTextInputs;
