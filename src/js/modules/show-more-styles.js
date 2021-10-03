import { getResource } from '../services/requests';

const showMoreStyles = (triggerSelector, stylesSelector, parentSelector) => {
  const cards = document.querySelectorAll(stylesSelector),
    trigger = document.querySelector(triggerSelector);

  //! Данные из верстки

  cards.forEach((card) => card.classList.add('animated', 'fadeInUp'));

  trigger.addEventListener('click', () => {
    cards.forEach((card) => {
      card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
      card.classList.add(
        'col-sm-3',
        'col-sm-offset-0',
        'col-xs-10',
        'col-xs-offset-10'
      );
    });

    trigger.remove();
  });

  //! ----

  //! Взаимодействие с сервером

  // trigger.addEventListener('click', function () {
  //   getResource('assets/db.json')
  //     .then((res) => createCards(res.styles))
  //     .catch((err) => console.log(err));

  //   this.remove();
  // });

  // function createCards(response) {
  //   response.forEach((item) => {
  //     const { src, title, link } = item;

  //     let card = document.createElement('div');
  //     card.classList.add(
  //       'animated',
  //       'fadeInUp',
  //       'col-sm-3',
  //       'col-sm-offset-0',
  //       'col-xs-10',
  //       'col-xs-offset-10'
  //     );

  //     card.innerHTML = `
  //       <div class="styles-block">
  // 			  <img src="${src}" alt>
  // 				<h4>${title}</h4>
  // 				<a href="${link}">Подробнее</a>
  //  	    </div>
  //     `;

  //     document.querySelector(parentSelector).appendChild(card);
  //   });
  // }

  //! ----
};

export default showMoreStyles;
