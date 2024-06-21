async function getCoords() {
  try {
      const response = await fetch('/get-coords/', {
          method: 'GET',
          headers: {
              'X-CSRFToken': getCookie('csrftoken') // Получаем CSRF токен
          }
      });

      if (!response.ok) {
          throw new Error('Network response was not ok');
      }

      const result = await response.json(); // Получаем JSON данные
      console.log(result);

      result.data.map(coord =>
        {
            createImageAtPosition(parseInt(coord[2]), parseInt(coord[3]), parseInt(coord[4]))
        });


  } catch (error) {
      console.error('Error fetching data:', error);
  }
}