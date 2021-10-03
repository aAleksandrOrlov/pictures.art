const calc = (
  sizeSelector,
  materialSelector,
  optionsSelector,
  promocodeSelector,
  resultSelector
) => {
  const sizeBlock = document.querySelector(sizeSelector),
    materialBlock = document.querySelector(materialSelector),
    optionsBlock = document.querySelector(optionsSelector),
    promocodeBlock = document.querySelector(promocodeSelector),
    resultBlock = document.querySelector(resultSelector);

  let sum = 0;

  function calcFunction() {
    if (sizeBlock.value === '' || materialBlock.value === '')
      return (resultBlock.textContent =
        'Для расчета нужно выбрать размер картины и материал картины');

    sum = +sizeBlock.value * +materialBlock.value + +optionsBlock.value;
    if (promocodeBlock.value.toUpperCase() === 'IWANTPOPART')
      sum = Math.round(sum * 0.7);

    resultBlock.textContent = sum;
  }

  sizeBlock.addEventListener('change', calcFunction);
  materialBlock.addEventListener('change', calcFunction);
  optionsBlock.addEventListener('change', calcFunction);
  promocodeBlock.addEventListener('input', calcFunction);
};

export default calc;
