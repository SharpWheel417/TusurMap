function openImage(event, type){



     // Создаем элемент попапа
     var popup = document.createElement('div');
     popup.style.position = 'fixed';
     popup.style.top = '50%';
     popup.style.left = '50%';
     popup.style.transform = 'translate(-50%, -50%)';
     if (type == '1'){
      img = cabinets412;
     } else if (type == '2'){
      img = cabinets413;
     } else if (type == '3'){
      img = cabinets414;
     } else if (type == '4'){
      img = cabinets415;
     }
     popup.innerHTML = `
       <div id="popupImage" style="
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
         width: 500px;
         height: auto;
         background-color: white;
         border-radius: 10px;
         border: 1px solid black;
       ">
       <div style="display: flex; flex-direction: row; width:100%;">
       <h1 style="text-align: center">Кабинет 412</h1>
       <button class="btnPages" height="10px" style="margin-left: auto; background-color: rgba(1, 1, 1, 0.1);" width="10%" onclick="closeImage()">X</button>
       </div>
         <img width="100%" src="${img}">
       </div>
     `;

  document.body.appendChild(popup);
  }

function closeImage(){
  document.getElementById('popupImage').parentElement.removeChild(document.getElementById('popupImage'));
}