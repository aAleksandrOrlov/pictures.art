const sizeHover = () => {
  const blocks = document.querySelectorAll('.sizes-block');

  function showImg(idx) {
    const img = document.querySelector(`.size-${idx + 1}`);

    img.setAttribute('src', `assets/img/sizes-${idx + 1}-1.png`);
    img.classList.add('animated', 'fadeIn');

    img.style.position = 'relative';
    img.style.zIndex = '2';
  }

  function hideImg(idx) {
    const img = document.querySelector(`.size-${idx + 1}`);

    img.setAttribute('src', `assets/img/sizes-${idx + 1}.png`);
    img.classList.remove('animated', 'fadeIn');
    
    img.style.position = 'static';
  }

  blocks.forEach((block, i) => {
    block.addEventListener('mouseover', () => {
      showImg(i);
    });
    block.addEventListener('mouseout', () => {
      hideImg(i);
    });
  });
};

export default sizeHover;
