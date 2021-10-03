const dragAndDrop = () => {
  const fileInputs = document.querySelectorAll('[name="upload"]');

  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  function highLight(item) {
    item.closest('.file_upload').style.border = '3px dotted #c51abb';
    item.closest('.file_upload').style.backgroundColor =
      'rgba(170, 38, 183, 0.2)';
  }

  function unHighLight(item) {
    item.closest('.file_upload').style.border = 'none';
    item.closest('.file_upload').style.backgroundColor = 'transparent';
  }

  ['dragenter', 'dragleave', 'dragover', 'drop'].forEach((event) => {
    fileInputs.forEach((input) => {
      input.addEventListener(event, preventDefaults, false);
    });
  });

  ['dragenter', 'dragover'].forEach((event) => {
    fileInputs.forEach((input) => {
      input.addEventListener(event, () => highLight(input), false);
    });
  });

  ['dragleave', 'drop'].forEach((event) => {
    fileInputs.forEach((input) => {
      input.addEventListener(event, () => unHighLight(input), false);
    });
  });

  fileInputs.forEach((input) => {
    input.addEventListener(
      'drop',
      (e) => {
        input.files = e.dataTransfer.files;

        let dots;

        const splittedFileName = input.files[0].name.split('.');

        splittedFileName[0].length > 10 ? (dots = '...') : (dots = '.');

        const name =
          splittedFileName[0].substring(0, 11) +
          dots +
          splittedFileName[splittedFileName.length - 1];

        input.previousElementSibling.textContent = name;
      },
      false
    );
  });
};

export default dragAndDrop;
