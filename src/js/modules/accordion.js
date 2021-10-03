const accordion = (triggerSelector, blockSelector) => {
  const triggers = document.querySelectorAll(triggerSelector),
    blocks = document.querySelectorAll(blockSelector);

  function showBlock(block) {
    block.classList.remove('fadeOutUp');
    setTimeout(() => (block.style.display = 'block'), 300);
    block.classList.add('fadeInDown');
  }

  function hideBlock(block) {
    block.classList.remove('fadeInDown');
    setTimeout(() => (block.style.display = 'none'), 300);
    block.classList.add('fadeOutUp');
  }

  blocks.forEach((block) => {
    block.style.display = 'none';
    block.classList.add('animated');
  });

  triggers.forEach((trigger, idx) => {
    trigger.addEventListener('click', () => {
      if (!trigger.classList.contains('active')) {
        triggers.forEach((trigger) => trigger.classList.remove('active'));
        trigger.classList.add('active');

        blocks.forEach((block) => hideBlock(block));
        showBlock(blocks[idx]);
      } else {
        trigger.classList.remove('active');
        hideBlock(blocks[idx]);
      }
    });
  });
};

export default accordion;
