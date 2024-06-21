let isDragging = false;
let startX, startY;
let startLeft, startTop;

function activeMap(elem, img){


  const targetElement = document.getElementById(elem);
  activePageID = targetElement;
  const image = document.getElementById(img);

  image.addEventListener('mousedown', (event) => {
    isDragging = true;
    startX = event.clientX;
    startY = event.clientY;
    startLeft = image.offsetLeft;
    startTop = image.offsetTop;
    event.preventDefault(); // Отменяем выделение текста
  });

  targetElement.addEventListener('mousemove', (event) => {
    if (isDragging) {
      const deltaX = event.clientX - startX;
      const deltaY = event.clientY - startY;
      const newImageLeft = startLeft + deltaX;
      const newImageTop = startTop + deltaY;
      image.style.left = newImageLeft + 'px';
      image.style.top = newImageTop + 'px';
      markers.forEach(marker => {
        // Получаем текущие координаты маркера
        const markerLeft = parseFloat(marker.style.left || 0);
        const markerTop = parseFloat(marker.style.top || 0);
        // Обновляем позицию маркера относительно изображения "map"
        marker.style.left = (markerLeft + deltaX) + 'px';
        marker.style.top = (markerTop + deltaY) + 'px';
      });
      // Обновляем начальные координаты для следующего смещения
      startX = event.clientX;
      startY = event.clientY;
      startLeft = newImageLeft;
      startTop = newImageTop;
    }
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
  });




image.onload = function () {
    const imageWidth = image.width;
    const imageHeight = image.height;
    const targetWidth = targetElement.offsetWidth;
    const targetHeight = targetElement.offsetHeight;

    // Проверяем соотношение сторон изображения и области target-element
    const aspectRatio = imageWidth / imageHeight;
    const targetAspectRatio = targetWidth / targetHeight;

    if (aspectRatio > targetAspectRatio) {
        // Изображение шире, масштабируем его по ширине target-element
        image.style.width = '100%';
        image.style.height = 'auto';
    } else {
        // Изображение уже высокое, масштабируем его по высоте target-element
        image.style.width = 'auto';
        image.style.height = '100%';
    }
};


}