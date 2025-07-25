let products = [
  {
    name: "Iphone 12 Pro",
    price: 18899,
    image: "./Image/Iphone 12 Pro.webp"
  },
  {
    name: "Iphone X",
    price: 8000,
    image: "./Image/Iphone X.jpg"
  },
  {
    name: "Xiaomi redmi 15  ultra ",
    price: 64889,
    image: "./Image/xiaomi_15_ultra_1.jpg"
  },
  {
    name: "Samsung galaxy flip 7",
    price: 54999,
    image: "./Image/Flip7-FE-White.webp"
  },
  {
    name: "Samsung S24 Ultra",
    price: 57499,
    image: "./Image/Samsung S24 Ultra.jpg"
  },
];

const parentBlock = document.getElementById("parent");          // достає елемент по id "parent"
parentBlock.className = "parent";                             

products.forEach(function (product) {                    // проходиться по кожному елементу
  const childBlock = document.createElement("div");         // створює  дочірній елемент "div"
  childBlock.className = "child";                           //  додає клас "child" до дочірнього елементу               
  childBlock.innerHTML =  
   /* пушить html код всередину елементу
    додається тег img до поточного продукту
    додається тег p з ім'ям поточного продукту
    додається тег p з ціною до поточного продукту
    
   
   */                                
      `                                  
      <img src="${product.image}" >                                   
      <p>${product.name} </p>
      <p id="pricecolor">${product.price} ₴</p>
      `;
      parentBlock.appendChild(childBlock);            // додає всередину parent-блоку child-блок
    });

const button = document.getElementById("addButton")                 // достає елемент кнопки по id
const block = document.getElementById("parent")                      // достає елемент parent block по id

button.addEventListener('click', () => {                                // відстежує подію кліку по кнопці
  const nameInput = document.getElementById("nameProduct");             // достає елемент input по id
  const priceInput = document.getElementById("numbertext");             // достає елемент input по id
  const imageInput = document.getElementById("imageInput");             // достає елемент image по id
  const imagefile = imageInput.files[0];                                // достає перший єдиний файл з input

  if (!imagefile) {                                        // якщо файл не обрано вибиває текст нижче
    alert("Please select an image!");
    return;
  }

  const reader = new FileReader();                        // створюємо обєкт FileReader і зберігаємо змінну

  reader.onload = function(e) {                            // відстежуємо подію onload (після того як завантажили файл)
    const imageUrl = e.target.result;                     // дістаємо URL картинки

    const newItem = {                                       // створюємо новий об'єкт для продукту зі всіма потрібними ключами
      name: nameInput.value,
      price: parseInt(priceInput.value),
      image: imageUrl
    };

    products.push(newItem);                           // додаємо в кінець масиву

    const childBlock = document.createElement("div");               // додаємо новий блок
    childBlock.className = "child";
    childBlock.innerHTML = `
      <img src="${newItem.image}" alt="${newItem.name}">
      <p>${newItem.name}</p>
      <p id="pricecolor">${newItem.price} ₴</p>
    `;
    parentBlock.appendChild(childBlock);

    console.log(products);
  };

  reader.readAsDataURL(imagefile); // викликає метод onload по змінні imageFile коли туди щось завантажили
});


