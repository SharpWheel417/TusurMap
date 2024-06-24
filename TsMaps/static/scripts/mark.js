let ids = 1

// СОЗДАНИЕ МАРКЕРА
function add_marker(pic) {
    createImageAtPosition((globalX-100), (globalY - 100), pic);
    sendData(ids, (globalX-200), (globalY - 100), pic)
    ids++;
}

const markers = [];

// Функция для создания нового изображения с указанными координатами внутри targetElement
function createImageAtPosition(x, y, pic) {
    const marker = document.createElement('img');
    marker.style.position = 'absolute';
    marker.style.height = '50px';
    marker.style.width = '50px';
    marker.style.left = x + 'px';
    marker.style.top = y + 'px';
    marker.dataset.offsetX = x;
    marker.src = mark1;
    if (pic == "2") {
        marker.src = mark2;
    }
    if (pic == "3") {
        marker.src = mark3;
    }
    if (pic == "4") {
        marker.src = mark4;
    }
    marker.dataset.offsetY = y;
    marker.addEventListener('click', (event) => {
        openImage(event, pic);
    })
    activePageID.appendChild(marker); // Добавляем точку в targetElement

    // Добавляем маркер в массив markers
    markers.push(marker);

    // Возвращаем маркер для возможности дальнейшего управления
    return marker;
}