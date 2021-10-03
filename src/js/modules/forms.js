import { postData } from '../services/requests';

const forms = () => {
  const forms = document.querySelectorAll('form'),
    inputs = document.querySelectorAll('input'),
    textareas = document.querySelectorAll('textarea'),
    uploads = document.querySelectorAll('[name="upload"]');

  const message = {
    spinner: 'assets/img/spinner.gif',
    success: 'assets/img/ok.png',
    fail: 'assets/img/fail.png',
  };

  const paths = {
    design: 'assets/server.php',
    question: 'assets/question.php',
  };

  function clearForms() {
    inputs.forEach((input) => (input.value = ''));
    textareas.forEach((textarea) => (textarea.value = ''));
    uploads.forEach(
      (upload) => (upload.previousElementSibling.textContent = 'Файл не выбран')
    );
  }

  uploads.forEach((upload) => {
    upload.addEventListener('input', () => {
      let dots;

      const splittedFileName = upload.files[0].name.split('.');

      splittedFileName[0].length > 10 ? (dots = '...') : (dots = '.');

      const name =
        splittedFileName[0].substring(0, 11) +
        dots +
        splittedFileName[splittedFileName.length - 1];

      upload.previousElementSibling.textContent = name;
    });
  });

  forms.forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const statusInfo = document.createElement('img');
      statusInfo.setAttribute('src', message.spinner);
      statusInfo.classList.add('status', 'animated', 'fadeInUp');
      form.parentNode.appendChild(statusInfo);

      form.classList.add('animated', 'fadeOutUp');
      setTimeout(() => (form.style.display = 'none'), 400);

      const formData = new FormData(form);

      let api;
      form.closest('.popup-design') || form.classList.contains('form-calc')
        ? (api = paths.design)
        : (api = paths.question);

      postData(api, formData)
        .then(() => {
          statusInfo.setAttribute('src', message.success);
        })
        .catch(() => {
          statusInfo.setAttribute('src', message.fail);
        })
        .finally(() => {
          clearForms();
          setTimeout(() => {
            statusInfo.remove();
            form.style.display = 'block';
            form.classList.remove('fadeOutUp');
            form.classList.add('fadeInUp');
          }, 2000);
        });
    });
  });
};

export default forms;
