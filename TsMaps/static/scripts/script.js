        const markers = [];
        
        // Функция для создания нового изображения с указанными координатами внутри targetElement
        function createImageAtPosition(x, y) {
            const targetElement = document.getElementById('target-element');
            const marker = document.createElement('img');
            marker.src = 'https://static.thenounproject.com/png/2271538-200.png';
            marker.style.position = 'absolute';
            marker.style.height = '50px';
            marker.style.width = '50px';
            marker.style.left = x + 'px';
            marker.style.top = y + 'px';
            marker.dataset.offsetX = x;
            marker.dataset.offsetY = y;
            targetElement.appendChild(marker); // Добавляем точку в targetElement

            // Добавляем маркер в массив markers
            markers.push(marker);

            // Возвращаем маркер для возможности дальнейшего управления
            return marker;
    }

        // Обработчик для вызова функции при загрузке страницы
        window.onload = function() {
            createImageAtPosition(200, 100);
            createImageAtPosition(150, 150);
        };
    
        const targetElement = document.getElementById('target-element');
        const image = document.getElementById('map');
    
        image.onload = function() {
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
    
        function add_marker(event) {
            const targetElement = document.getElementById('target-element');
            const n_marker = document.createElement('img');
            n_marker.src = 'https://psv4.userapi.com/c909328/u174464326/docs/d20/579e73728e37/geometka.png?extra=HZL58I80C6tm9h3iTK-TlNm0x1A_bRriRFhTlx_cAMTE6mLfJXfsXIwp5_pjEs4jnc609ymDpL73m1QJNFnNOqWpRnEiQUiChV8nw3ejadjQ_Qzxk1X-ti_8VHD3zJ_-jOLVYTSwXPDK0lsZ11GrcgUy';
            n_marker.style.position = 'absolute';
            n_marker.style.height = '50px';
            n_marker.style.width = '50px';
            const x = event.clientX;
            const y = event.clientY;
            n_marker.style.left = (x - 25) + 'px';
            n_marker.style.top = (y - 100) + 'px';
            targetElement.appendChild(n_marker);
        }
    
        document.getElementById('addImageBtn').addEventListener('click', () => {
            targetElement.addEventListener('click', add_marker);
        });
    
        let isDragging = false;
        let startX, startY;
        let startLeft, startTop;
    
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
    
        targetElement.addEventListener('wheel', (event) => {
            event.preventDefault();
            const scaleFactor = event.deltaY > 0 ? 0.9 : 1.1; // Определяем направление масштабирования
            image.style.width = image.offsetWidth * scaleFactor + 'px';
            image.style.height = image.offsetHeight * scaleFactor + 'px';
        });
