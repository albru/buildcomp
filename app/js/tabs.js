document.addEventListener("DOMContentLoaded", function (event) {
  const tabs = (function () {
    const buttons = document.querySelectorAll('.howitworks-right__tab');
    const lines = document.querySelectorAll('.howitworks-right__line');
    const textDisplay = document.querySelector('.howitworks-left__desc-text');
    const buttonsArr = [];
    const linesArr = [];

    const desc = [
      { id: 'jsDocs', text: 'Мы проверяем автомобиль на наличие штрафов, залогов и ограничений на регистрационные действия. Затем идет проверка на достоверность идентификационных номеров на кузове, VIN кода, соответствие кодов комплектации и сравнение их с настоящими данными' },
      { id: 'jsBody', text: 'Полностью осматриваем силовую конструкцию (усилители, крышу, стойки, лонжероны, днище) и навесные элементы (крылья, двери, капот и т.д) на наличие повреждений, в том числе скрытых. Лакокрасочное покрытие сначала проходит визуальный осмотр, затем каждый элемент кузова проверяется толщиномером' },
      { id: 'jsEngine', text: 'Проводим общий осмотр двигателя и всех прилегающих агрегатов, заводим, слушаем, и оцениваем его работу. Выполняем компьютерную диагностику. Если все хорошо, едем на тест драйв' },
      { id: 'jsWheel', text: 'Выполняем диагностику амортизаторов, сайлентблоков, резиновых уплотнений, пыльников, и всех остальных подвижных и неподвижных элементов подвески. Осматриваем систему рулевого управления автомобиля (рейка, тяги, наконечники и и т.д.)' },
      { id: 'jsBrake', text: 'Особое внимание уделяется тормозной системе, так как от ее исправного состояния зависит Ваша безопасноть на дороге. Проверяем механические элементы (тормозные диски, колодки, шланги) и электронные (антипробуксовка, антизанос, антиблокировка и т.д)' }
    ]

    textDisplay.innerHTML = `<p>${desc[0].text}</p>`;
    

    function createArr (elem, num, target) {
      let arr = Array.from(elem)
      for(let i = 0; i <= num; i++) {
        target.push(arr[i])
      }
      return target;
    } ;

    createArr(buttons, desc.length - 1, buttonsArr);
    createArr(lines, desc.length - 1, linesArr);

    buttonsArr.forEach(elem => {
      elem.addEventListener('click', function (e) {
        let id = e.target.getAttribute('id');
        let objId = [...desc].filter(val => val.id === id)
        let lineId = [...linesArr].filter(val => val.classList.contains(id))

        for (let key in buttonsArr) {
          buttonsArr[key].classList.remove('js-tab-active')
        }

        for (let key in linesArr) {
          linesArr[key].classList.remove('js-line-active')
        }

        e.target.classList.contains('js-tab-active') ? (
          null
        ) : (
          e.target.classList.add('js-tab-active'),
          lineId[0].classList.add('js-line-active'),
            textDisplay.innerHTML = `<p>${objId[0].text}</p>`
        );
      });
    });
  })();

});
