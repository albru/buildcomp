$(document).ready(function () {
  var msg = "";
  var elements = document.getElementsByTagName("INPUT");

  for (var i = 0; i < elements.length; i++) {
    elements[i].oninvalid = function (e) {
      if (!e.target.validity.valid) {
        switch (e.target.id) {
          case 'name':
            e.target.setCustomValidity("Введите имя"); break;
          case 'name1':
            e.target.setCustomValidity("Введите имя"); break;
          case 'phone':
            e.target.setCustomValidity("Введите телефон"); break;
          case 'phone1':
            e.target.setCustomValidity("Введите телефон"); break;
          case 'form-check-input':
            e.target.setCustomValidity("Необходимо согласие на обработку"); break;
          case 'form-check-input1':
            e.target.setCustomValidity("Необходимо согласие на обработку"); break;
          default: e.target.setCustomValidity(""); break;
        }
      }
    };
    elements[i].oninput = function (e) {
      e.target.setCustomValidity(msg);
    };
  };
});