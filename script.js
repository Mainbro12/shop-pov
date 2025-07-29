let products = [
  {
    name: "Iphone 12 Pro",
    price: 18899,
    oldprice: 20880,
    image: "./Image/Iphone 12 Pro.webp",
    categoryId: 1,
  },
  {
    name: "Iphone X",
    price: 8000,
    oldprice: 10000,
    image: "./Image/Iphone X.jpg",
    categoryId: 1,
  },
  {
    name: "Xiaomi redmi 15  ultra ",
    price: 64889,
    oldprice: 76789,
    image: "./Image/xiaomi_15_ultra_1.jpg",
    categoryId: 1,
  },
  {
    name: "Samsung galaxy flip 7",
    price: 54999,
    oldprice: 59999,
    image: "./Image/Flip7-FE-White.webp",
    categoryId: 1,
  },
  {
    name: "Samsung S24 Ultra",
    price: 57499,
    oldprice: 64174,
    image: "./Image/Samsung S24 Ultra.jpg",
    categoryId: 1,
  },
  {
    name: "Iphone 17 Pro Max",
    price: 117000,
    oldprice: 125000,
    image: "./Image/iphone 17pro Max 256GB.webp",
    categoryId: 1,
  },
  {
    name: "Lenovo IdeaPad 3",
    price: 17999,
    oldprice: 19999,
    image: "./Image/lenovo ideaPad3.webp",
    categoryId: 2,
  },
  {
    name: "ASUS VivoBook 15",
    price: 21999,
    oldprice: 23999,
    image: "./Image/Asus vivobook 15.png",
    categoryId: 2,
  },
  {
    name: "HP Pavilion 14",
    price: 24999,
    oldprice: 26999,
    image: "./Image/HP Pavilion 14.png",
    categoryId: 2,
  },
  {
    name: "Apple MacBook Air M2",
    price: 46999,
    oldprice: 49999,
    image: "./Image/Apple MacBook Air M2.webp",
    categoryId: 2,
  },
  {
    name: "Dell Inspiron 15",
    price: 27999,
    oldprice: 29999,
    image: "./Image/Dell Inspiron 15.webp",
    categoryId: 2,
  },
  {
    name: "Acer Aspire 7",
    price: 23999,
    oldprice: 25999,
    image: "./Image/Acer Aspire 7.webp",
    categoryId: 2,
  },
  {
    name: "Apple iPad 10.2 (2021)",
    price: 13999,
    oldprice: 15999,
    image: "./Image/ipad-2021.jpg",
    categoryId: 3,
  },
  {
    name: "Samsung Galaxy Tab A8",
    price: 8999,
    oldprice: 9999,
    image: "./Image/Samsung Galaxy Tab A8.jpg",
    categoryId: 3,
  },
  {
    name: "Xiaomi Pad 6",
    price: 12499,
    oldprice: 13999,
    image: "./Image/Xiaomi Pad 6.png.webp",
    categoryId: 3,
  },
  {
    name: "Huawei MatePad 11",
    price: 11799,
    oldprice: 12999,
    image: "./Image/Huawei MatePad 11.jpg",
    categoryId: 3,
  },
  {
    name: "Lenovo Tab M10 Plus",
    price: 8499,
    oldprice: 9499,
    image: "./Image/lenovo Tab M10 Plus.jpg",
    categoryId: 3,
  },
  {
    name: "realme Pad 2",
    price: 7699,
    oldprice: 8999,
    image: "./Image/realme Pad 2.jpg",
    categoryId: 3,
  },
];

const categories = [
  {
    id: 1,
    name: "Смартфони",
  },
  {
    id: 2,
    name: "Ноутбуки",
  },
  {
    id: 3,
    name: "Планшети",
  },
];

// Знайти контейнер, куди все вставляється
const parentBlock = document.getElementById("parent");
parentBlock.className = "parent";

document.getElementsByTagName('body')[0].className = "sansita-regular";


// Генерація категорій з товарами
categories.forEach(function (category) {
  // Фільтруємо товари по категорії
  const filteredProducts = products.filter(
    (product) => product.categoryId === category.id
  )

  const sortedProducts = filteredProducts.sort((product1,product2) => product1.price - product2.price)
  // Створюємо заголовок над категорією
  const categoryTitle = document.createElement("h2");
  categoryTitle.textContent = category.name;
  categoryTitle.classList = "category-title intel-One-Mono-bold";
  parentBlock.appendChild(categoryTitle);

  // Створюємо блок для товарів цієї категорії
  const categoryBlock = document.createElement("div");
  categoryBlock.className = "category";

  // Додаємо товари до блоку
  sortedProducts.forEach(function (product) {
    const childBlock = document.createElement("div");
    childBlock.className = "child";
    childBlock.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <p>${product.name}</p>
      <p id="pricecolor">${product.price} ₴</p>
      <p id="oldprice">${product.oldprice} ₴</p>
    `;
    categoryBlock.appendChild(childBlock);
  });

  // Додаємо блок категорії до загального контейнера
  parentBlock.appendChild(categoryBlock);
});
