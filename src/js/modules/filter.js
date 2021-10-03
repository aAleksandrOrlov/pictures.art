const filter = () => {
  const menu = document.querySelector('.portfolio-menu'),
    items = menu.querySelectorAll('li'),
    wrapper = document.querySelector('.portfolio-wrapper'),
    markAll = wrapper.querySelectorAll('.all'),
    no = document.querySelector('.portfolio-no');

  function typeFilter(markType) {
    markAll.forEach((item) => {
      item.style.display = 'none';
      item.classList.remove('animated', 'fadeIn');
    });

    no.style.display = 'none';
    no.classList.remove('animated', 'fadeIn');

    if (markType) {
      markType.forEach((item) => {
        item.style.display = 'block';
        item.classList.add('animated', 'fadeIn');
      });
    } else {
      no.style.display = 'block';
      no.classList.add('animated', 'fadeIn');
    }
  }

  function activeFilter() {
    items.forEach((item) => {
      const itemClass = item.className.split(' ')[0];
      const mark = wrapper.querySelectorAll(`.${itemClass}`);

      item.addEventListener('click', () => {
        typeFilter(mark.length > 0 ? mark : null);
      });
    });

    menu.addEventListener('click', (e) => {
      if (e.target && e.target.tagName === 'LI') {
        items.forEach((item) => item.classList.remove('active'));
        e.target.classList.add('active');
      }
    });
  }

  activeFilter();
};

export default filter;
