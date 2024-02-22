// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

window.addEventListener('load', windowLoad);

let collectionsElement, categoriesElements;

function windowLoad() {
   collectionsElement = document.querySelector('.collections');
   categoriesElements = document.querySelectorAll('.collections__column');
   if (collectionsElement) {
      loadProducts();
   }
}
async function loadProducts(start = 0, limit = 3) {
   const productsJson = "files/json/collections.json";
   const response = await fetch(productsJson, {
      metod: "GET"
   });
   if (response.ok) {
      const results = await response.json();
      setProducts(results, start, limit);
   }
}
function setProducts(products, start, limit) {
   const productsArray = products.collections;
   let productTemplate;
   productsArray.forEach((product, index) => {
      if (index >= start && index < (limit + start)) {
         productTemplate = `
			<article id="pid-${product.id}" class="collections__item item">
				<a href="${product.url}" class="item__image">
					<img src="${product.image}" alt="Image">
				</a>
				<div class="item__body">
					<h4 class="item__title">
						<a href="${product.url}" class="item__link-title">${product.title}</a>
					</h4>
					%OLDPRICE%
					<div class="item__price">Rp ${product.price.value}</div>
				</div>
			</article>
			`;
         if (product.price.oldvalue) {
            const oldPrice = `<div class="item__old-price">Rp ${product.price.oldvalue}</div>`;
            productTemplate = productTemplate.replace("%OLDPRICE%", oldPrice);
         } else {
            productTemplate = productTemplate.replace("%OLDPRICE%", '');
         }
         const category = product.category;

         let collectionsItems;

         if (category === 1) {
            collectionsItems = document.querySelector('#cat-01');
         }
         if (category === 2) {
            collectionsItems = document.querySelector('#cat-02');
         }
         if (category === 3) {
            collectionsItems = document.querySelector('#cat-03');
         }
         collectionsItems.insertAdjacentHTML("beforeend", productTemplate);
      }
   });
}

document.addEventListener('click', documentActions);

function documentActions(e) {
   const targetElement = e.target;
   if (targetElement.closest('.footer-collections__button')) {
      const productsQuantity = document.querySelectorAll('.collections__item').length;
      loadProducts(productsQuantity);
      e.preventDefault();
   }
   if (targetElement.closest('.body-product__add-to-cart')) {
      addToCart();
      e.preventDefault();
   }
}

function addToCart() {
   const speed = 1000;
   const headerCart = document.querySelector(".actions-header__cart")
   const headerCartQuantity = headerCart.querySelector("span");
   const producktImage = document.querySelector(".images-product__slide.swiper-slide-active img");
   const producktName = document.querySelector(".body-product__title").innerHTML;
   if (document.querySelector(".price-product__old")) {
      const producktOldPrice = document.querySelector(".price-product__old").innerHTML;
   } else {
      null
   }
   const producktPrice = document.querySelector(".price-product__value");
   const producktQuantity = document.querySelector(".quantity__input input").value;

   const imageFly = producktImage.cloneNode("true")
   const imageFlyBlock = document.createElement("div");
   imageFlyBlock.classList.add("image-fly");
   imageFlyBlock.append(imageFly);

   document.body.append(imageFlyBlock);

   imageFlyBlock.style.cssText = `
   top: ${producktImage.getBoundingClientRect().top}px;
   left: ${producktImage.getBoundingClientRect().left}px;
   width: ${producktImage.offsetWidth}px;
   height: ${producktImage.offsetHeight}px;
   visibility: visible;
   opacity: 0.7;
   `;

   setTimeout(() => {
      imageFlyBlock.style.cssText = `
      position: fixed;
      z-index: 51;
      top: ${headerCart.getBoundingClientRect().top}px;
      left: ${headerCart.getBoundingClientRect().left}px;
      width: 35px;
      height: 35px;
      visibility: hidden;
      opacity: 0;
      transition: all ${speed}ms;
   `;
   }, 5);

   setTimeout(() => {
      headerCartQuantity.innerHTML = +producktQuantity;
      //imageFlyBlock.remove();
   }, speed);


}


