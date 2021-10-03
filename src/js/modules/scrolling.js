const scrolling = () => {
  const links = document.querySelectorAll('[href^="#"]');

  const element = document.documentElement,
    body = document.body;

  function calcScroll(elem) {
    elem.addEventListener('click', function (event) {
      let scrollTop = Math.round(body.scrollTop || element.scrollTop);

      if (this.hash !== '') {
        event.preventDefault();
        let hashElement = document.querySelector(this.hash),
          hashElementTop = 0;

        while (hashElement.offsetParent) {
          hashElementTop += hashElement.offsetTop;
          hashElement = hashElement.offsetParent;
        }

        hashElementTop = Math.round(hashElementTop);
        smoothScroll(scrollTop, hashElementTop, this.hash);
      }
    });
  }

  function smoothScroll(from, to, hash) {
    let timeInterval = 1,
      prevScrollTop,
      speed;

    if (to > from) {
      speed = 20;
    } else {
      speed = -20;
    }

    let move = setInterval(function () {
      let scrollTop = Math.round(body.scrollTop || element.scrollTop);

      if (
        prevScrollTop === scrollTop ||
        (to > from && scrollTop >= to) ||
        (to < from && scrollTop <= to)
      ) {
        clearInterval(move);
        history.replaceState(
          history.state,
          document.title,
          location.href.replace(/#.*$/g, '') + hash
        );
      } else {
        body.scrollTop += speed;
        element.scrollTop += speed;
        prevScrollTop = scrollTop;
      }
    }, timeInterval);
  }

  links.forEach((link) => calcScroll(link));
};

export default scrolling;
