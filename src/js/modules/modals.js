const modals = () => {
  let modalHasOpen = false;

  function modalOpen(modal) {
    modalHasOpen = true;
    modal.style.display = 'block';
    document.body.classList.add('modal-open');
    document.body.style.marginRight = calcScroll() + 'px';
  }

  function modalsClose() {
    const modals = document.querySelectorAll('[data-modal]');

    document.body.style.marginRight = 0;

    modals.forEach((modal) => {
      modal.style.display = 'none';
      modal.classList.add('animated', 'fadeIn');
      document.body.classList.remove('modal-open');
    });
  }

  function calcScroll() {
    let div = document.createElement('div');
    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.visibility = 'hidden';
    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    document.body.removeChild(div);
    return scrollWidth;
  }

  function bindModal(
    modalSelector,
    triggerSelector,
    closeSelector,
    deleteTrigger = false
  ) {
    const modal = document.querySelector(modalSelector),
      triggers = document.querySelectorAll(triggerSelector),
      close = document.querySelector(closeSelector);

    modal.addEventListener('click', (e) => {
      if (e.target === modal) modalsClose();
    });

    triggers.forEach((trigger) => {
      trigger.addEventListener('click', (e) => {
        if (e.target) e.preventDefault();
        modalsClose();
        modalOpen(modal);

        if (deleteTrigger) triggers.forEach((trigger) => trigger.remove());
      });
    });

    close.addEventListener('click', modalsClose);
  }

  function showModalByTime(modalSelector, time) {
    setTimeout(() => {
      let modalDisplay = false;

      document.querySelectorAll('[data-modal]').forEach((modal) => {
        if (window.getComputedStyle(modal).display !== 'none')
          modalDisplay = true;
      });

      if (!modalDisplay) modalOpen(document.querySelector(modalSelector));
    }, time);
  }

  function showModalByScroll(triggerSelector) {
    window.addEventListener('scroll', () => {
      if (
        !modalHasOpen &&
        window.pageYOffset + document.documentElement.clientHeight >=
          document.documentElement.scrollHeight
      ) {
        document.querySelector(triggerSelector).click();
      }
    });
  }

  bindModal('.popup-design', '.button-design', '.popup-design .popup-close');
  bindModal(
    '.popup-consultation',
    '.button-consultation',
    '.popup-consultation .popup-close'
  );
  bindModal('.popup-gift', '.fixed-gift', '.popup-gift .popup-close', true);

  showModalByTime('.popup-consultation', 60000);

  showModalByScroll('.fixed-gift');
};

export default modals;
