function BODY_BEFORE_START(state) {
  const bodyBeforeStart = document.body;
  bodyBeforeStart.style.overflow = state;
};
BODY_BEFORE_START('hidden');

window.onload = () => {
  BODY_BEFORE_START('initial');
  const hideSpinner = (function name() {
    const spinner = document.querySelector('.speedometer');
    const spinnerBg = document.querySelector('.spinner-bg');
    function spinnerFadeOut() {
      const spinnerAnimate = new Promise(function (resolve) {
        spinner.style.opacity = 0;
        spinnerBg.style.opacity = 0;
        setTimeout(() => {
          spinner.style.display = 'none';
          spinnerBg.style.display = 'none';
          resolve();
        }, 300);
      });
      return spinnerAnimate;
    };
    spinnerFadeOut()
  })();
  (function greetingsBtnAnimation() {
    const btnCont = document.querySelector('.header-second__container--left');
    btnCont.style.left = 0 + 'px';
  })();
};