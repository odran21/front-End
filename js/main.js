// seleccionamos el elemento al que vamos a ESCUCHAR al dar click.
const navbarEmail = document.querySelector(".navbar-email");
const burguerIcon = document.querySelector(".burguer-icon");
const aside = document.querySelector(".navbar-shopping-cart");
const productDetailClosedIcon = document.querySelector(".product-detail-close");
const closeMenuMobile = document.querySelector(".closeMenuMobile");
const titleContainer = document.querySelector(".title-container");

// seleccionamos el elemento al que vamos a MOSTRAR al dar click.
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");

const cardsContainer = document.querySelector(".cards-container");

navbarEmail.addEventListener("click", toggleDesktopMenu);
burguerIcon.addEventListener("click", toggleMobileMenu);
aside.addEventListener("click", toggleKartMenu);
productDetailContainer.addEventListener("click", closeProductDetailAside);
closeMenuMobile.addEventListener("click", closeProductDetailAside);
titleContainer.addEventListener("click", closeProductDetailAside);
cardsContainer.addEventListener("click", renderDetailProduct);

function toggleDesktopMenu() {
  const isshoppingCartContainerClosed =
    shoppingCartContainer.classList.contains("inactive");

  if (!isshoppingCartContainerClosed) {
    shoppingCartContainer.classList.toggle("inactive");
  }

  desktopMenu.classList.toggle("inactive");
  navbarEmail.classList.toggle("active");
}
function toggleMobileMenu() {
  const isMenuKartClosed = shoppingCartContainer.classList.contains("inactive");

  if (!isMenuKartClosed) {
    shoppingCartContainer.classList.toggle("inactive");
  }

  closeProductDetailAside();

  mobileMenu.classList.toggle("inactive");
}
function toggleKartMenu() {
  const isMenuMobileClosed = mobileMenu.classList.contains("inactive");

  if (!isMenuMobileClosed) {
    mobileMenu.classList.toggle("inactive");
  }
  shoppingCartContainer.classList.toggle("inactive");

  const isProductDetailAside =
    productDetailContainer.classList.contains("inactive");

  if (!isProductDetailAside) {
    productDetailContainer.classList.add("inactive");
  }
}
function openProductDetailAside() {
  shoppingCartContainer.classList.add("inactive");
  productDetailContainer.classList.remove("inactive");
}
function closeProductDetailAside() {
  productDetailContainer.classList.add("inactive");
  mobileMenu.classList.add("inactive");
  shoppingCartContainer.classList.add("inactive");
}

//      Lista de productos.
const productList = [];
productList.push({
  category: "",
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  description:
    "With its practical position, this bike also full fills a decorative function, add your hall or workspace.",
});
productList.push({
  category: "",
  name: "Helmet",
  price: 130,
  image:
    "https://img.freepik.com/psd-premium/detallado-casco-motocicleta-cara-completa-aislado-sobre-fondo-transparente_1066391-8671.jpg?w=740",
  description:
    "With its practical position, this bike also full fills a decorative function, add your hall or workspace.",
});
productList.push({
  category: "",
  name: "Kit Protection",
  price: 110,
  image:
    "https://img.freepik.com/foto-gratis/motorista-cuidadoso-poniendose-equipo_23-2148321960.jpg?t=st=1717617670~exp=1717621270~hmac=74b98514ba87d85ebfb8996cad2f110fdb154a7069bd3127cc774a00f6eda0a8&w=360",
  description:
    "With its practical position, this bike also full fills a decorative function, add your hall or workspace.",
});
productList.push({
  category: "",
  name: "Tricycle",
  price: 130,
  image: "https://images.pexels.com/photos/1230751/pexels-photo-1230751.jpeg",
  description:
    "With its practical position, this bike also full fills a decorative function, add your hall or workspace.",
});
productList.push({
  category: "",
  name: "Computer",
  price: 380,
  image:
    "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  description:
    "With its practical position, this bike also full fills a decorative function, add your hall or workspace.",
});
productList.push({
  category: "",
  name: "Laptop",
  price: 260,
  image:
    "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  description:
    "With its practical position, this bike also full fills a decorative function, add your hall or workspace.",
});
productList.push({
  category: "",
  name: "Monitor",
  price: 230,
  image:
    "https://images.pexels.com/photos/4709291/pexels-photo-4709291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  description:
    "With its practical position, this bike also full fills a decorative function, add your hall or workspace.",
});
productList.push({
  category: "",
  name: "Mouse",
  price: 70,
  image:
    "https://img.freepik.com/fotos-premium/primer-plano-raton-computadora-inalambrico-sobre-fondo-blanco_1048944-9025838.jpg?w=740",
  description:
    "With its practical position, this bike also full fills a decorative function, add your hall or workspace.",
});
productList.push({
  category: "",
  name: "Earphones",
  price: 50,
  image:
    "https://img.freepik.com/foto-gratis/diseno-espacio-trabajo-domestico-minimo_23-2148991402.jpg?t=st=1717519255~exp=1717522855~hmac=209b11c9efe56e0031b368ddcdbb3fc2de35c7011a0632b963d8b2537b2adce5&w=360",
  description:
    "With its practical position, this bike also full fills a decorative function, add your hall or workspace.",
});
productList.push({
  category: "",
  name: "Keyboard",
  price: 60,
  image:
    "https://img.freepik.com/foto-gratis/espacio-fiesta-listo-celebracion-linea_23-2149347242.jpg?t=st=1717519343~exp=1717522943~hmac=407492797e7bbff5923495fba8ff46771fd30f3e4f9fbe8869ad854324bd53c3&w=740",
  description:
    "With its practical position, this bike also full fills a decorative function, add your hall or workspace.",
});

