(function () {
  function init() {
    const btn = document.querySelector('.btn');
    const inputBin = document.querySelector('#bin');
    const output = document.getElementById('output');
    const alert = document.querySelector('.alert');
    const regex = /[^0-1]/g;

    inputBin.addEventListener('input', function () {
      if (this.value.length > 8) {
        this.value = this.value.slice(0, 8);
        alertInfo('Максимальная длина 8 символов', 'alert-warning');
      }
      if (regex.test(this.value)) {
        alertInfo('Введен не корректный символ', 'alert-warning');
      }

      this.value = this.value.replace(regex, '');
    });

    btn.addEventListener('click', () => {
      output.textContent = parseInt(inputBin.value, 2);
      alertInfo('Число успешно конвертированно ;)');
    });

    function alertInfo(message, alertClass = 'alert-success') {
      alert.textContent = message;
      alert.classList.add(alertClass);
      alert.style.opacity = 1;
      setTimeout(() => {
        alert.style.opacity = 0;
      }, 1500);
      setTimeout(() => {
        alert.classList.remove(alertClass);
      }, 2000);
    }
  }

  window.addEventListener('load', init, false);
})();
