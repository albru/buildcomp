
const popupElem = $('.popup__DoneJS');
const formElem = $("#submit-form");
const popupElem1 = $('.popup__DoneJS1');
const formElem1 = $("#submit-form1");
const loadingAnimation = $('.loader');
let loadingAnimationNumber = 0;

function submitForm(form, pop, loadingAnimationNumber) {
  $(document).ready(function () {
    const popup = pop;
    const popupFunc = function () {
      popup.fadeTo("slow", 0, function () {
        $(this).fadeTo('slow', 1).after(function () {
          setTimeout(() => {
            $(this).fadeTo('slow', 0)
          }, 7000);
        })
      });
    };

    form.submit(function (e) {
      e.preventDefault();
      loadingAnimation[loadingAnimationNumber].style.opacity = 1;
      loadingAnimation[loadingAnimationNumber].style.display = 'inline-block';
      const th = $(this);
      $.ajax({
        type: "POST",
        url: "server.php",
        data: th.serialize()
      }).done(function () {
        loadingAnimation[loadingAnimationNumber].style.opacity = 0;
        loadingAnimation[loadingAnimationNumber].style.display = 'none';
        popupFunc();
        setTimeout(function () {
          th.trigger("reset");
        }, 1000);
      }).catch((error) => {
        error.statusText ? console.log(error.statusText) : null;
      });
      return false;
    });
  });
};

submitForm(formElem, popupElem, 1);
submitForm(formElem1, popupElem1, 0);