document.addEventListener('click', function (event) {
  let p = document.getElementById('popup');

  if (p) {
      p.parentElement.removeChild(p);
  }
});


let globalX;
let globalY;


document.addEventListener('contextmenu', function (event) {

  let p = document.getElementById('popup');

  if (p) {
      p.parentElement.removeChild(p);
  }

  event.preventDefault();

  // Получаем координаты курсора
  globalX = event.clientX;
  globalY = event.clientY;

  var x = event.clientX;
  var y = event.clientY;

  // Создаем элемент попапа
  var popup = document.createElement('div');
  popup.id = 'popup';
  popup.style.position = 'absolute';
  popup.style.top = y + 'px';
  popup.style.left = x + 'px';
  popup.innerHTML = `<div style="width: 100px; height: auto; background-color: white; border-radius: 10px; border: 1px solid black"><p style="text-align: center">Выберите метку</p><button onclick="add_marker(1)" ><img id="mark1" style="width: 50px; height: 50px;"></button> <button onclick="add_marker(2)"><img id="mark2" style="width: 50px; height: 50px;"></button>
  <button onclick="add_marker(3)"><img id="mark3" style="width: 50px; height: 50px;"></button>
  <button onclick="add_marker(4)"><img id="mark4" style="width: 50px; height: 50px;"></button></div>`;

  document.body.appendChild(popup);

  document.getElementById('mark1').src = mark1;
  document.getElementById('mark2').src = mark2;
  document.getElementById('mark3').src = mark3;
  document.getElementById('mark4').src = mark4;

  // Добавляем элемент попапа в документ
});