//      Lista de productos en el carrito.
const productsOnCart = [];

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImage = document.createElement("img");
    productImage.setAttribute("src", product.image);
    productImage.addEventListener("click", openProductDetailAside);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerHTML = `$ ${product.price}`;
    productInfoDiv.appendChild(productPrice);
    const productName = document.createElement("p");
    productName.innerHTML = `$ ${product.name}`;
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement("figure");
    const productImgKart = document.createElement("img");
    productImgKart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productImgKart);
    // Insertamos el div (con los <p> de: el precio y el nombre) y el icono de add to kart al div padre con la clase="product-info"
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    // Insertamos el div con la clase = "product-info" y la img del producto al div padre con la class="product-card"
    productCard.appendChild(productImage);
    productCard.appendChild(productInfo);

    // Insertamos el div con class="product-card" al div padre con la class="cards-container"
    cardsContainer.appendChild(productCard);
  }
  for (index in arr) {
    const product = productList[index];
    renderDetailProduct(product);
  }
}

function renderDetailProduct() {
  productDetailContainer.innerHTML = "";

  const divDetailClose = document.createElement("div");
  divDetailClose.classList.add("product-detail-close");
  const imgIconClose = document.createElement("img");
  imgIconClose.setAttribute("src", "./icons/icon_close.png");
  imgIconClose.setAttribute("alt", "close");
   
  const imgProduct = document.createElement("img");
  imgProduct.setAttribute("src", product.image);
  imgProduct.setAttribute("alt", product.name);

  const divPoints = document.createElement("div");
  divPoints.classList.add("points");

  for (let i = 0; i < 3; ++i) {
    const liPoints = document.createElement("li");
    divPoints.appendChild(liPoints);
  }

  const productInfo2 = document.createElement("div");
  productInfo2.classList.add("product-info2");

  const productPrice = document.createElement("p");
  productPrice.innerHTML = `$${product.price}`;
  const productName = document.createElement("p");
  productName.innerHTML = `${product.name}`;
  const productDescription = document.createElement("p");
  productDescription.innerHTML = `${product.description}`;

  const primaryButton = document.createElement("button");
  primaryButton.classList.add("primary-button", "add-to-cart-button");
  primaryButton.textContent = "Add to cart";

  const imgPrimaryButton = document.createElement("img");
  imgPrimaryButton.setAttribute("src", "./icons/bt_add_to_cart.svg");
  imgPrimaryButton.setAttribute("alt", "add to cart");

  // Insertamos las etiquetas hijas dentro de sus padres

  divDetailClose.appendChild(imgIconClose);

  productInfo2.appendChild(productName);
  productInfo2.appendChild(productPrice);
  productInfo2.appendChild(productDescription);

  primaryButton.appendChild(imgPrimaryButton);
  productInfo2.appendChild(primaryButton);

  productDetailContainer.appendChild(divDetailClose);
  productDetailContainer.appendChild(imgProduct);
  productDetailContainer.appendChild(divPoints);
  productDetailContainer.appendChild(productInfo2);
}

renderProducts(productList);
renderDetailProduct();