const burger = (triggerSelector, menuSelector) => {
  const trigger = document.querySelector(triggerSelector),
    menu = document.querySelector(menuSelector);

  function burgerOpen() {
    menu.style.display = 'block';
    trigger.classList.add('active');
  }

  function burgerClose() {
    menu.style.display = 'none';
    trigger.classList.remove('active');
  }

  trigger.addEventListener('click', () => {
    if (menu.style.display === 'none' && window.screen.availWidth <= 992) {
      burgerOpen();
    } else {
      burgerClose();
    }
  });

  window.addEventListener('resize', () => {
    if (window.screen.availWidth > 992) burgerClose();
  });
};

export default burger;
