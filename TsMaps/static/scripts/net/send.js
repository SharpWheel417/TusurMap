let id = 1;
let x = 0;
let y = 0;


async function sendData(ids, x, y, pic) {
  const data = {
      ids: ids,
      x: x,
      y: y,
      pic: pic,
  };

  const response = await fetch('/set-coords/', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': getCookie('csrftoken') // Добавьте CSRF токен
      },
      body: JSON.stringify(data)
  });

  const result = await response.text();
  console.log(result);
}